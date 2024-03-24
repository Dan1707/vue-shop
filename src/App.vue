<script setup>
import { ShopData } from "/src/store/store.js";
import { onMounted } from "vue";
import { ref } from "vue";
import axios from "axios";

const ShopStore = ShopData();
let message = ref("Hi, you aren`t logged in!");

const getLoggedUser = async () => {
  try {
    const res = await axios.get(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${ShopStore.access_token}`,
        },
      }
    );

    console.log(`${res.data} !!!!`);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  ShopStore.getData();
  getLoggedUser();
});
</script>

<template>
  <div class="wrapper">
    <ShopSerachWrapper />
    <h1>{{ message }}</h1>
    <router-view></router-view>
    <ShopCartWrapper />
    <ShopLoginWrapper />
  </div>
</template>

<style lang="scss">
body {
  background-color: #f7f8f9;
}
</style>
