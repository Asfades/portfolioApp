<template lang="pug">
.myworks__block.myworks__right
	.myworks__right-slider.slider
		.slider__view(:style="workView")
		.slider__controls
			.slider__control.prev(:style="workPrev")
				.slider__control-overlay
					.slider_arr.down( @click="slideDown" )
			.slider__control.next(:style="workNext")
				.slider__control-overlay
					.slider_arr.up( @click="slideUp" )
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
      this.workView = `background-image: url(${this.worksView.imgLink})`
    },
    worksPrev: function () {
      this.workPrev = `background-image: url(${this.worksPrev.imgLink})`
    },
    worksNext: function () {
      this.workNext = `background-image: url(${this.worksNext.imgLink})`
    }
  },
  props: {
    worksView: Object,
    worksPrev: Object,
    worksNext: Object
  },
  methods: {
    slideUp() {
      this.$emit('slideUp', this.workNext)
    },
    slideDown() {
      this.$emit('slideDown', this.workPrev)
    }
  },
  mounted () {

  },
  components: {

  }
}
</script>

