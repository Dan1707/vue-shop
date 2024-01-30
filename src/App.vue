<template>
  <div class="wrapper">
    <ShopSerachWrapper />
    <router-view></router-view>
    <ShopCartWrapper />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
body {
  background-color: #f7f8f9;
}
</style>
