<template>
  <gd-p class="gd-event">
    <div>
      <b>{{ computedDate }}</b>
    </div>
    <gd-event v-for="event in events" v-bind="event" :key="`${event.starts_at} ${event.text}`" />
  </gd-p>
</template>

<script>
export default {
  props: {
    date: { type: String, required: true },
    events: { type: Array, required: true },
  },
  computed: {
    computedDate() {
      const date = new Date(this.date);
      return date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },
  },
};
</script>

<style></style>
