<script setup>
import { ref } from "vue";

import { ShopData } from "/src/store/store.js";

const ShopStore = ShopData();

const filterCheepProducts = () => {
  console.log(ShopStore.defineAction);

  const arr = [...ShopStore.productsToShow];

  if (ShopStore.defineAction === "Cheep") {
    let temp;

    arr.forEach((el) => {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].price > arr[i + 1].price) {
          temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    });

    ShopStore.productsToShow = arr;
  }
  if (ShopStore.defineAction === "Expansive") {
    let temp;

    arr.forEach((el) => {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].price < arr[i + 1].price) {
          temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    });

    ShopStore.productsToShow = arr;
  } else if (ShopStore.defineAction === "All") {
    ShopStore.productsToShow = ShopStore.productsToShowCopy;
  }
};
</script>

<template>
  <div class="header__filters">
    <h3 class="header__filters_title">Filters:</h3>
    <button
      class="header__filters_btn"
      @click="
        ShopStore.defineAction = `Cheep`;
        filterCheepProducts();
      "
    >
      Most Cheepiest
    </button>
    <button
      class="header__filters_btn"
      @click="
        ShopStore.defineAction = `Expansive`;
        filterCheepProducts();
      "
    >
      Most Expansive
    </button>
    <button
      class="header__filters_btn"
      @click="
        ShopStore.defineAction = `All`;
        filterCheepProducts();
      "
    >
      All
    </button>
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__filters {
    text-align: center;
    width: 200px;
    position: absolute;
    top: 55px;
    background-color: $light-color;
    box-shadow: 0px 4px 4px 0px rgba(34, 45, 74, 0.1);
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    &_btn {
      padding: 6px 15px;
      border: 1px $dark-color solid;
      border-radius: 20px;
      text-align: center;
    }
  }
}
</style>
