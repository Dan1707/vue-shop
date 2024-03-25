<script setup>
import { ShopData } from "/src/store/store.js";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");

const ShopStore = ShopData();
const router = useRouter();

const loginUser = async () => {
  try {
    const res = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
      email: email.value,
      password: password.value,
    });

    console.log(res.data);

    const content = res.data;

    ShopStore.access_token = content.access_token;
    ShopStore.refresh_token = content.refresh_token;

    router.push("/");
    ShopStore.isGettingLoggedUser = true;
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <section class="login">
    <h2 class="login__title">Login</h2>
    <form class="login-form" @submit.prevent="loginUser">
      <input
        type="email"
        class="login-form__input"
        required
        placeholder="Your Email"
        v-model="email"
      />
      <input
        type="password"
        class="login-form__input"
        required
        placeholder="Password"
        v-model="password"
      />
      <input type="submit" value="Submit login" class="login-form__btn" />
    </form>
    <router-link to="/reg" @click.prevent="ShopStore.showLogin = false">
      <p class="login__reg-link">Haven't got an account?</p>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
.login {
  max-width: 960px;
  margin: 0 auto;
  margin-top: 80px;
  text-align: center;
  &__title {
    font-weight: 800;
    font-size: 40px;
    line-height: 111%;
  }

  &-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background-color: #e9e9e9;
    border-radius: 15px;
    padding: 15px;
    margin-top: 20px;
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
  &__reg-link {
    margin-top: 30px;
    font-weight: 300;
    font-size: 18px;
    color: $primary-color;
  }
}
</style>
