<template lang="pug">
.myworks__block.myworks__left
	.myworks__left-content
		.myworks__content__title
			.block-subtitle Сайт школы онлайн образования
		.myworks__content__description
			.myworks-description HTML, CSS, JAVASCRIPT
		.myworks__content__button
			a(href="#" target="_blank").myworks-btn
				.myworks-btn__img
				.myworks-btn__text Посмотреть сайт
</template>

<script>

export default {
  data: () => ({

  }),
  props: {
    worksView: Object,
    worksPrev: Object,
    worksNext: Object
  },
  methods: {
    helo () {
    }
  },
  mounted () {
    console.log(this.worksView)
    console.log(this.worksPrev)
    console.log(this.worksNext)
  },
  components: {

  }
}
</script>
