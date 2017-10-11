<template lang="pug">
.myworks__block.myworks__right
	.myworks__right-slider.slider
		.slider__view
		.slider__controls
			.slider__control.prev
				.slider__control-overlay
					.slider_arr.down
			.slider__control.next
				.slider__control-overlay
					.slider_arr.up
</template>

<script>

export default {
  data: () => ({

  }),
  props: {
    works: Array
  },
  created() {

  },
  methods: {
    helo () {
    }
  },
  components: {

  }
}
</script>

