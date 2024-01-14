<template>
  <div></div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped></style>
