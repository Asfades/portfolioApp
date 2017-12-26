const works = {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    works: ({ data }) => (data)
  },
  mutations: {
    addNewWork(state, work) {
      state.data.push(work)
    },
    removeSavedWorks(state, workId) {
      state.data = state.data.filter(work => (work.id !== workId))
    }
  },
  actions: {
    addNewWork({ state, rootGetters }, fields) {
      console.log(fields)
    },
    fetchWorks({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.get('Admin/Works/data.json').then(response => {
        state.data = response.body
      }, response => {
        console.error(response)
      })
    }
  }
}

export default works
