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
          <p class="product__item-lowprice">{{ el.price }}$</p>
          <p class="product__item-prevprice">{{ el.price + 10 }}$</p>
        </div>
        <ShopCartBtn />
      </div>

      <template v-if="el.isLiked === true">
        <div class="product__item_profile-actions" :style="`opacity: 100%`">
          <ShopProductProfileAction
            :src="`/src/assets/img/filter.svg`"
            :text="`Filter`"
          />
          <ShopProductProfileAction
            :src="`/src/assets/img/liked_product.png`"
            :text="`Liked`"
            @click="
              el.isLiked = !el.isLiked;
              ShopStore.getLikedProducts();
            "
          />
        </div>
      </template>
      <template v-else>
        <div class="product__item_profile-actions" :style="`opacity: 0%`">
          <ShopProductProfileAction
            :src="`/src/assets/img/filter.svg`"
            :text="`Filter`"
          />
          <ShopProductProfileAction
            :src="`/src/assets/img/like.svg`"
            :text="`Liked`"
            @click="
              el.isLiked = !el.isLiked;
              ShopStore.getLikedProducts();
            "
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { ShopData } from "/src/store/store.js";
import { ref } from "vue";

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

<style lang="scss">
.product {
  &__item {
    background-color: $light-color;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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
      align-items: start;
      row-gap: 24px;
      margin-bottom: 16px;
    }

    &_buy-wrapper {
      @include flex;
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
    font-size: 0.75rem;
    line-height: 131%;
    color: $secondary-color;
    text-decoration: line-through;
  }
}
</style>
