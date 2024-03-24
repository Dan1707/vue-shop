<script setup>
import { ShopData } from "/src/store/store.js";
import { ref } from "vue";

const ShopStore = ShopData();

const showFilters = ref(false);
</script>

<template>
  <div class="header__profile">
    <router-link to="/login">
      <ShopLoginBtn />
    </router-link>
    <span class="header__profile-line"></span>
    <div class="header__profile_action-wrapper">
      <div class="header__filters-wrapper">
        <ShopProfileAction
          :src="`/src/assets/img/filter.svg`"
          :text="`Filter`"
          @click="showFilters = !showFilters"
          class="filter-btn"
        />

        <template v-if="showFilters">
          <ShopFilterWrapper />
        </template>
      </div>
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

  &__filters-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
