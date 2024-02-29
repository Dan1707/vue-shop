<script setup>
import { ShopData } from "/src/store/store.js";

const ShopStore = ShopData();
</script>

<template>
  <section class="filter">
    <div class="filter__container">
      <div class="filter__item-wrapper">
        <ShopCategoriesItem
          v-for="filter in ShopStore.filterCategories"
          :key="filter.name"
          :el="filter"
          :class="{ active: filter.isChosen }"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.filter {
  @include container;
  margin: 20px 0;
  &__container {
    padding: 10px;
  }

  &__item-wrapper {
    @include flex;
    justify-content: start;
    width: 100%;
    gap: 10px;
  }

  &__item {
    text-align: center;
    background-color: $light-color;
    padding: 4px 14px;
    border-radius: 20px;
    transition: 0.3s;
  }

  &__item-text {
    font-weight: 500;
    font-size: 0.875rem;
    color: $dark-color;
    line-height: 218%;
  }
}

.active {
  background-color: $primary-color;
  font-weight: 700;
  color: $light-color;
}
</style>
