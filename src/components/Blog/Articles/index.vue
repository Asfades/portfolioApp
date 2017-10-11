<template lang="pug">
section.section.articles
  .articles__triangles
  .articles__block
    .articles__menu
      .nav
        -
          var titles = [
          ['Самое важное в SASS', 'date'],
          ['Приемы в вёрстке без которых не обходится ни один сайт', 'date'],
          ['Самый необходимый набор Gulp плагинов', 'date'],
          ['Почему я выбрал Jade', 'date']
          ]
        each item in titles
          .nav__item= item[0]
    .articles__items
      each item in titles
        .article
          .article__title= item[0]
          p.article__date= item[1]
          .article__info
            p  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, pariatur! Ea aut, ipsum, eum nam praesentium eveniet esse quod, repellendus reprehenderit illo tempore doloribus at alias explicabo quasi repudiandae voluptatem.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, pariatur! Ea aut, ipsum, eum nam praesentium eveniet esse quod, repellendus reprehenderit illo tempore doloribus at alias explicabo quasi repudiandae voluptatem.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, pariatur! Ea aut, ipsum, eum nam praesentium eveniet esse quod, repellendus reprehenderit illo tempore doloribus at alias explicabo quasi repudiandae voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque odit, eaque saepe laboriosam doloremque optio quaerat qui ullam molestias repellendus excepturi voluptatum quis quos ab animi minus quia voluptatem.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rerum illum, nostrum. Accusantium magnam, totam est laboriosam mollitia facilis, aliquid quae provident vitae hic sint voluptatem numquam deleniti, commodi. Maxime?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ipsam, officiis sed neque libero unde vero soluta enim provident tenetur aperiam nam porro rerum, dolorum nulla dolor, explicabo quis alias.
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Html'
    },
    id: {
      type: Number
    },
    percents: {
      type: Number,
      default: 100
    }
  },
  methods: {
    emitRemove() {
      this.$emit('removeSkill', this.id)
    }
  }
}
</script>
