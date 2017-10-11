<template lang="pug">
section.section.hero
	.logo__bg
	.hero__socials
		ul.socials
			-
				var socials = [
					['fb','https://www.facebook.com/profile.php?id=100008099054335'],
					['github','https://github.com/YevheniiGurinets'],
					['in','https://github.com/YevheniiGurinets']
				]
			each item in socials
				li.socials__item
					a(href=`${item[1]}` target="_blank" class=`socials__item_${item[0]} ${item[0]}`).socials__link
	.hero__menu(@click='logoMenu'  :class='menubg')
	App-menu(v-if='menu')
	.hero__title
		.user.hero__user
			.user__pic
				.user__avatar
			.user__description
				.user__name Евгений Гуринец
				.user__info Личный сайт разработчика
	.hero__scroll-btn
		button(type="button").arrow-down

</template>

<script>

export default {
  data: () => ({
    menu: false,
    menubg: 'hamburger'
  }),
  methods: {
    logoMenu() {
      this.menu = !this.menu
      if (this.menu) this.menubg = 'hamburger-active'
      if (this.menu) document.body.style.overflow = 'hidden'
      if (!this.menu) this.menubg = 'hamburger'
      if (!this.menu) document.body.style.overflow = ''
    }
  },
  components: {
    AppMenu: require('../Menu')
  }
}
</script>
