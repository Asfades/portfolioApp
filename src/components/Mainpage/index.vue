<template lang="pug">
.wrapper
  App-logo
  aboutme
  App-map
  App-footer
</template>
<script>
export default {
  data: () => ({
    fields: {
      title: '',
      date: '',
      text: ''
    }
  }),
  methods: {
    addPost() {
      const fieldsData = _.clone(this.fields)
      this.addBlogPost(fieldsData)
    }
  },
  computed: {
  },
  components: {
    AppLogo: require('../_common/Logo'),
    aboutme: require('./Aboutme'),
    AppMap: require('./Map'),
    AppFooter: require('../_common/Footer')
  }
}
</script>
