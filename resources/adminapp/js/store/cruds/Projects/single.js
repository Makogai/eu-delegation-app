function initialState() {
  return {
    entry: {
      id: null,
      financial_perspective_id: null,
      programme_id: null,
      sector: [],
      contract_title: '',
      commitment_year: '',
      contract_year: '',
      start_date: '',
      end_date: '',
      contract_number: '',
      contracting_party: '',
      contract_type: [],
      end_beneficiary: '',
      contracted_eu_contribution: '',
        contract_value_montenegro: '',
      co_funding: '',
      loan: '',
      total_euro_value: '',
      municipality: [],
      short_description: '',
      keywords: '',
      links_to_project_page: '',
      show: true,
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    lists: {
      financial_perspective: [],
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
  setFinancialPerspective({ commit }, value) {
    commit('setFinancialPerspective', value)
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
  setContractType({ commit }, value) {
    commit('setContractType', value)
  },
  setEndBeneficiary({ commit }, value) {
    commit('setEndBeneficiary', value)
  },
  setContractedEuContribution({ commit }, value) {
    commit('setContractedEuContribution', value)
  },
  setCoFunding({ commit }, value) {
    commit('setCoFunding', value)
  },
  setLoan({ commit }, value) {
    commit('setLoan', value)
  },
  setContractValueMontenegro({ commit }, value) {
    commit('setContractValueMontenegro', value)
  },
  setTotalEuroValue({ commit }, value) {
    commit('setTotalEuroValue', value)
  },
  setMunicipality({ commit }, value) {
    commit('setMunicipality', value)
  },
  setShortDescription({ commit }, value) {
    commit('setShortDescription', value)
  },
  setKeywords({ commit }, value) {
    commit('setKeywords', value)
  },
  setLinksToProjectPage({ commit }, value) {
    commit('setLinksToProjectPage', value)
  },
  setShow({ commit }, value) {
    commit('setShow', value)
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
  setFinancialPerspective(state, value) {
    state.entry.financial_perspective_id = value
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
  setContractType(state, value) {
    state.entry.contract_type = value
  },
  setEndBeneficiary(state, value) {
    state.entry.end_beneficiary = value
  },
  setContractedEuContribution(state, value) {
    state.entry.contracted_eu_contribution = value
  },
  setCoFunding(state, value) {
    state.entry.co_funding = value
  },
  setLoan(state, value) {
    state.entry.loan = value
  },
  setTotalEuroValue(state, value) {
    state.entry.total_euro_value = value
  },
    setContractValueMontenegro(state, value) {
    state.entry.contract_value_montenegro = value
  },
  setMunicipality(state, value) {
    state.entry.municipality = value
  },
  setShortDescription(state, value) {
    state.entry.short_description = value
  },
  setKeywords(state, value) {
    state.entry.keywords = value
  },
  setLinksToProjectPage(state, value) {
    state.entry.links_to_project_page = value
  },
  setShow(state, value) {
    state.entry.show = value
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
