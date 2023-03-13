function initialState() {
  return {
    entry: {
      id: null,
      assistance_framework: '',
      programme_id: null,
      sector: [],
      contract_title: '',
      contract_type_id: null,
      commitment_year: '',
      contract_year: '',
      start_date: '',
      end_date: '',
      contract_number: '',
      contracting_party: '',
      contracted_eu_contribution: '',
      co_funding_or_loan: '',
      total_euro_value: '',
      co_funding_party: '',
      municipality: [],
      short_description: '',
      end_beneficiary: '',
      keywords: '',
      links_to_project_page: '',
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    lists: {
      programme: [],
      sector: [],
      contract_type: [],
      municipality: []
    },
    loading: false
  }
}

const route = 'projects'

const getters = {
  entry: state => state.entry,
  lists: state => state.lists,
  loading: state => state.loading
}

const actions = {
  storeData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      axios
        .post(route, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  updateData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      params.set('_method', 'PUT')
      axios
        .post(`${route}/${state.entry.id}`, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  setAssistanceFramework({ commit }, value) {
    commit('setAssistanceFramework', value)
  },
  setProgramme({ commit }, value) {
    commit('setProgramme', value)
  },
  setSector({ commit }, value) {
    commit('setSector', value)
  },
  setContractTitle({ commit }, value) {
    commit('setContractTitle', value)
  },
  setContractType({ commit }, value) {
    commit('setContractType', value)
  },
  setCommitmentYear({ commit }, value) {
    commit('setCommitmentYear', value)
  },
  setContractYear({ commit }, value) {
    commit('setContractYear', value)
  },
  setStartDate({ commit }, value) {
    commit('setStartDate', value)
  },
  setEndDate({ commit }, value) {
    commit('setEndDate', value)
  },
  setContractNumber({ commit }, value) {
    commit('setContractNumber', value)
  },
  setContractingParty({ commit }, value) {
    commit('setContractingParty', value)
  },
  setContractedEuContribution({ commit }, value) {
    commit('setContractedEuContribution', value)
  },
  setCoFundingOrLoan({ commit }, value) {
    commit('setCoFundingOrLoan', value)
  },
  setTotalEuroValue({ commit }, value) {
    commit('setTotalEuroValue', value)
  },
  setCoFundingParty({ commit }, value) {
    commit('setCoFundingParty', value)
  },
  setMunicipality({ commit }, value) {
    commit('setMunicipality', value)
  },
  setShortDescription({ commit }, value) {
    commit('setShortDescription', value)
  },
  setEndBeneficiary({ commit }, value) {
    commit('setEndBeneficiary', value)
  },
  setKeywords({ commit }, value) {
    commit('setKeywords', value)
  },
  setLinksToProjectPage({ commit }, value) {
    commit('setLinksToProjectPage', value)
  },
  setCreatedAt({ commit }, value) {
    commit('setCreatedAt', value)
  },
  setUpdatedAt({ commit }, value) {
    commit('setUpdatedAt', value)
  },
  setDeletedAt({ commit }, value) {
    commit('setDeletedAt', value)
  },
  fetchCreateData({ commit }) {
    axios.get(`${route}/create`).then(response => {
      commit('setLists', response.data.meta)
    })
  },
  fetchEditData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}/edit`).then(response => {
      commit('setEntry', response.data.data)
      commit('setLists', response.data.meta)
    })
  },
  fetchShowData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}`).then(response => {
      commit('setEntry', response.data.data)
    })
  },
  resetState({ commit }) {
    commit('resetState')
  }
}

const mutations = {
  setEntry(state, entry) {
    state.entry = entry
  },
  setAssistanceFramework(state, value) {
    state.entry.assistance_framework = value
  },
  setProgramme(state, value) {
    state.entry.programme_id = value
  },
  setSector(state, value) {
    state.entry.sector = value
  },
  setContractTitle(state, value) {
    state.entry.contract_title = value
  },
  setContractType(state, value) {
    state.entry.contract_type_id = value
  },
  setCommitmentYear(state, value) {
    state.entry.commitment_year = value
  },
  setContractYear(state, value) {
    state.entry.contract_year = value
  },
  setStartDate(state, value) {
    state.entry.start_date = value
  },
  setEndDate(state, value) {
    state.entry.end_date = value
  },
  setContractNumber(state, value) {
    state.entry.contract_number = value
  },
  setContractingParty(state, value) {
    state.entry.contracting_party = value
  },
  setContractedEuContribution(state, value) {
    state.entry.contracted_eu_contribution = value
  },
  setCoFundingOrLoan(state, value) {
    state.entry.co_funding_or_loan = value
  },
  setTotalEuroValue(state, value) {
    state.entry.total_euro_value = value
  },
  setCoFundingParty(state, value) {
    state.entry.co_funding_party = value
  },
  setMunicipality(state, value) {
    state.entry.municipality = value
  },
  setShortDescription(state, value) {
    state.entry.short_description = value
  },
  setEndBeneficiary(state, value) {
    state.entry.end_beneficiary = value
  },
  setKeywords(state, value) {
    state.entry.keywords = value
  },
  setLinksToProjectPage(state, value) {
    state.entry.links_to_project_page = value
  },
  setCreatedAt(state, value) {
    state.entry.created_at = value
  },
  setUpdatedAt(state, value) {
    state.entry.updated_at = value
  },
  setDeletedAt(state, value) {
    state.entry.deleted_at = value
  },
  setLists(state, lists) {
    state.lists = lists
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  resetState(state) {
    state = Object.assign(state, initialState())
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}
