<template>
  <section class="liked">
    <div class="liked__container">
      <router-link to="/" class="liked__home-link"
        >Back to "Home" page</router-link
      >
      <h1 class="liked__title">Liked Products:</h1>

      <template v-if="ShopStore.productIsLiked.length === 0">
        <div class="liked__empty-array">
          <p>Oops... there's nothing you liked yet.</p>
        </div>
      </template>
      <template v-else>
        <div class="liked__item-wrapper">
          <ShopProductItem
            v-for="liked in ShopStore.productIsLiked"
            :key="liked.title"
            :el="liked"
          />
        </div>
      </template>
    </div>
  </section>
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
.liked {
  margin-top: 40px;
  &__container {
    @include container;
  }
  &__home-link {
    color: $primary-color;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
  &__title {
    font-weight: 800;
    font-size: 1.8125rem;
    line-height: 111%;
    color: $dark-color;
    margin-top: 10px;
  }
  &__item-wrapper {
    margin-top: 18px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto, 444px);
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }
  &__empty-array {
    background-color: $primary-color;
    width: 100%;
    padding: 20px;
    font-weight: 500;
    font-size: 22px;
    border-radius: 20px;
    color: $light-color;
    margin-top: 40px;
  }
}
</style>
