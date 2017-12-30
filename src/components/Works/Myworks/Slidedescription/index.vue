<template lang="pug">
.myworks__block.myworks__left
	.myworks__left-content
		.myworks__content__title
			.block-subtitle {{ workContentTitle }}
		.myworks__content__description
			.myworks-description {{ workContentDescription }}
		.myworks__content__button
			a(href="#" target="_blank").myworks-btn
				.myworks-btn__img
				.myworks-btn__text {{ workContentBtn }}
</template>

<script>

export default {
  data: () => ({
    workContentTitle: '',
    workContentDescription: '',
    workContentBtn: ''
  }),
  watch: {
    worksView: function () {
      this.workContentTitle = this.worksView.contentTitle
      this.workContentDescription = this.worksView.contentDescription
      this.workContentBtn = this.worksView.contentBtn
    }
  },
  props: {
    worksView: Object
  },
  methods: {

  },
  mounted () {

  },
  components: {

  }
}
</script>
