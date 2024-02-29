<template>
  <div class="product__item">
    <div class="product__item_img-wrapper">
      <img :src="el.images[0]" alt="" class="product__item_img" />
    </div>
    <div class="product__item_info">
      <div class="product__item_info-start">
        <h2 class="product__item-title">
          {{ el.title }}
        </h2>
      </div>
      <div class="product__item_buy-wrapper">
        <div class="product__item_info-prices">
          <p class="product__item-price-title">Price:</p>
          <p class="product__item-prevprice">{{ el.price }}$</p>
        </div>
        <template v-if="el.isInCart === true">
          <ShopCartBtn
            @click="
              el.isInCart = true;
              ShopStore.getProductsInCart(el);
            "
            :ico="`https://img.icons8.com/ios-filled/50/FFFFFF/approval.png`"
            :style="`opacity: 50%`"
          />
        </template>
        <template v-else>
          <ShopCartBtn
            @click="
              el.isInCart = true;
              ShopStore.getProductsInCart(el);
              calcCartPrices(el);
            "
            :ico="`/src/assets/img/cart.svg`"
            :style="`opacity: 100%`"
          />
        </template>
      </div>

      <template v-if="el.isLiked === true">
        <div class="product__item_profile-actions" :style="`opacity: 100%`">
          <ShopProductProfileAction
            :src="`/src/assets/img/liked_product.png`"
            :text="`Liked`"
            @click="
              el.isLiked = !el.isLiked;
              ShopStore.getLikedProducts(el);
            "
          />
        </div>
      </template>
      <template v-else>
        <div class="product__item_profile-actions" :style="`opacity: 0%`">
          <ShopProductProfileAction
            :src="`/src/assets/img/like.svg`"
            :text="`Liked`"
            @click="
              el.isLiked = !el.isLiked;
              ShopStore.getLikedProducts(el);
            "
          />
        </div>
      </template>
    </div>
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

    const calcCartPrices = (el) => {
      return (ShopStore.calcCartProductsNum =
        ShopStore.calcCartProductsNum + el.price);
    };

    return { ShopStore, calcCartPrices };
  },
};
</script>

<style lang="scss">
.product {
  &__item {
    background-color: $light-color;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 38px;
    padding: 32px 0;
    position: relative;
    &:hover {
      .product__item_profile-actions {
        opacity: 100% !important;
      }
    }
    &_img-wrapper {
      max-width: 200px;
      max-height: 200px;
      overflow: hidden;
    }

    &_img {
      width: 100%;
      height: 100%;
    }

    &_info {
      padding: 16px;
      display: flex;
      flex-direction: column;
      row-gap: 24px;
      margin-bottom: 16px;
      width: 100%;
    }

    &_buy-wrapper {
      @include flex;
      width: 100%;
    }
    &_profile-actions {
      position: absolute;
      right: 0;
      bottom: 0;
      margin: 16px;
      display: flex;
      gap: 10px;
      transition: 0.3s;
      opacity: 0%;
    }
  }

  &__item-title {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 128%;
    height: 40px;
    color: $dark-text-color;
  }

  &__item-price-title {
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 116%;
    color: $secondary-color;
  }

  &__item-lowprice {
    font-weight: 700;
    font-size: 1.0625rem;
    line-height: 117%;
    color: $sale-color;
  }

  &__item-prevprice {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 131%;
    color: $secondary-color;
  }
}
</style>
