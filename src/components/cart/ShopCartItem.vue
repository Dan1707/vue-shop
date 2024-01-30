<template>
  <div class="cart__item">
    <div class="cart__item_img-wrapper">
      <img :src="el.images[0]" class="cart__item_img" />
    </div>
    <div class="cart__item_info">
      <div class="cart__item_naming">
        <p class="cart__item_type">Type: {{ el.category.name }}</p>
        <h3 class="cart__item_title">
          {{ el.title }}
        </h3>
      </div>
      <div class="cart__item_prices">
        <p class="cart__item_price-text">Price:</p>
        <h3 class="cart__item_price">{{ el.price }}$</h3>
      </div>
    </div>
    <ShopDeleteBtn
      @click="
        el.isInCart = false;
        ShopStore.getProductsInCart(el);
        ShopStore.calcCartProductsNum =
          ShopStore.calcCartProductsNum - el.price;
      "
    />
  </div>
</template>

<script>
import { ShopData } from "/src/store/store.js";

export default {
  props: {
    el: Object,
  },
  setup() {
    const ShopStore = ShopData();

    return { ShopStore };
  },
};
</script>

<style lang="scss" scoped>
.cart {
  &__item {
    @include flex;
    padding: 15px;
    width: 100%;
    background-color: $light-color;
    text-align: left;

    &_img-wrapper {
      max-width: 120px;
      flex-basis: 100%;
      overflow: hidden;
    }
    &_img {
      width: 100%;
    }

    &_info {
      @include flex;
      align-items: flex-start;
    }

    &_title {
      font-weight: 500;
      font-size: 18px;
      max-width: 200px;
      flex-basis: 100%;
      align-items: start;
      margin-top: 6px;
    }
    &_type {
      font-weight: 400;
      font-size: 14px;
      color: $secondary-color;
    }
    &_price {
      font-weight: 500;
      font-size: 20px;
      margin-top: 6px;
    }
    &_price-text {
      font-weight: 400;
      font-size: 14px;
      color: $secondary-color;
    }
    &_delete {
      padding: 10px 28px;
      border-radius: 10px;
      background-color: $sale-color;
      color: $light-color;
    }
  }
}
</style>
