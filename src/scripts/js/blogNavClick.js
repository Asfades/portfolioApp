(function () {
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

  function init() {
    shovArticle()
  }

  if (navItems) document.addEventListener('DOMContentLoaded', init)
}())
