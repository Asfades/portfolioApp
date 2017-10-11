<template lang="pug">
section.section.myworks
  .myworks__logo
    .myworks__logo-title
      .myworks__logo-title_bg
      .block-title Мои работы
  .myworks__blocks-wrap
    App-Slidedescription(
      :works='works'
    )
    App-slideimg(
      :works='works'
    )
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({

  }),
  computed: {
    ...mapGetters(['works'])
  },
  methods: {
    ...mapActions(['fetchWorks'])
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