<template>
  <div class="empty-array">
    <p>Oops... {{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.empty-array {
  background-color: $primary-color;
  width: 100%;
  padding: 20px;
  font-weight: 500;
  font-size: 22px;
  border-radius: 20px;
  color: $light-color;
  margin-top: 40px;
}
</style>
