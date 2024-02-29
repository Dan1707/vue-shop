<script setup>
import { ShopData } from "/src/store/store.js";

const ShopStore = ShopData();
</script>

<template>
  <div class="wrapper">
    <ShopSerachWrapper />
    <router-view></router-view>
    <ShopCartWrapper />
  </div>
</template>

<style lang="scss">
body {
  background-color: #f7f8f9;
}
</style>
