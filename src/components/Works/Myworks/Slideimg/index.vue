<template lang="pug">
.myworks__block.myworks__right
	.myworks__right-slider.slider
		.slider__view {{ workView }}
		.slider__controls
			.slider__control.prev {{ workPrev }}
				.slider__control-overlay
					.slider_arr.down
			.slider__control.next {{ workNext }}
				.slider__control-overlay
					.slider_arr.up
</template>

<script>

export default {
  data: () => ({
    workView: '',
    workPrev: '',
    workNext: ''
  }),
  watch: {
    worksView: function () {
      this.workView = this.worksView.imgLink
    },
    worksPrev: function () {
      this.workPrev = this.worksPrev.imgLink
    },
    worksNext: function () {
      this.workNext = this.worksNext.imgLink
    }
  },
  props: {
    worksView: Object,
    worksPrev: Object,
    worksNext: Object
  },
  methods: {

  },
  mounted () {

  },
  components: {

  }
}
</script>

