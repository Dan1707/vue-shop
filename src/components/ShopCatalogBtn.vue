<template>
  <button class="header__catalog-btn">
    <img src="/src/assets/img/catalog.svg" alt="catalog_ico" />
    <p class="header__catalog-btn_text">Catalog</p>
  </button>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../src/assets/scss/imports.scss";

.header {
  &__catalog-btn {
    @include flex;
    justify-content: center;
    padding: 10px 32px;
    background-color: $primary-color;
    border-radius: 4px;
    gap: 10px;

    &_text {
      font-weight: 400;
      font-size: 16px;
      color: $light-color;
      line-height: 112%;
    }
  }
}
</style>
