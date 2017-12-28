// (function () {
//   const nav = document.querySelector('.articles__menu')
//   const articleBlock = document.querySelector('.articles')
//   const articlesItems = document.querySelectorAll('.article')
//   const navItems = document.querySelectorAll('.nav__item')

//   function menuScroll () {
//     const navpos = nav.getBoundingClientRect().top + 60

//     if ((document.documentElement.clientHeight + 60) > window.pageYOffset) {
//       nav.classList.remove('fixed')
//       navItems[0].classList.remove('mainArticle')
//     } else if (navpos <= 60) {
//       nav.classList.add('fixed')
//     }

//     articlesItems.forEach(function(item, i) {
//       if (item.getBoundingClientRect().top <= 200) {
//         navItems.forEach(function(item, i) {
//           if (item.classList.contains('mainArticle')) {
//             item.classList.remove('mainArticle')
//           }
//         })
//         navItems[i].classList.add('mainArticle')
//       }
//     })
//   }

//   function init() {
//     window.onscroll = menuScroll
//   }

//   if (articleBlock) document.addEventListener('DOMContentLoaded', init)
// }())
