<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const userName = ref("");
const userEmail = ref("");
const userPassword = ref("");
let userData = ref();

const getUsers = async () => {
  try {
    const user = await axios
      .get("https://api.escuelajs.co/api/v1/users")
      .then((res) => {
        userData.value = res.data.reverse();
      });
    console.log(userData.value);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async () => {
  try {
    const reg = await axios.post(`https://api.escuelajs.co/api/v1/users/`, {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
      role: "customer",
      avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
      id: Math.random() * 99999,
    });
    console.log(reg.data);
    getUsers();
  } catch (error) {
    console.log(error);
  }
};

getUsers();
</script>

<template>
  <form class="reg">
    <div class="reg__container">
      <h1 class="reg__title">Create user</h1>
      <input
        type="text"
        class="reg__input"
        placeholder="User name:"
        required
        v-model="userName"
      />
      <input
        type="email"
        class="reg__input"
        placeholder="Email:"
        required
        v-model="userEmail"
      />
      <input
        type="password"
        class="reg__input"
        placeholder="Password:"
        required
        v-model="userPassword"
      />
      <input
        type="submit"
        class="reg__btn"
        value="Create an account"
        @click.prevent="
          createUser();
          userName = ``;
          userEmail = ``;
          userPassword = ``;
        "
      />
    </div>
  </form>
  <div class="user-wrapper">
    <ShopUserCard
      v-for="user in userData"
      :key="user.id"
      :userData="user"
      @haveToGetUsers="getUsers"
    />
  </div>
</template>

<style lang="scss" scoped>
.reg {
  max-width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  &__container {
    background-color: #e9e9e9;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-radius: 15px;
    padding: 15px;
    flex-basis: 100%;
    max-width: 960px;
  }

  &__title {
    font-weight: 800;
    font-size: 40px;
    line-height: 111%;
    color: $dark-color;
  }
  &__input {
    background-color: $light-color;
    width: 100%;
    border-radius: 15px;
    padding: 8px 13px;
  }
  &__btn {
    background-color: $primary-color;
    color: $light-color;
    border-radius: 15px;
    padding: 18px 10px;
    font-weight: 500;
    font-size: 24px;
    width: 100%;
  }
}

.user-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
