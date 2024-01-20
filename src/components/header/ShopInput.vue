<template>
  <form class="header__input-wrapper">
    <input
      v-model="ShopStore.productName"
      type="search"
      class="header__input"
      placeholder="I'm looking for..."
      @input.prevent="ShopStore.getData"
      @keypress.enter.prevent="ShopStore.productShow = true"
    />
    <div class="header__input-btn_wrapper">
      <button class="header__input-btn">
        <img src="/src/assets/img/micro.svg" class="header__input-btn_ico" />
      </button>
      <button
        class="header__input-btn"
        @click.prevent="ShopStore.productShow = true"
      >
        <img src="/src/assets/img/search.svg" class="header__input-btn_ico" />
      </button>
    </div>
  </form>
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
  &__input-wrapper {
    @include flex;
    max-width: 900px;
    flex-basis: 100%;
    border-radius: 8px;
    border: 1px solid #e4e4e4;
    padding: 8px 10px;
  }

  &__input {
    max-width: 90%;
    flex-basis: 100%;
  }

  &__input,
  &__input::placeholder {
    font-weight: 400;
    color: $secondary-color;
    font-size: 0.75rem;
  }

  &__input-btn {
    &_wrapper {
      @include flex;
      max-width: 50px;
      flex-basis: 100%;
    }
  }
}
</style>
