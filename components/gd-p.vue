<template>
  <p class="gd-p">
    <font-awesome-icon v-if="icon" class="icon" :icon="icon" />
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    icon: {
      type: Array,
      required: false,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  async created() {},
};
</script>

<style lang="scss" scoped>
.gd-p {
  margin: 0;

  .icon {
    margin-right: 5px;
  }
}
</style>
