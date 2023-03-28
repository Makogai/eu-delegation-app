(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Projects/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Projects/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Datatables_DatatableActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Datatables/DatatableActions */ "./resources/adminapp/js/components/Datatables/DatatableActions.vue");
/* harmony import */ var _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Datatables/TranslatedHeader */ "./resources/adminapp/js/components/Datatables/TranslatedHeader.vue");
/* harmony import */ var _components_Datatables_HeaderSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Datatables/HeaderSettings */ "./resources/adminapp/js/components/Datatables/HeaderSettings.vue");
/* harmony import */ var _components_Datatables_GlobalSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Datatables/GlobalSearch */ "./resources/adminapp/js/components/Datatables/GlobalSearch.vue");
/* harmony import */ var _components_Datatables_DatatableSingle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Datatables/DatatableSingle */ "./resources/adminapp/js/components/Datatables/DatatableSingle.vue");
/* harmony import */ var _components_Datatables_DatatableList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Datatables/DatatableList */ "./resources/adminapp/js/components/Datatables/DatatableList.vue");
/* harmony import */ var _components_Datatables_DatatableCheckbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Datatables/DatatableCheckbox */ "./resources/adminapp/js/components/Datatables/DatatableCheckbox.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    GlobalSearch: _components_Datatables_GlobalSearch__WEBPACK_IMPORTED_MODULE_4__["default"],
    HeaderSettings: _components_Datatables_HeaderSettings__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      columns: [{
        title: 'cruds.project.fields.id',
        field: 'id',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true,
        colStyle: 'width: 100px;'
      }, {
        title: 'cruds.project.fields.assistance_framework',
        field: 'assistance_framework',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.programme',
        field: 'programme.name',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableSingle__WEBPACK_IMPORTED_MODULE_5__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.sector',
        field: 'sector.name',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableList__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, {
        title: 'cruds.project.fields.contract_title',
        field: 'contract_title',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.contract_type',
        field: 'contract_type.name',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableSingle__WEBPACK_IMPORTED_MODULE_5__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.contract_number',
        field: 'contract_number',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.contracting_party',
        field: 'contracting_party',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.contracted_eu_contribution',
        field: 'contracted_eu_contribution',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.co_funding_or_loan',
        field: 'co_funding_or_loan',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.total_euro_value',
        field: 'total_euro_value',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.co_funding_party',
        field: 'co_funding_party',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.municipality',
        field: 'municipality.name',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableList__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, {
        title: 'cruds.project.fields.end_beneficiary',
        field: 'end_beneficiary',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.keywords',
        field: 'keywords',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.links_to_project_page',
        field: 'links_to_project_page',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        sortable: true
      }, {
        title: 'cruds.project.fields.show',
        field: 'show',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableCheckbox__WEBPACK_IMPORTED_MODULE_7__["default"],
        sortable: true
      }, {
        title: 'global.actions',
        thComp: _components_Datatables_TranslatedHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
        tdComp: _components_Datatables_DatatableActions__WEBPACK_IMPORTED_MODULE_1__["default"],
        visible: true,
        thClass: 'text-right',
        tdClass: 'text-right td-actions',
        colStyle: 'width: 150px;'
      }],
      query: {
        sort: 'id',
        order: 'desc',
        limit: 100,
        s: '',
        municipality: []
      },
      xprops: {
        module: 'ProjectsIndex',
        route: 'projects',
        permission_prefix: 'project_'
      },
      activeField: ''
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('ProjectsIndex', ['data', 'total', 'loading'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AllCities', ['cities'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AllSectors', ['sectors'])),
  watch: {
    query: {
      handler: function handler(query) {
        this.setQuery(query);
        this.fetchIndexData();
        this.fetchAllCities();
        this.fetchAllSectors();
      },
      deep: true
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({
    focusField: function focusField(name) {
      alert(name);
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('ProjectsIndex', ['fetchIndexData', 'setQuery', 'resetState'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('AllCities', ['fetchAllCities'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('AllSectors', ['fetchAllSectors']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Projects/Index.vue?vue&type=template&id=047f8778&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Projects/Index.vue?vue&type=template&id=047f8778& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header card-header-primary card-header-icon"
  }, [_vm._m(0), _vm._v(" "), _c("h4", {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("global.table")) + "\n            "), _c("strong", [_vm._v(_vm._s(_vm.$t("cruds.project.title")))])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.$can(_vm.xprops.permission_prefix + "create") ? _c("router-link", {
    staticClass: "btn btn-primary",
    attrs: {
      to: {
        name: _vm.xprops.route + ".create"
      }
    }
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("\n              add\n            ")]), _vm._v("\n            " + _vm._s(_vm.$t("global.add")) + "\n          ")]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-default",
    "class": {
      disabled: _vm.loading
    },
    attrs: {
      type: "button",
      disabled: _vm.loading
    },
    on: {
      click: _vm.fetchIndexData
    }
  }, [_c("i", {
    staticClass: "material-icons",
    "class": {
      "fa-spin": _vm.loading
    }
  }, [_vm._v("\n              refresh\n            ")]), _vm._v("\n            " + _vm._s(_vm.$t("global.refresh")) + "\n          ")]), _vm._v(" "), _c("form", {
    attrs: {
      action: ""
    }
  }, [_c("div", {
    staticClass: "row py-4"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.cities.length !== 0,
      "is-focused": _vm.activeField === "municipality"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.project.fields.municipality")))]), _vm._v(" "), _c("v-select", {
    key: "municipality-field",
    attrs: {
      name: "municipality",
      label: "name",
      reduce: function reduce(city) {
        return city.id;
      },
      value: _vm.query.municipality,
      options: _vm.cities,
      closeOnSelect: false,
      multiple: ""
    },
    on: {
      search: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "focus", undefined, $event.key, undefined)) return null;
        return _vm.focusField("municipality");
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "blur", undefined, $event.key, undefined)) return null;
        return _vm.clearFocus.apply(null, arguments);
      }]
    },
    model: {
      value: _vm.query.municipality,
      callback: function callback($$v) {
        _vm.$set(_vm.query, "municipality", $$v);
      },
      expression: "query.municipality"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.cities.length !== 0,
      "is-focused": _vm.activeField === "sector"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.project.fields.sector")))]), _vm._v(" "), _c("v-select", {
    key: "sector-field",
    attrs: {
      name: "sector",
      label: "name",
      reduce: function reduce(sector) {
        return sector.id;
      },
      value: _vm.query.sector,
      options: _vm.sectors,
      closeOnSelect: false,
      multiple: ""
    },
    on: {
      search: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "focus", undefined, $event.key, undefined)) return null;
        return _vm.focusField("sector");
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "blur", undefined, $event.key, undefined)) return null;
        return _vm.clearFocus.apply(null, arguments);
      }]
    },
    model: {
      value: _vm.query.sector,
      callback: function callback($$v) {
        _vm.$set(_vm.query, "sector", $$v);
      },
      expression: "query.sector"
    }
  })], 1)])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "table-overlay"
  }, [_c("div", {
    staticClass: "table-overlay-container"
  }, [_c("material-spinner"), _vm._v(" "), _c("span", [_vm._v("Loading...")])], 1)]), _vm._v(" "), _c("datatable", {
    attrs: {
      columns: _vm.columns,
      data: _vm.data,
      total: _vm.total,
      query: _vm.query,
      xprops: _vm.xprops,
      HeaderSettings: false,
      pageSizeOptions: [10, 25, 50, 100]
    }
  }, [_c("global-search", {
    staticClass: "pull-left",
    attrs: {
      query: _vm.query
    }
  }), _vm._v(" "), _c("header-settings", {
    staticClass: "pull-right",
    attrs: {
      columns: _vm.columns
    }
  })], 1)], 1)])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("assignment")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/adminapp/js/cruds/Projects/Index.vue":
/*!********************************************************!*\
  !*** ./resources/adminapp/js/cruds/Projects/Index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_047f8778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=047f8778& */ "./resources/adminapp/js/cruds/Projects/Index.vue?vue&type=template&id=047f8778&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/Projects/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_047f8778___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_047f8778___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/Projects/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/Projects/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Projects/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Projects/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/Projects/Index.vue?vue&type=template&id=047f8778&":
/*!***************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Projects/Index.vue?vue&type=template&id=047f8778& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_047f8778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=047f8778& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Projects/Index.vue?vue&type=template&id=047f8778&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_047f8778___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_047f8778___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);