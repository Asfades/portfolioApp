<template lang="pug">
.myworks__block.myworks__right
	.myworks__right-slider.slider
		.slider__view(v-bind:style="viewStyle")
		.slider__controls
			.slider__control.prev(v-bind:style="prevStyle")
				.slider__control-overlay
					.slider_arr.down(v-on:click='clickPrev()')
			.slider__control.next(v-bind:style="nextStyle")
				.slider__control-overlay
					.slider_arr.up(v-on:click='clickNext()')
</template>

<script>

export default {
  data: () => ({
    workView: '',
    workPrev: '',
    workNext: '',
    viewStyle: '',
    prevStyle: '',
    nextStyle: ''
  }),
  watch: {
    worksView: function () {
      this.workView = this.worksView.imgLink
      this.viewStyle = {
        background: `url(${this.workView}) no-repeat center / contain`
      }
    },
    worksPrev: function () {
      this.workPrev = this.worksPrev.imgLink
      this.prevStyle = {
        background: `url(${this.workPrev}) no-repeat center / cover`
      }
    },
    worksNext: function () {
      this.workNext = this.worksNext.imgLink
      this.nextStyle = {
        background: `url(${this.workNext}) no-repeat center / cover`
      }
    }
  },
  props: {
    worksView: Object,
    worksPrev: Object,
    worksNext: Object,
    clickPrev: Function,
    clickNext: Function
  },
  methods: {

  },
  mounted () {

  },
  components: {

  }
}
</script>

