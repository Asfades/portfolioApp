<template lang="pug">
section.section.myworks
  .myworks__logo
    .myworks__logo-title
      .myworks__logo-title_bg
      .block-title Мои работы
  .myworks__blocks-wrap
    App-Slidedescription(
      :worksView='works[viewNum]'
    )
    App-slideimg(
      :worksView='works[viewNum]'
      :worksPrev='works[prevNum]'
      :worksNext='works[nextNum]'
      @slideUp="nextClick()"
      @slideDown="prevClick()"
    )
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    prevNum: Number,
    viewNum: 0,
    nextNum: 1
  }),
  watch: {
    works: function () {
      this.prevNum = this.works.length - 1
    }
  },
  computed: {
    ...mapGetters('works', ['works'])
  },
  methods: {
    ...mapActions('works', ['fetchWorks']),
    prevClick () {
      (this.prevNum === 0) ? this.prevNum = (this.works.length - 1)
        : this.prevNum -= 1;
      (this.viewNum === 0) ? this.viewNum = (this.works.length - 1)
        : this.viewNum -= 1;
      (this.nextNum === 0) ? this.nextNum = (this.works.length - 1)
        : this.nextNum -= 1
    },
    nextClick () {
      this.prevNum += 1
      this.viewNum += 1
      this.nextNum += 1
      if (this.prevNum === this.works.length) this.prevNum = 0
      if (this.viewNum === this.works.length) this.viewNum = 0
      if (this.nextNum === this.works.length) this.nextNum = 0
    }
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