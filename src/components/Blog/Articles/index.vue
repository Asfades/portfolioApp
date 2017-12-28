<template lang="pug">
section.section.articles
  .articles__triangles
  .articles__block
    .articles__menu
      .nav
        .nav__item(v-for="(post, index) in posts") {{post.title}}
    .articles__items
        .article(v-for="(post, index) in posts")
          .article__title {{post.title}}
          p.article__date {{post.date}}
          .article__info
            p {{post.text}}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {

  },
  methods: {
    ...mapActions('posts', ['fetchPosts']),
    init () {
      const nav = document.querySelector('.articles__menu')
      const articlesItems = document.querySelectorAll('.article')
      const navItems = document.querySelectorAll('.nav__item')

      function menuScroll () {
        const navpos = nav.getBoundingClientRect().top + 60

        if ((document.documentElement.clientHeight + 60) > window.pageYOffset) {
          nav.classList.remove('fixed')
          navItems[0].classList.remove('mainArticle')
        } else if (navpos <= 60) {
          nav.classList.add('fixed')
        }

        articlesItems.forEach(function(item, i) {
          if (item.getBoundingClientRect().top <= 200) {
            navItems.forEach(function(item, i) {
              if (item.classList.contains('mainArticle')) {
                item.classList.remove('mainArticle')
              }
            })
            navItems[i].classList.add('mainArticle')
          }
        })
      }
      window.onscroll = menuScroll
    }
  },
  computed: {
    ...mapGetters('posts', ['posts'])
  },
  mounted() {
    this.fetchPosts()
    this.$nextTick(this.init())
  }
}
</script>
