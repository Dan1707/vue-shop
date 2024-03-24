<script setup>
defineProps({
  src: String,
  text: String,
});
</script>

<template>
  <button class="header__profile_action">
    <img :src="src" class="header__profile_action-img" />
    <p class="header__profile_action-name">{{ text }}</p>
  </button>
</template>

<style lang="scss" scoped>
.header {
  &__profile {
    &_action-name {
      font-weight: 400;
      font-size: 0.5625rem;
      color: $dark-color;
      line-height: 122%;
    }
    &_action-img {
      width: 25px;
      height: 24px;
      overflow: hidden;
    }
  }
}
</style>
