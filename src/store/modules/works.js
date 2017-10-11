const works = {
  state: {
    data: []
  },
  getters: {
    works: ({ data }) => (data)
  },
  mutations: {

  },
  actions: {
    fetchWorks({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.get('Works/data.json').then(response => {
        state.data = response.body
      }, response => {
        console.error(response)
      })
    }
  }
}

export default works
