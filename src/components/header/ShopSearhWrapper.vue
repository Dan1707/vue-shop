<script setup>
import { ShopData } from "/src/store/store.js";

const ShopStore = ShopData();
</script>

<template>
  <header class="header">
    <div class="header__container">
      <ShopLogo />
      <ShopInput />
      <ShopProfile />
      <ShopCartBtn
        @click="
          ShopStore.showCart = true;
          ShopStore.calcCartProducts();
        "
        :ico="`/src/assets/img/cart.svg`"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  box-shadow: 0px 4px 4px 0px rgba(34, 45, 74, 0.1);
  width: 100%;
  padding: 12px 0;
  position: sticky;
  top: 0;
  background-color: $light-color;
  z-index: 100;
  &__container {
    @include flex;
    @include container;
    gap: 10px;
  }
}
</style>
