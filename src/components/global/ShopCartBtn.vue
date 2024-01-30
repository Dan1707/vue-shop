<template>
  <button class="header__cart-btn">
    <img :src="ico" class="header__cart-btn_ico" />
    <p class="header__cart-btn_text">Cart</p>
  </button>
</template>

<script>
export default {
  props: {
    ico: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__cart-btn {
    @include flex;
    justify-content: center;
    gap: 10px;
    border-radius: 4px;
    padding: 10px 28px;
    background-color: $price-color;

    &_ico {
      width: 20px;
      height: 20px;
    }

    &_text {
      color: $light-color;
      font-size: 0.5625rem;
      font-weight: 700;
      line-height: 130%;
    }
  }
}
</style>
