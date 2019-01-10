<template lang="pug">
#app
  .hero.is-link
    .hero-body
      VueMarkdown.title.is-1 {{ md }}
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {VueMarkdown},
  data() {
    return {
      md: `# Title`
    }
  },
}
</script>

<style lang="sass">
#app
  padding: 20px

</style>
