<template>
  <div class="header__profile">
    <ShopLoginBtn />
    <span class="header__profile-line"></span>
    <div class="header__profile_action-wrapper">
      <ShopProfileAction :src="`/src/assets/img/filter.svg`" :text="`Filter`" />
      <router-link to="/liked">
        <ShopProfileAction
          :src="`/src/assets/img/like.svg`"
          :text="`Liked`"
          @click="ShopStore.getLikedProducts"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { ShopData } from "/src/store/store.js";

export default {
  setup() {
    const ShopStore = ShopData();

    return { ShopStore };
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__profile {
    @include flex;
    &_action-wrapper {
      @include flex;
      max-width: 105px;
      flex-basis: 100%;
      gap: 15px;
    }
  }
  &__profile-line {
    display: block;
    width: 2px;
    height: 11px;
    background-color: #d5d5d5;
    margin: 0 14px;
  }
}
</style>
