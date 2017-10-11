<template lang="pug">
footer.footer
	.footer__row
		.footer__col.footer__col-left
			.footer__menu
				nav.menu
					.menu__list
						-
							var menu = [
								['works', 'Мои работы', '/works'],
								['aboutme', 'Обо мне', '/mainpage'],
								['blog', 'Блог', '/blog'],
								['login', 'Авторизация', '/']
							]
						each item in menu
								.menu__item
									a(href=` ${item[2]} `).menu__link= item[1]
		.footer__col.footer__col-right
			.footer__socials
				ul.socials.socials_rounded
					-
						var socials = [
							['fb','https://www.facebook.com/profile.php?id=100008099054335'],
							['github','https://github.com/YevheniiGurinets'],
							['in','https://github.com/YevheniiGurinets']
						]
					each item in socials
						li.socials__item
							a(href=`${item[1]}` target="_blank" class=`socials__item_${item[0]} ${item[0]}`).socials__link
	.footer__row
		.footer__col.footer__col-left
			.footer__text.text-content
				p Я веб разработчик из Киева. Мне 23. Я занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты.
		.footer__col.footer__col-right
			.footer__copyright
				| &copy Евгений Гуринец | создано с любовью в LoftSchool | 2017



</template>

<script>
export default {

}
</script>

