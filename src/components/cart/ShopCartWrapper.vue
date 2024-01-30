<template>
  <template v-if="ShopStore.showCart">
    <section class="cart">
      <div class="cart__container">
        <span class="cart__exit" @click="ShopStore.showCart = false">
          <img
            src="https://cdn-icons-png.flaticon.com/512/58/58253.png"
            class="cart__exit_img"
          />
        </span>
        <h2 class="cart__title">Product Cart</h2>
        <template v-if="ShopStore.productsInCart.length === 0">
          <ShopEmptyWarning :text="`there's nothing in cart section yet`" />
        </template>
        <template v-else>
          <div class="cart__item-wrapper">
            <div class="cart__item-wrapper_container">
              <ShopCartItem
                v-for="cart in ShopStore.productsInCart"
                :el="cart"
                :key="cart.title"
              />
            </div>
          </div>
        </template>
        <div class="cart__buy-wrapper">
          <div class="cart__buy">
            <h4 class="cart__total">
              Total: {{ ShopStore.calcCartProductsNum }}$
            </h4>
            <button class="cart__buy-btn">Buy All</button>
          </div>
        </div>
      </div>
    </section>
  </template>
</template>

<script>
import { onMounted } from "vue";
import { ShopData } from "/src/store/store.js";

export default {
  setup() {
    const ShopStore = ShopData();

    onMounted(() => {
      ShopStore.getData();
    });

    return { ShopStore };
  },
};
</script>

<style lang="scss" scoped>
.cart {
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  z-index: 101;
  &__container {
    position: relative;
    flex-basis: 100%;
    max-width: 1050px;
    background-color: $light-color;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px #000;
    text-align: center;
    color: $dark-color;
    overflow: hidden;
  }
  &__title {
    font-weight: 800;
    font-size: 40px;
    line-height: 111%;
  }
  &__item-wrapper {
    padding: 3px;
    border-radius: 15px;
    border: 2px $dark-color solid;
    margin-top: 30px;
    background-color: $secondary-color;
    &_container {
      border-radius: 15px;
      overflow: hidden;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
    }
  }
  &__buy-wrapper {
    margin: 0 auto;
    margin-top: 20px;
    border-top: 1px $secondary-color solid;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  &__buy {
    @include flex;
    flex-basis: 100%;
    max-width: 400px;
  }
  &__total {
    font-weight: 700;
    font-size: 25px;
  }
  &__buy-btn {
    font-weight: 500;
    border-radius: 10px;
    font-size: 18px;
    padding: 10px 35px;
    background-color: $price-color;
    color: $light-color;
  }
  &__exit {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0;
    right: 0;
    transition: 0.3s;
    padding: 5px;
    border-radius: 5px;

    &:hover {
      background-color: $sale-color;
    }

    &_img {
      width: 100%;
    }
  }
}
</style>
