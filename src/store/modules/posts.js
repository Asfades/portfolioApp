const posts = {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    posts: ({ data }) => (data)
  },
  mutations: {
    addBlogPost(state, post) {
      state.data.push(post)
    }
  },
  actions: {
    fetchPosts({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.get('Admin/Blog/data.json').then(response => {
        state.data = response.body
      }, response => {
        console.error(response)
      })
    }
  }
}

export default posts
