<template>
  <div class="gd-quote">
    <a :href="href">
      <span class="quote lquote">&ldquo;</span>
      <span v-html="quote" />
      <span class="quote rquote">&rdquo;</span>
      <br />
      <i class="author">&horbar; <span v-html="author" /></i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.gd-quote {
  font-size: 2em;
  line-height: 1.3em;
  padding-left: 4em;
  padding-right: 4em;

  .quote {
    font-size: 2em;
  }

  .lquote {
    margin-right: 0.1em;
  }

  .rquote {
    margin-left: 0.1em;
  }

  .author {
    color: var(--dark-grey);
    font-size: 0.8em;
  }

  a {
    text-decoration: none;
    color: var(--body-color);
  }
}
</style>
