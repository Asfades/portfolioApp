<template lang="pug">
section.section.myworks
  .myworks__logo
    .myworks__logo-title
      .myworks__logo-title_bg
      .block-title Мои работы
  .myworks__blocks-wrap
    App-Slidedescription(
      :worksView='works[0]'
      :worksPrev='works[2]'
      :worksNext='works[1]'
    )
    App-slideimg(
      :worksView='works[0]'
      :worksPrev='works[2]'
      :worksNext='works[1]'
    )
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({

  }),
  computed: {
    ...mapGetters('works', ['works'])
  },
  methods: {
    ...mapActions('works', ['fetchWorks'])
  },
  created() {
    this.fetchWorks()
  },
  components: {
    AppSlidedescription: require('./Slidedescription'),
    AppSlideimg: require('./Slideimg')
  }
}
</script>

<style lang="scss"></style>