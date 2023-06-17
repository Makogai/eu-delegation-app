import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'
import I18NStore from './modules/i18n'

import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import CountriesIndex from './cruds/Countries'
import CountriesSingle from './cruds/Countries/single'
import CitiesIndex from './cruds/Cities'
import CitiesSingle from './cruds/Cities/single'
import ProgrammesIndex from './cruds/Programmes'
import ProgrammesSingle from './cruds/Programmes/single'
import FinancialPerspectivesIndex from './cruds/FinancialPerspectives'
import FinancialPerspectivesSingle from './cruds/FinancialPerspectives/single'
import SectorsIndex from './cruds/Sectors'
import SectorsSingle from './cruds/Sectors/single'
import FundingsIndex from './cruds/Fundings'
import FundingsSingle from './cruds/Fundings/single'
import FundingTypesIndex from './cruds/FundingTypes'
import FundingTypesSingle from './cruds/FundingTypes/single'
import ProjectsIndex from './cruds/Projects'
import ProjectsSingle from './cruds/Projects/single'


import AllCities from './common/cities'
import AllSectors from './common/sectors'
import AllProgrammes from './common/programmes'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    I18NStore,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    CountriesIndex,
    CountriesSingle,
    CitiesIndex,
    CitiesSingle,
    ProgrammesIndex,
    ProgrammesSingle,
    FinancialPerspectivesIndex,
    FinancialPerspectivesSingle,
    SectorsIndex,
    SectorsSingle,
    FundingsIndex,
    FundingsSingle,
    FundingTypesIndex,
    FundingTypesSingle,
    ProjectsIndex,
    ProjectsSingle,
      AllCities,
      AllSectors,
      AllProgrammes,
  },
  strict: debug
})
