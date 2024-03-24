<script setup>
import axios from "axios";
import { ref } from "vue";

const props = defineProps({
  userData: Object,
});

const emit = defineEmits(["haveToGetUsers"]);

const isEdibale = ref(false);

const deleteUser = async () => {
  await axios
    .delete(`https://api.escuelajs.co/api/v1/users/${props.userData.id}`)
    .then((res) => {
      console.log(res.data);
    });

  emit("haveToGetUsers");
};

const editUser = async () => {
  await axios
    .put(`https://api.escuelajs.co/api/v1/users/${props.userData.id}`, {
      name: props.userData.name,
      password: props.userData.password,
      role: "customer",
      avatar: props.userData.avatar,
    })
    .then((res) => {
      console.log(res.data);
    });

  emit("haveToGetUsers");
};
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h1>User Profile</h1>
    </div>
    <div class="user-info">
      <img class="avatar" :src="userData?.avatar" alt="User Avatar" />
      <template v-if="!isEdibale">
        <h2>{{ userData?.name }}</h2>
        <p>Email: {{ userData?.email }}</p>
        <p>Role: {{ userData?.role }}</p>
      </template>
      <form v-if="isEdibale" class="edit-wrapper">
        <input
          type="text"
          class="edit__input"
          placeholder="User name:"
          required
          v-model="userData.name"
        />

        <input
          type="password"
          class="edit__input"
          placeholder="Password:"
          required
          v-model="userData.password"
        />
        <input
          type="submit"
          class="edit__btn"
          value="Edit user"
          @click.prevent="
            editUser();
            isEdibale = false;
          "
        />
      </form>
    </div>
    <div class="user__btn-wrapper">
      <button @click="isEdibale = true" class="delete_button edit">edit</button>
      <button @click="deleteUser" class="delete_button">x</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px auto;
  position: relative;
}
.card-header {
  background-color: #007bff;
  color: #fff;
  padding: 20px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px auto;
  display: block;
}
.user-info {
  padding: 20px;
  text-align: center;
}
.user-info h2 {
  margin-top: 0;
}
.user-info p {
  margin-bottom: 10px;
}

.delete_button {
  position: absolute;
  display: flex;
  z-index: 90;
  right: 12px;
  top: 12px;
  border-radius: 5px;
  border: none;
  border: solid 1px;
  font-size: 16px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 160%;
  font-weight: bold;
  width: 30px;
  height: 30px;
  color: #ffffff;
  background-color: #ff0000;
  justify-content: center;
  align-items: center;
}

.delete_button:hover {
  transform: scale(1.1);
}

.edit {
  right: 50px;
  background-color: #61e761;
  width: 50px;
}

.edit-wrapper {
  background-color: #e9e9e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 15px;
  padding: 5px;
  flex-basis: 100%;
  max-width: 100%;
}

.edit__input {
  background-color: #ffffffff;
  width: 100%;
  border-radius: 15px;
  padding: 8px 13px;
}

.edit__btn {
  background-color: #00b2f2;
  color: #ffffffff;
  border-radius: 15px;
  padding: 10px 5px;
  font-weight: 500;
  font-size: 18px;
  width: 100%;
}
</style>
