<template lang="pug">
div
  App-logo
  App-works
  App-reviews
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
  components: {
    AppLogo: require('../_common/Logo'),
    AppWorks: require('./Myworks'),
    AppReviews: require('./Reviews'),
    AppFooter: require('../_common/Footer')
  }
}
</script>
