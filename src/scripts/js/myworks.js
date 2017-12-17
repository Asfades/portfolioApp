(function(document) {
  var view = document.querySelector('.slider__view')
  var prev = document.querySelector('.prev')
  var next = document.querySelector('.next')

  var contentTitle = document.querySelector('.myworks__left-content .block-subtitle')
  var contentDescription = document.querySelector('.myworks__content__description .myworks-description')
  var contentBtn = document.querySelector('.myworks__content__button .myworks-btn')

  var srcData = ['dist/me_big.jpg', 'dist/reviews.jpg', 'dist/logo_img.jpg']

  var descrData = [{
    contentTitle: 'Сайт школы онлайн образования',
    contentDescription: 'HTML, CSS, JAVASCRIPT',
    contentBtn: 'https://loftschool.com/'
  },
  {
    contentTitle: 'Сайт интернет-магазин постельного белья',
    contentDescription: 'HTML, CSS, JAVASCRIPT, PHP, OpenCart',
    contentBtn: 'https://loftschool.com/'
  },
  {
    contentTitle: 'Сайт-визитка енергетической компании',
    contentDescription: 'HTML, CSS, JAVASCRIPT, PHP',
    contentBtn: 'https://loftschool.com/'
  }]

  var prevNum = srcData.length - 1
  var viewNum = 0
  var nextNum = 1

  function showImg() {
    prev.style = `background-image: url( ${srcData[prevNum]} )`
    view.style = `background-image: url( ${srcData[viewNum]} )`
    next.style = `background-image: url( ${srcData[nextNum]} )`

    contentTitle.innerHTML = descrData[viewNum].contentTitle
    contentDescription.innerHTML = descrData[viewNum].contentDescription
    contentBtn.setAttribute('href', descrData[viewNum].contentBtn)
  }

  function setupListeners() {
    next.onclick = function() {
      prevNum += 1
      viewNum += 1
      nextNum += 1
      if (prevNum === srcData.length) prevNum = 0
      if (viewNum === srcData.length) viewNum = 0
      if (nextNum === srcData.length) nextNum = 0
      showImg()
    }
    prev.onclick = function() {
      (prevNum === 0) ? prevNum = (srcData.length - 1)
        : prevNum -= 1;
      (viewNum === 0) ? viewNum = (srcData.length - 1)
        : viewNum -= 1;
      (nextNum === 0) ? nextNum = (srcData.length - 1)
        : nextNum -= 1

      showImg()
    }
  }

  function init() {
    showImg()

    setupListeners()
  }

  if (view) document.addEventListener('DOMContentLoaded', init)
}(document))
