<template lang="pug">
section.section.myworks
  .myworks__logo
    .myworks__logo-title
      .myworks__logo-title_bg
      .block-title Мои работы
  .myworks__blocks-wrap
    App-Slidedescription(
      :worksView='works[0]'
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
    work: ['', '', ''],
    prevNum: this.work.length - 1,
    viewNum: 0,
    nextNum: 1
  }),
  watch: {
    works: function () {
      this.work = this.works
      console.log(this.work)
      console.log(this.works)
    }
  },
  computed: {
    ...mapGetters('works', ['works'])
  },
  methods: {
    ...mapActions('works', ['fetchWorks']),
    prevClick () {
      (this.prevNum === 0) ? this.prevNum = (this.work.length - 1)
        : this.prevNum -= 1;
      (this.viewNum === 0) ? this.viewNum = (this.work.length - 1)
        : this.viewNum -= 1;
      (this.nextNum === 0) ? this.nextNum = (this.work.length - 1)
        : this.nextNum -= 1
    },
    nextClick () {
      this.prevNum += 1
      this.viewNum += 1
      this.nextNum += 1
      if (this.prevNum === this.work.length) this.prevNum = 0
      if (this.viewNum === this.work.length) this.viewNum = 0
      if (this.nextNum === this.work.length) this.nextNum = 0
    }
  },
  created() {
    this.fetchWorks()
    console.log(this.work)
  },
  components: {
    AppSlidedescription: require('./Slidedescription'),
    AppSlideimg: require('./Slideimg')
  }
}
</script>

<style lang="scss"></style>