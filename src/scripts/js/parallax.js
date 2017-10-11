(function(window) {
  const parallaxContainer = document.getElementById('parallax')
  let layers

  if (parallaxContainer) layers = parallaxContainer.children

  var moveLayers = function (e) {
    var initialX = (window.innerWidth / 2) - e.pageX
    var initialY = (window.innerHeight / 2) - e.pageY
    var arr = []

    arr.slice.call(layers).forEach(function(layer, index) {
      var divider = index / 100
      var positionX = initialX * divider
      var positionY = initialY * divider
      var bottomPosition = (window.innerHeight / 2) * divider
      var transformString = 'translate(' + positionX + 'px,' + positionY + 'px)'
      var image = layer.firstElementChild

      layer.style.transform = transformString
      image.style.bottom = '-' + bottomPosition + 'px'
    })
  }

  if (parallaxContainer) window.addEventListener('mousemove', moveLayers)
}(window))
