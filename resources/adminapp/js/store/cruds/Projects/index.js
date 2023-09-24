const set = key => (state, val) => {
  state[key] = val
}

function initialState() {
  return {
    data: [],
    total: 0,
    query: {},
      totalValue: 0,
      totalEUValue: 0,
    loading: false
  }
}

const route = 'projects'

const getters = {
  data: state => state.data,
    totalValue: state => state.totalValue,
    totalEUValue: state => state.totalEUValue,
  total: state => state.total,
    endYears: state => state.endYears,
    commitmentYears: state => state.commitmentYears,
  loading: state => state.loading
}

const actions = {
  fetchIndexData({ commit, state }) {
    commit('setLoading', true)
    axios
      .get(route, { params: state.query })
      .then(response => {
        commit('setData', response.data.data)
        commit('setTotal', response.data.total)
        commit('setTotalValue', response.data.total_euro_value)
        commit('setTotalEUValue', response.data.total_eu_value)
        commit('setEndYears', response.data.end_years)
        commit('setCommitmentYears', response.data.commitment_years)
      })
      .catch(error => {
        message = error.response.data.message || error.message
        // TODO error handling
      })
      .finally(() => {
        commit('setLoading', false)
      })
  },
  destroyData({ commit, state, dispatch }, id) {
    axios
      .delete(`${route}/${id}`)
      .then(response => {
        dispatch('fetchIndexData')
      })
      .catch(error => {
        message = error.response.data.message || error.message
        // TODO error handling
      })
  },
  setQuery({ commit }, value) {
    commit('setQuery', _.cloneDeep(value))
  },
  resetState({ commit }) {
    commit('resetState')
  }
}

const mutations = {
  setData: set('data'),
  setTotal: set('total'),
  setTotalValue: set('totalValue'),
  setTotalEUValue: set('totalEUValue'),
    setEndYears: set('endYears'),
    setCommitmentYears: set('commitmentYears'),
  setQuery(state, query) {
    query.page = (query.offset + query.limit) / query.limit
    state.query = query
  },
  setLoading: set('loading'),
  resetState(state) {
    Object.assign(state, initialState())
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}
