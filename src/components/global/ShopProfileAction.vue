<template>
  <button class="header__profile_action">
    <img :src="src" class="header__profile_action-img" />
    <p class="header__profile_action-name">{{ text }}</p>
  </button>
</template>

<script>
export default {
  props: {
    src: String,
    text: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__profile {
    &_action-name {
      font-weight: 400;
      font-size: 0.5625rem;
      color: $dark-color;
      line-height: 122%;
    }
  }
}
</style>
