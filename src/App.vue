<template lang="pug">
#app
  .hero.is-link
    .hero-body
      VueMarkdown.title.is-1 {{ name }}

  .v-app-columns(v-if='langs')

    .hvr-grow.box(v-for='i in langs')
      label.label {{ i.title }}
      p {{ i.body }}
</template>

<script>
import store from '@/store'
import VueMarkdown from 'vue-markdown'

export default {
  components: {VueMarkdown},
  computed: {
    name: () => store.state.app.name,
    langs: () => store.state.app.langs,
  },
  mounted() {
    store.dispatch('app/LANGS')
  }
}
</script>

<style lang="sass">
#app
  // padding: 20px

  .v-app-columns
    padding: 20px
    display: flex
    flex-wrap: wrap

    .box
      margin: 0

      +hover
        opacity: 0.7

      +tile(32, 20)

</style>
