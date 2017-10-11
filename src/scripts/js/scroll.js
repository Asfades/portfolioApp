(function () {
  const arrow = document.querySelector('.arrow-down')
  var set
  function skroll () {
    set = setInterval(function() {
      window.scrollBy(0, 5)
      if (window.pageYOffset >= document.documentElement.clientHeight) {
        clearInterval(set)
      }
    }, 0)
  }
  if (arrow) arrow.addEventListener('click', skroll)
}())
