<template lang="pug">
li(:id='id').skills-row__circl
  span.skills-row__item {{title}}
</template>

<script>
export default {
  data: () => ({
    name: '',
    level: ''
  }),
  props: {
    title: {
      type: String,
      default: 'Html'
    },
    id: {
      type: String
    },
    percents: {
      type: Number,
      default: 100
    }
  },
  methods: {
    anim: function() {
      const item = document.querySelector(`#${this.id}`)
      const size = 120
      class Skill {
        constructor(width, height, container, percent) {
          this.svgns = 'http://www.w3.org/2000/svg'
          this.svg = document.createElementNS(this.svgns, 'svg')
          this.width = width
          this.height = height
          this.radius = this.width / 2.5
          this.percent = percent
          this.strokeDasharray = 2 * Math.PI * this.radius
          this.svg.setAttribute('width', this.width)
          this.svg.setAttribute('height', this.height)
          this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`)
          this.baseCircle = this.createCircle('#1bb696', true)
          this.bgCircle = this.createCircle('#ccc')
          this.add(container)
        }
        createCircle(color, isBase = false) {
          const circle = document.createElementNS(this.svgns, 'circle')
          const cx = this.width / 2
          const cy = this.height / 2
          circle.setAttribute('cx', cx)
          circle.setAttribute('cy', cy)
          circle.setAttribute('r', this.radius)
          circle.setAttribute('fill', 'none')
          circle.setAttribute('stroke', color)
          circle.setAttribute('stroke-width', '15')
          if (isBase) {
            circle.setAttribute('transform', `rotate(-90 ${cx} ${cy})`)
            circle.setAttribute('stroke-dasharray', this.strokeDasharray)
            circle.setAttribute('stroke-dashoffset', this.strokeDasharray)
          }
          return circle
        }
        add(container) {
          this.svg.appendChild(this.bgCircle)
          this.svg.appendChild(this.baseCircle)
          container.appendChild(this.svg)
          return this
        }
        draw(progress) {
          this.baseCircle.setAttribute(
            'stroke-dashoffset',
            (1 - progress * this.percent) * this.strokeDasharray
          )
        }
      }

      const skillItem = new Skill(size, size, item, (this.percents / 100))

      function animate(options) {
        const start = performance.now()
        requestAnimationFrame(function animate(time) {
          // timeFraction от 0 до 1
          let timeFraction = (time - start) / options.duration
          if (timeFraction > 1) timeFraction = 1
          // текущее состояние анимации
          const progress = options.timing(timeFraction)
          options.draw(progress)
          if (timeFraction < 1) {
            requestAnimationFrame(animate)
          }
        })
      }

      animate({
        duration: 700,
        timing: function(timeFraction) {
          return timeFraction
        },
        draw: function(progress) {
          skillItem.draw(progress)
        }
      })
    }
  },
  computed: {
  },
  mounted() {
    this.anim()
  },
  components: {
  }
}
</script>

<style lang="scss"></style>