<template lang="pug">
  .tabs
    ul.tabs-list
      router-link(
        v-for="(tab, index) in pages"
        :key="index"
        tag="li"
        active-class="active"
        :to="tab.route"
        exact
      ).tabs-item
        span.tabs-link {{tab.name}}
</template>

<script>
export default {
  data: () => ({
    pages: [
      { name: 'Обо мне', route: '/' },
      { name: 'Блог', route: '/mainpage' },
      { name: 'Мои работы', route: '/works' }
    ]
  })
}
</script>