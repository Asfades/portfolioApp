<template lang="pug">
section.section.articles
  .articles__triangles
  .articles__block
    .articles__menu
      .nav
        .nav__item(v-for="post in posts") {{post.title}}
    .articles__items
        .article(v-for="post in posts")
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
    navSkroll () {
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
    },
    navClick () {
      const articlesItems = document.querySelectorAll('.article')
      const navItems = document.querySelectorAll('.nav__item')

      function skrollArticles(a, b) {
        const diff = Math.abs(a - b)
        let count = 0
        if (diff <= 15) return
        if (a > b) {
          const set = setInterval(function() {
            count += 1
            window.scrollBy(0, -15)
            if (diff <= count * 15) {
              clearInterval(set)
            }
          }, 0)
        }
        if (a < b) {
          const set = setInterval(function() {
            count += 1
            window.scrollBy(0, 15)
            if (diff <= count * 15.2) {
              clearInterval(set)
            }
          }, 0)
        }
      }
      function shovArticle () {
        navItems.forEach(function(item, i) {
          item.addEventListener('click', function() {
            const a = pageYOffset - document.documentElement.clientHeight
            const b = articlesItems[i].offsetTop
            skrollArticles(a, b)
          })
        })
      }
      shovArticle()
    }
  },
  computed: {
    ...mapGetters('posts', ['posts'])
  },
  mounted() {
    this.fetchPosts()
  },
  updated() {
    this.navSkroll()
    this.navClick()
  }
}
</script>
