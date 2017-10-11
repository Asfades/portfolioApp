<template lang="pug">
section.section.reviews
	.reviews__wrap
		.review-block
			.reviews__title
				.about__left-title_bg.reviews_bg
				.block-subtitle Что обо мне<br>говорят
		.review-block.reviews__items
			.reviews__item
				.quotes
				p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!
				.reviews__item-describe
					.person__img.person__img-first
					.person__info
						h3 Ковальчук Дмитрий
						p основатель Loftscholl
			.reviews__item
				.quotes
				p Этот код выдержит любые испытания. Только пожалуйста, не загружается сайт на слишком старых браузерах!
				.reviews__item-describe
					.person__img.person__img-sec
					.person__info
						h3 Сабанцев Владимир
						p преподаватель
		.review-block.reviews__form
			form(method='post').form#form
				.form__title
					.block-subtitle Связатся со мной
				input(type="text" name="name" placeholder="Имя").form__name#name
				input(type="text" name="email" placeholder="Email").form__email#email
				textarea(placeholder="Ваше сообщение" name="message").form__text#message
				.block__buttons
					.button#push Отправить
					.button#clean Очистить
		.review-block
			.block__arrow__up
</template>

<script>

export default {
  data: () => ({

  }),
  components: {

  }
}
</script>

<style lang="scss">
	.reviews_bg {
		width: 200%;
		height: 100%;
		top: 41%;
		opacity: 0.3;
	}
</style>