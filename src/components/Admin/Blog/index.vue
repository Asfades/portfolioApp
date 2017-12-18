<template lang="pug">
  .admin
    .header
      App-Header
    .tabs
      Tabs
    .content
      .blog
        h2.title Страница "Блог"
        .container
          .form-admin.col
            h3.form-title Добавить запись
            .row
              app-input(
                type="text",
                placeholder="Название"
                v-model="fields.title"
              )
            .row
              app-input(
                type="date",
                v-model="fields.date"
              )
            .row
              textarea.input.blog-textarea(
                type="text" 
                placeholder="Содержание"
                v-model="fields.text"
              )
            .row
              app-button(
                title="Добавить"
                @click="addPost"
              )
          .table.col
            table.posts
              tr(v-for="(post, index) in posts")
                td {{post.title}}
                td {{post.date}}
                td {{post.text}}
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data: () => ({
    fields: {
      title: '',
      date: '',
      text: ''
    }
  }),
  methods: {
    ...mapActions('posts', ['fetchPosts']),
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
    this.fetchPosts()
  },
  components: {
    AppButton: require('_common/Button'),
    AppInput: require('_common/Input'),
    Tabs: require('Admin/Tabs'),
    AppHeader: require('Admin/Header')
  }
}
</script>
<style src="./style.scss" lang="scss" scoped></style>