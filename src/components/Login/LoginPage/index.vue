<template lang="pug">
	section.section.hero
		.login(@click='bool')
			App-parallax
			.login__btn(@click='welcomeChange' v-if='login') Авторизовaться
			.flip-container(@click='stop')
				.flipper(:style='rotate')
					form.form.form__login.back
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
							a(href="/mainpage").button#mainpage На главную
							a(href='#').button#login Войти
					.form.form__login.form__login-back.front
						.welcome__block
							.user__pic.user__avatar-welcome
								.user__avatar
							.user__description.welcome-description
								.user__name.welcome-name Евгений Гуринец
								.user__info Личный сайт разработчика
							ul.socials
								-
									var socials = [
										['fb_welcome','https://www.facebook.com/profile.php?id=100008099054335'],
										['github_welcome','https://github.com/YevheniiGurinets'],
										['in_welcome','https://github.com/YevheniiGurinets']
									]
								each item in socials
									li.socials__item
										a(href=`${item[1]}` target="_blank" class=`socials__item_${item[0]} ${item[0]}`).socials__link
							.block__buttons
								a( href="/works").button Мои работы
								a( href="/mainpage").button.bordered Обо мне
								a( href="/blog").button Блог
		.login__footer
			.footer__copyright| &copy Евгений Гуринец | создано с любовью в LoftSchool | 2017
</template>

<script>

export default {
  data: () => ({
    login: true,
    rotate: '',
    log: false
  }),
  methods: {
    welcomeChange() {
      this.rotate = 'transform: rotateY(180deg)'
      this.log = !this.log
      this.login = !this.login
      event.stopPropagation()
    },
    bool() {
      if (this.log) {
        this.rotate = 'transform: rotateY(0deg)'
        this.log = !this.log
        this.login = !this.login
      }
    },
    stop() {
      event.stopPropagation()
    }
  },
  components: {
    AppParallax: require('../../_common/Parallax')
  }
}
</script>
<style lang="scss">
.login__btn:hover {
	background: rgba(38, 187, 170, 0.6);
	cursor: pointer;
	border: 1px solid rgba(38, 187, 170, 0.6);
	transition: 0.3s;
}
.login__btn {
	position: absolute;
	width: 150px;
	height: 50px;
	border: 1px solid white;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 30px;
	right: 30px;
	color: white;
	padding: 0 30px;
	transition: 0.3s;
}
.flip-container {
	perspective: 1000px;
}
.flip-container, .front, .back {
	width: 331px;
	height: 400px;
}
.flipper {
	transition: 1.6s;
	transform-style: preserve-3d;
	position: relative;
}
.front, .back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
}
.front {
	z-index: 2;
}
.back {
	transform: rotateY(180deg);
}
.welcome__block {
	width: 100%;
	height: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.user__avatar-welcome {
	padding-top: 30px;
}
.welcome-description {
	text-align: center;
	color:  gray;
}
.welcome-name {
	color: #373e42;
	font-size: 23px;
	font-weight: bold;
}
.bordered {
	border-left: 2px solid lightgray;
	border-right: 2px solid lightgray;
	box-sizing: border-box;
}
.socials__item_fb_welcome {
	display: flex;
	background: url('~img/icons/fb_welcome.svg' )no-repeat center;
	background-size: 100% 100%;
}
.socials__item_github_welcome {
	display: flex;
	background: url('~img/icons/github_welcome.svg')no-repeat center;
	background-size: 100% 100%;
}
.socials__item_in_welcome {
	display: flex;
	background: url('~img/icons/in_welcome.svg')no-repeat center;
	background-size: 100% 100%;
}
</style>
