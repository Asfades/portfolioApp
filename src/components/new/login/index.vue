<template lang="pug">
	section.section.hero
		.login
			//- #parallax.parallax
			//- 	- for (var i = 9; i > 0; i--)
			//- 		.parallax__layers
			//- 			img(src=`./images/layer-${i}.png`).parallax__image
			//- 			.img__blok
			form.form.form__login
				.form__title
					.block-subtitle Авторизуйтесь
				.form__input
					.form__input-img.human_login
					input(type="text" placeholder="Логин").form__input-item
				.form__input
					.form__input-img.password
					input(type="password" placeholder="Пароль").form__input-item
				.verification
					label.label
						input.checkbox(type="checkbox")
						span.verif__text Я человек
					.verification__question
						.question Вы точно не робот?
						.answers
							label.answ__label
								input(type="radio" name="answer").radio
								span.answ__text Да
							label.answ__label
								input(type="radio" name="answer").radio
								span.answ__text Не уверен
				.block__buttons
					a(href="mainpage.html").button#mainpage На главную
					.button#login Войти
		.login__footer
			.footer__copyright| &copy Евгений Гуринец | создано с любовью в LoftSchool | 2017
</template>

<script>

export default {
  data: () => ({

  }),
  components: {

  }
}
</script>

<style lang="scss"></style>