const set = key => (state, val) => {
    state[key] = val
}

function initialState() {
    return {
        data: [],
        query: {},
        loading: false
    }
}

const route = '../all-cities'

const getters = {
    cities: state => state.data,
    loading: state => state.loading
}

const actions = {
    fetchAllCities({ commit, state }) {
        commit('setLoading', true)
        axios
            .get(route, { params: state.query })
            .then(response => {
                commit('setData', response.data)
            })
            .catch(error => {
                message = error.response.data.message || error.message
                // TODO error handling
            })
            .finally(() => {
                commit('setLoading', false)
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
