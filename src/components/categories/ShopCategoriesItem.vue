<template>
  <button
    class="filter__item"
    @click="
      chooseCategory(el);
      showCategoryItems();
    "
  >
    <p class="filter__item-text">{{ el.name }}</p>
  </button>
</template>

<script setup>
import { onMounted } from "vue";
import { ShopData } from "/src/store/store.js";

defineProps({
  el: Object,
});

const ShopStore = ShopData();

const chooseCategory = (category) => {
  ShopStore.filterCategories.forEach((fil) => {
    fil.isChosen = false;
  });
  category.isChosen = true;
  ShopStore.productsToShowCopy = ShopStore.productsToShow;

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

const showCategoryItems = () => {
  ShopStore.productsToShow.length = 0;

  ShopStore.filterCategories.forEach((el) => {
    if (el.isChosen === true) {
      ShopStore.productArray.forEach((categoryEl) => {
        if (el.name === "All" || categoryEl.category.name === el.name) {
          ShopStore.productsToShow.push(categoryEl);
        }
      });
    }
  });
};

const findCategories = () => {
  ShopStore.productArray.forEach((el) => {
    const newItem = {
      name: el.category.name,
      isChosen: false,
    };
    const filterCategory = ShopStore.filterCategories.find(
      (categoryEl) => categoryEl.name === newItem.name
    );

    if (!filterCategory) {
      ShopStore.filterCategories.push(newItem);
    }
  });
  console.log();
};

onMounted(() => {
  setTimeout(() => {
    findCategories();
    ShopStore.productsToShowCopy = ShopStore.productsToShow;
  }, 1000);
});
</script>

<style lang="scss" scoped></style>
