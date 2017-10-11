<template lang="pug">
nav.menu__logo
	.menu__logo__list
		-
			var menu = [
				['works', 'Мои работы', '/works'],
				['aboutme', 'Обо мне', '/mainpage'],
				['blog', 'Блог', '/blog'],
				['login', 'Авторизация', '/']
			]
		each item in menu
				.menu__logo__item
					a(href=` ${item[2]} `).menu__logo__link= item[1]
</template>

<script>

export default {
  data: () => ({

  }),
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss">
.menu__logo {
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url('~img/bg.jpg')no-repeat center / cover;
	z-index: 1;
	position: fixed;
}
.hamburger {
	z-index: 2;
}
.menu__logo__list {
	width: 200px;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.menu__logo__link {
	font-size: 23px;
	font-family: bernie_reg;
}
.menu__logo__link:hover::before {
	opacity: 0.6;
	content: "-";
	padding-right: 10px;
	padding-left: 10px;

}
.menu__logo__link:hover::after {
	opacity: 0.6;
	content: "-";
	padding-right: 10px;
	padding-left: 10px;
}

</style>