<template>
  <gd-p>
    <div>
      <b>{{ computedDate }}</b>
    </div>
    <div>
      <Icon v-if="icon" :name="icon" />&nbsp;&nbsp;<span v-html="title" />
    </div>
    <div v-for="paragraph in paragraphs" :key="paragraph" v-html="paragraph" />
  </gd-p>
</template>

<script>
export default {
  props: {
    date: { type: String, required: true },
    icon: { type: String, required: true },
    title: { type: String, required: false },
    paragraphs: { type: String, required: false },
  },
  computed: {
    computedDate() {
      const date = new Date(this.date);
      return date.toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
      });
    },
  },
};
</script>

<style></style>
