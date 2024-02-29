<script setup>
import { ShopData } from "/src/store/store.js";

const ShopStore = ShopData();

if (ShopStore.productName === "") {
  ShopStore.productsToShow.length = 0;

  ShopStore.productArray.forEach((el) => {
    ShopStore.productsToShow.push(el);
  });
}

const findProdShow = (foundndTitle) => {
  ShopStore.productsToShow = ShopStore.productsToShow.filter(
    (el) => foundndTitle === el.title
  );
  console.log(foundndTitle);
};

window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("header__input")) {
    ShopStore.showProducts = false;
  }
});
</script>

<template>
  <form class="header__input-wrapper">
    <input
      v-model="ShopStore.productName"
      type="search"
      class="header__input"
      placeholder="I'm looking for..."
      @click="ShopStore.showProducts = true"
      @keypress.enter.prevent="ShopStore.filterProducts()"
      @input.prevent="ShopStore.filterProducts"
    />
    <div class="header__input-btn_wrapper">
      <button class="header__input-btn">
        <img src="/src/assets/img/micro.svg" class="header__input-btn_ico" />
      </button>
      <button
        class="header__input-btn"
        @click.prevent="ShopStore.filterProducts"
      >
        <img src="/src/assets/img/search.svg" class="header__input-btn_ico" />
      </button>
    </div>
    <div class="header__input-searching" v-if="ShopStore.showProducts">
      <div
        v-for="findProd in ShopStore.productsToShow"
        :key="findProd"
        class="header__input-searching_item"
        @click="findProdShow(findProd.title)"
      >
        {{ findProd.title }}
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.header {
  &__input-wrapper {
    @include flex;
    max-width: 900px;
    flex-basis: 100%;
    border-radius: 8px;
    border: 1px solid #e4e4e4;
    padding: 8px 10px;
    position: relative;
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

  &__input-searching {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    top: 55px;
    width: 100%;
    box-shadow: 0px 4px 4px 0px rgba(34, 45, 74, 0.1);

    &_item {
      background-color: $light-color;
      padding: 13px 20px;
      width: 100%;
      cursor: pointer;
      &:hover {
        background-color: $primary-color;
        color: $light-color;
      }
    }
  }
}
</style>
