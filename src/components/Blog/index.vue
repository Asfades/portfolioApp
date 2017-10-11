<template lang="pug">
  div
    section.section.hero
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
            .block_bg
            .block-title Блог
            .user__info Интерестные статьи
      .hero__scroll-btn
        button(type="button").arrow-down
    App-articles
    App-footer
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
      if (!this.menu) this.menubg = 'hamburger'
    }
  },
  components: {
    AppMenu: require('../_common/Menu'),
    AppArticles: require('./Articles'),
    AppFooter: require('../_common/Footer')
  }
}
</script>

