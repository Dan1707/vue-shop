<template>
  <button class="header__profile-login">
    <img src="/src/assets/img/profile.svg" class="header__profile-login_ico" />
    <p class="header__profile-login_text">Login</p>
  </button>
</template>

<script setup>
import { ShopData } from "/src/store/store.js";
const ShopStore = ShopData();
</script>

<style lang="scss" scoped>
.header {
  &__profile-login {
    @include flex;
    justify-content: center;
    padding: 8px 10px;
    gap: 7px;
    border-radius: 8px;
    border: 1px solid $dark-color;
    flex-basis: 100%;
    width: 90px;

    &_text {
      font-weight: 800;
      font-size: 0.625rem;
      color: $dark-color;
      text-transform: uppercase;
    }
  }
}
</style>
