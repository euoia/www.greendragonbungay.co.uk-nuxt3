<template>
  <gd-p class="gd-event">
    <div>
      <span class="time">{{ computedTime }}</span>
      &nbsp;
      <component :is="href === null ? 'span' : 'a'" :href="href"
        ><span v-html="text" />
      </component>
    </div>
  </gd-p>
</template>

<script>
export default {
  props: {
    starts_at: { type: String, required: true },
    text: { type: String, required: true },
    href: { type: String, required: false },
  },
  computed: {
    computedTime() {
      const startsAt = new Date(this.starts_at);
      return startsAt.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        timeZone: "Europe/London",
      });
    },
  },
};
</script>

<style lang="scss">
.gd-event {
  .time {
    color: var(--dark-grey);
    font-size: 0.8em;
  }

  a {
    text-decoration: none;
  }
}
</style>
