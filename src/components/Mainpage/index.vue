<template lang="pug">
div
  App-logo
  aboutme
  App-map
  App-footer
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data: () => ({
    fields: {
      title: '',
      date: '',
      text: ''
    }
  }),
  methods: {
    ...mapMutations('posts', ['addBlogPost']),
    addPost() {
      const fieldsData = _.clone(this.fields)
      this.addBlogPost(fieldsData)
    }
  },
  computed: {
    ...mapGetters('posts', ['posts'])
  },
  mounted() {

  },
  components: {
    AppLogo: require('../_common/Logo'),
    aboutme: require('./Aboutme'),
    AppMap: require('./Map'),
    AppFooter: require('../_common/Footer')
  }
}
</script>
