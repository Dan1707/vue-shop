<template>
  <section class="product">
    <div class="product__container">
      <h1 class="product__title">Our Products:</h1>
      <div class="product__item-wrapper">
        <ShopProductItem />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.product {
  margin-top: 40px;
  &__container {
    @include container;
  }

  &__title {
    font-weight: 800;
    font-size: 1.8125rem;
    line-height: 111%;
    color: $dark-color;
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
}
</style>
