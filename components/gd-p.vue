<template>
  <p class="gd-p">
    <Icon v-if="icon" :name="icon" />
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
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
