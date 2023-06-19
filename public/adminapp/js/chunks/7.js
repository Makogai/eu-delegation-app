(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/CountryMap.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/pages/CountryMap.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CountryMap",
  mounted: function mounted() {
    var _this = this;
    simplemaps_countrymap.load();
    // On click back to default color
    simplemaps_countrymap.hooks.back = function () {
      Bus.$emit('back-clicked');
    };
    simplemaps_countrymap.hooks.zoomable_click_state = function (id, name) {
      // Emit event to parent component
      _this.$emit('state-clicked', id, name);
    };
  },
  data: function data() {
    return {
      map_red: false
    };
  },
  computed: {
    simplemaps_countrymap: function simplemaps_countrymap() {
      return window.simplemaps_countrymap;
    }
  },
  methods: {
    make_red: function make_red() {
      this.map_red = true;
      simplemaps_countrymap.mapdata.main_settings.state_color = 'red';
      simplemaps_countrymap.refresh();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _CountryMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountryMap */ "./resources/app/js/pages/CountryMap.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CountryMap: _CountryMap__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      debouncedFetch: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () {
        this.fetchIndexData();
      }, 300),
      query: {
        sort: 'id',
        order: 'desc',
        limit: 100,
        s: '',
        isClient: true
      },
      xprops: {
        module: 'ProjectsIndex',
        route: 'projects',
        permission_prefix: 'project_'
      }
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('ProjectsIndex', ['data', 'total', 'loading'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AllCities', ['cities'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AllSectors', ['sectors'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('AllProgrammes', ['programmes'])),
  mounted: function mounted() {
    var _this = this;
    this.fetchIndexData();
    this.fetchAllCities();
    this.fetchAllSectors();
    this.fetchAllProgrammes();

    // On emit event from child component
    Bus.$on('back-clicked', function () {
      // alert('back clicked')
      _this.resetQuery();
    });
  },
  watch: {
    query: {
      handler: function handler(query) {
        this.setQuery(query);

        // If the query change is about the keywords, use debounced fetch
        if ('keywords' in query) {
          this.debouncedFetch();
        } else {
          // Otherwise, fetch data right away
          this.fetchIndexData();
        }
      },
      deep: true
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({
    handleStateClicked: function handleStateClicked(id, name) {
      // alert(id)
      // Find the municipality object in the `cities` array
      var municipality = this.cities.find(function (city) {
        return city.id == id;
      });

      // Set the municipality to the found municipality object
      this.query = _objectSpread(_objectSpread({}, this.query), {}, {
        municipality: [municipality.id]
      });
    },
    resetQuery: function resetQuery() {
      this.query = _objectSpread(_objectSpread({}, this.query), {}, {
        municipality: null
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('ProjectsIndex', ['fetchIndexData', 'setQuery', 'resetState'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('AllCities', ['fetchAllCities'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('AllSectors', ['fetchAllSectors'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('AllProgrammes', ['fetchAllProgrammes']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/CountryMap.vue?vue&type=template&id=34284741&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/pages/CountryMap.vue?vue&type=template&id=34284741& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    attrs: {
      id: "map"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/Dashboard.vue?vue&type=template&id=be11c5ee&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/pages/Dashboard.vue?vue&type=template&id=be11c5ee& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container-fluid py-4"
  }, [_c("img", {
    attrs: {
      src: "/md/img/logo-large-new2.png",
      alt: ""
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3 d-sm-none d-xl-block"
  }, [_c("div", {
    staticClass: "row py-4 mt-5 pr-md-5 pr-0"
  }, [_c("h4", {
    staticClass: "py-2 d-block bg-primaryeu text-white"
  }, [_vm._v("FILTER")]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-5"
  }, [_c("div", {
    staticClass: "form-group ci keywords"
  }, [_c("label", {}, [_vm._v("Keywords")]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group icon-input-wrapper"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.query.keywords,
      expression: "query.keywords"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.query.keywords
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.query, "keywords", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-4"
  }, [_c("div", {
    staticClass: "form-group bmd-form-group cs municipality",
    "class": {
      "has-items": _vm.cities.length !== 0
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v("Municipality")]), _vm._v(" "), _c("v-select", {
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
    model: {
      value: _vm.query.municipality,
      callback: function callback($$v) {
        _vm.$set(_vm.query, "municipality", $$v);
      },
      expression: "query.municipality"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-5"
  }, [_c("div", {
    staticClass: "form-group bmd-form-group cs sector",
    "class": {
      "has-items": _vm.sectors.length !== 0
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v("Sector")]), _vm._v(" "), _c("v-select", {
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
    model: {
      value: _vm.query.sector,
      callback: function callback($$v) {
        _vm.$set(_vm.query, "sector", $$v);
      },
      expression: "query.sector"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-5"
  }, [_c("div", {
    staticClass: "form-group bmd-form-group cs programme",
    "class": {
      "has-items": _vm.cities.length !== 0
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v("Programme")]), _vm._v(" "), _c("v-select", {
    key: "programme-field",
    attrs: {
      name: "programme",
      label: "name",
      reduce: function reduce(programme) {
        return programme.id;
      },
      value: _vm.query.programme,
      options: _vm.programmes,
      closeOnSelect: false,
      multiple: ""
    },
    model: {
      value: _vm.query.programme,
      callback: function callback($$v) {
        _vm.$set(_vm.query, "programme", $$v);
      },
      expression: "query.programme"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-5"
  }, [_c("div", {
    staticClass: "form-group bmd-form-group cs startyear",
    "class": {
      "has-items": _vm.cities.length !== 0
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v("Start Year")]), _vm._v(" "), _c("v-select", {
    attrs: {
      name: "programme",
      label: "name",
      options: _vm.data.years,
      closeOnSelect: false
    },
    model: {
      value: _vm.query.startYear,
      callback: function callback($$v) {
        _vm.$set(_vm.query, "startYear", $$v);
      },
      expression: "query.startYear"
    }
  })], 1)]), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 col-lg-3 d-none d-md-block"
  }, [_c("CountryMap", {
    on: {
      "state-clicked": _vm.handleStateClicked,
      "back-clicked": _vm.resetQuery
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-lg-9 col-xl-6 projects-holderaa px-4"
  }, [_c("div", {
    staticClass: "card border-0"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-4 mt-4 pt-2"
  }, [_c("div", {
    staticClass: "map__data-container"
  }, [_c("div", {
    staticClass: "map-info-box"
  }, [_c("div", {
    staticClass: "map-info-box__item"
  }, [_c("div", {
    staticClass: "map-info-box__text"
  }, [_vm._v("Projekata")]), _vm._v(" "), _c("div", {
    staticClass: "map-info-box__value"
  }, [_vm._v(_vm._s(_vm.data.total))])]), _vm._v(" "), _c("div", {
    staticClass: "map-info-box__item"
  }, [_c("div", {
    staticClass: "map-info-box__text"
  }, [_vm._v("Sektora")]), _vm._v(" "), _c("div", {
    staticClass: "map-info-box__value"
  }, [_vm._v(_vm._s(_vm.data.totalSectors))])]), _vm._v(" "), _c("div", {
    staticClass: "map-info-box__separator"
  }), _vm._v(" "), _c("div", {
    staticClass: "map-info-box__item"
  }, [_c("div", {
    staticClass: "map-info-box__small-text"
  }, [_vm._v("Više od")]), _vm._v(" "), _c("div", {
    staticClass: "map-info-box__value"
  }, [_vm._v(_vm._s(_vm.data.totalProjectsValue))]), _vm._v(" "), _c("div", {
    staticClass: "map-info-box__text"
  }, [_vm._v(_vm._s(_vm.data.totalProjectsWord) + " evra")]), _vm._v(" "), _c("div", {
    staticClass: "map-info-box__small-text"
  }, [_vm._v("U vrijednostima projekata")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8"
  }, [_c("div", {
    staticClass: "card shadow-lg"
  }, [_c("div", {
    staticClass: "card-header bg-primary text-white"
  }, [_c("ul", {
    staticClass: "nav nav-tabs card-header-tabs"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link active",
    attrs: {
      id: "projects-tab",
      "data-toggle": "tab",
      href: "#projects",
      role: "tab",
      "aria-controls": "projects",
      "aria-selected": "true"
    }
  }, [_vm._v("Projects (" + _vm._s(_vm.data.total) + ")")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      id: "sectors-tab",
      "data-toggle": "tab",
      href: "#sectors",
      role: "tab",
      "aria-controls": "sectors",
      "aria-selected": "false"
    }
  }, [_vm._v("Sectors (" + _vm._s(_vm.data.totalSectors) + ")")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body projects-holder"
  }, [_c("div", {
    staticClass: "tab-content",
    attrs: {
      id: "myTabContent"
    }
  }, [_c("div", {
    staticClass: "tab-pane fade show active",
    attrs: {
      id: "projects",
      role: "tabpanel",
      "aria-labelledby": "projects-tab"
    }
  }, _vm._l(_vm.data.projects, function (project) {
    return _c("div", {
      staticClass: "single-project"
    }, [_c("RouterLink", {
      attrs: {
        to: "/project/".concat(project.id)
      }
    }, [_c("div", {
      staticClass: "map-project__brief"
    }, [_c("div", {
      staticClass: "map-project__date"
    }, [_vm._v(_vm._s(project.duration) + "\n                                                            ")]), _vm._v(" "), _c("h2", {
      staticClass: "map-project__title"
    }, [_vm._v(_vm._s(project.contract_title))])])])], 1);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade",
    attrs: {
      id: "sectors",
      role: "tabpanel",
      "aria-labelledby": "sectors-tab"
    }
  }, _vm._l(_vm.data.sectors, function (sector) {
    return _c("div", [_c("h2", {
      staticClass: "map-sector__title mb-3"
    }, [_vm._v(_vm._s(sector.sector.name) + " (" + _vm._s(sector.count) + ")")])]);
  }), 0)])])])])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12 mt-3"
  }, [_c("button", {
    staticClass: "btn bg-primaryeu2 rounded-o px-3"
  }, [_c("img", {
    staticStyle: {
      fill: "white",
      "margin-right": "5px"
    },
    attrs: {
      src: "303-loop2.svg",
      alt: "reset"
    }
  }), _vm._v(" Reset\n                            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header bg-transparent border-bottom-0"
  }, [_c("h1", {
    staticClass: "card-title text-primary text-right pt-3 projects-title"
  }, [_vm._v("EU PROJEKTI U CRNOJ\n                                GORI")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/CountryMap.vue?vue&type=style&index=0&id=34284741&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/pages/CountryMap.vue?vue&type=style&index=0&id=34284741&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#map_access > select:nth-child(3) {\n    display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/Dashboard.vue?vue&type=style&index=0&id=be11c5ee&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/pages/Dashboard.vue?vue&type=style&index=0&id=be11c5ee&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.map-project__date {\n    font-size: 14px;\n    font-weight: 600;\n    color: #ffc000;\n}\n.map-project__title {\n    margin-bottom: 0;\n    font-size: 18px;\n    font-weight: 600;\n}\n.map-sector__title {\n    margin-bottom: 0;\n    font-size: 15px;\n    font-weight: 500;\n}\n.card {\n    border-radius: 0px !important;\n    border: none !important;\n    box-shadow: none !important;\n}\n.single-project {\n\n    padding: 10px;\n    border-bottom: 1px solid #ccc;\n}\n.single-project:hover {\n    background: #f5f5f5;\n}\n.single-project a {\n    //color: #000;\n    text-decoration: none;\n}\n.projects-holder {\n    height: 90vh;\n    overflow: auto;\n}\n.cs .v-select:before {\n    content: \"\\E90E\";\n    position: absolute;\n    top: -2px;\n    left: 0px;\n    font-family: icomoon;\n    font-size: 24px;\n    color: #ffc000;\n}\n.icon-input-wrapper:before {\n    content: \"search\";\n    position: absolute;\n    top: 6px;\n    left: 0px;\n    font-family: 'icomoon';\n    font-size: 24px;\n    color: #ffc000;\n}\n.ci input:invalid{\n    background: none!important;\n}\n.ci input {\n    background: transparent;\n    border: 0;\n    border-bottom: 2px solid #ffc000;\n    border-radius: 0!important;\n    padding-left: 32px;\n}\n.municipality .v-select:before {\n    content: \"home\" !important;\n}\n.programme .v-select:before {\n    content: \"folder\" !important;\n}\n.sector .v-select:before {\n    content: \"drive\" !important;\n}\n.startyear .v-select:before {\n    content: \"clock\" !important;\n}\n.cs .v-select .vs__dropdown-toggle {\n    padding-left: 32px;\n}\n.cs .vs__actions svg {\n    fill: #ffc000;\n}\n.cs .vs__dropdown-toggle {\n    border-bottom: 2px solid #ffc000;\n}\n.cs label, .ci label {\n    font-size: 1rem !important;\n    color: #3c3c3c !important;\n    padding-bottom: 4px;\n    top: -1.4rem !important;\n}\n.map-info-box__separator {\n    display: block;\n    width: 100%;\n    height: 4px;\n    margin-bottom: 20px;\n    background-color: #fff;\n}\n.bg-primaryeu {\n    background-color: #d2d3d5 !important;\n    color: #041020 !important;\n}\n.bg-primaryeu2 {\n    background-color: #d2d3d5 !important;\n    color: #041020 !important;\n    border-radius: 0 !important;\n    transition: 0.2s all ease-in-out;\n    box-shadow: none !important;\n}\n.bg-primaryeu2:hover {\n    background-color: #ffc000 !important;\n    color: #041020 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n}\n.projects-title {\n    color: #0C4DA2 !important;\n    font-size: 2.8rem;\n    font-weight: 700;\n    margin-bottom: 20px;\n}\n.projects-holderaa {\n    //margin-top: -137px;\n    //height: 20vh!important;\n    background: transparent!important;\n}\n\n/* CSS for small screens */\n@media (max-width: 768px) {\n.projects-holderaa {\n        margin-top: 0;\n        font-size: 12px; /* Change to your preferred small screen font size */\n}\n.projects-title {\n        text-align: center!important;\n}\n}\n\n/* CSS for large screens */\n@media (min-width: 769px) {\n.projects-holderaa {\n        margin-top: -137px;\n        font-size: 16px; /* Change to your preferred large screen font size */\n}\n}\n.projects-holderaa .card {\n    background: transparent!important;\n}\n.projects-holderaa .card-header{\n    border-radius: 0!important;\n    padding: 0!important;\n}\n.projects-holder {\n    height: 70vh!important;\n}\n.card-header-tabs{\n    margin: 0!important;\n    padding: 0!important;\n    border-radius: 0!important;\n}\n.card-header-tabs .nav-item{\n    margin: 0!important;\n    border-radius: 0!important;\n}\n.card-header-tabs .nav-item a{\n    margin: 0!important;\n    border-radius: 0!important;\n}\n#projects-tab{\n    border-radius: 0!important;\n}\n/* ===== Scrollbar CSS ===== */\n/* Firefox */\n.card-title {\n    color: #0C4DA2;\n}\n.nav-tabs .nav-link {\n    color: #0C4DA2;\n}\n.nav-tabs .nav-link.active {\n    color: #ffc000;\n    background-color: #0C4DA2;\n}\n.card.bg-warning {\n    border-color: #ffc000;\n}\n.display-4 {\n    font-size: 2.5rem;\n}\n.card-header.bg-primary {\n    background-color: #0C4DA2 !important;\n}\n.nav-tabs .nav-link.active {\n    background-color: #ffc000 !important;\n    color: #0C4DA2 !important;\n}\n.shadow-lg {\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;\n}\n.map-info-box {\n    max-width: 300px;\n    padding: 15px 0 0;\n}\n.map-info-box {\n    max-width: 360px;\n    display: inline-flex;\n    flex-wrap: wrap;\n    flex-flow: column;\n    padding: 20px 0 0;\n    background-color: #ffc000;\n    font-family: Barlow, Arial, Helvetica, sans-serif;\n}\n.map-info-box__item {\n    text-align: center;\n    flex-basis: 50%;\n    flex-shrink: 1;\n    padding-left: 25px;\n    padding-right: 25px;\n    margin-bottom: 20px;\n}\n.map-info-box__text {\n    font-size: 18px;\n    font-weight: 600;\n    color: #000;\n    text-align: center;\n    text-transform: uppercase;\n    line-height: 1;\n}\n.map-info-box__value {\n    font-size: 58px;\n    font-weight: bold;\n    color: #fff;\n    text-align: center;\n    text-transform: uppercase;\n    line-height: 0.9;\n}\n.map-info-box {\n    width: 100%;\n}\n// Media query for small phones\n\n@media only screen and (max-width: 400px) {\n.projects-holderaa {\n        margin-top: 0px!important;\n        background: red!important; /* Just for testing purposes */\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/CountryMap.vue?vue&type=style&index=0&id=34284741&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/pages/CountryMap.vue?vue&type=style&index=0&id=34284741&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CountryMap.vue?vue&type=style&index=0&id=34284741&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/CountryMap.vue?vue&type=style&index=0&id=34284741&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/Dashboard.vue?vue&type=style&index=0&id=be11c5ee&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/js/pages/Dashboard.vue?vue&type=style&index=0&id=be11c5ee&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=be11c5ee&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/Dashboard.vue?vue&type=style&index=0&id=be11c5ee&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/app/js/pages/CountryMap.vue":
/*!***********************************************!*\
  !*** ./resources/app/js/pages/CountryMap.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CountryMap_vue_vue_type_template_id_34284741___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountryMap.vue?vue&type=template&id=34284741& */ "./resources/app/js/pages/CountryMap.vue?vue&type=template&id=34284741&");
/* harmony import */ var _CountryMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountryMap.vue?vue&type=script&lang=js& */ "./resources/app/js/pages/CountryMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CountryMap_vue_vue_type_style_index_0_id_34284741_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountryMap.vue?vue&type=style&index=0&id=34284741&lang=css& */ "./resources/app/js/pages/CountryMap.vue?vue&type=style&index=0&id=34284741&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CountryMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CountryMap_vue_vue_type_template_id_34284741___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CountryMap_vue_vue_type_template_id_34284741___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/pages/CountryMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/pages/CountryMap.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/app/js/pages/CountryMap.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CountryMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/CountryMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/pages/CountryMap.vue?vue&type=style&index=0&id=34284741&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/app/js/pages/CountryMap.vue?vue&type=style&index=0&id=34284741&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMap_vue_vue_type_style_index_0_id_34284741_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CountryMap.vue?vue&type=style&index=0&id=34284741&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/CountryMap.vue?vue&type=style&index=0&id=34284741&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMap_vue_vue_type_style_index_0_id_34284741_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMap_vue_vue_type_style_index_0_id_34284741_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMap_vue_vue_type_style_index_0_id_34284741_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMap_vue_vue_type_style_index_0_id_34284741_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/app/js/pages/CountryMap.vue?vue&type=template&id=34284741&":
/*!******************************************************************************!*\
  !*** ./resources/app/js/pages/CountryMap.vue?vue&type=template&id=34284741& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMap_vue_vue_type_template_id_34284741___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./CountryMap.vue?vue&type=template&id=34284741& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/CountryMap.vue?vue&type=template&id=34284741&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMap_vue_vue_type_template_id_34284741___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CountryMap_vue_vue_type_template_id_34284741___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/js/pages/Dashboard.vue":
/*!**********************************************!*\
  !*** ./resources/app/js/pages/Dashboard.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_be11c5ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=be11c5ee& */ "./resources/app/js/pages/Dashboard.vue?vue&type=template&id=be11c5ee&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/app/js/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_be11c5ee_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=be11c5ee&lang=css& */ "./resources/app/js/pages/Dashboard.vue?vue&type=style&index=0&id=be11c5ee&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_be11c5ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_be11c5ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/js/pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/js/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/app/js/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/js/pages/Dashboard.vue?vue&type=style&index=0&id=be11c5ee&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/js/pages/Dashboard.vue?vue&type=style&index=0&id=be11c5ee&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_be11c5ee_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=be11c5ee&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/Dashboard.vue?vue&type=style&index=0&id=be11c5ee&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_be11c5ee_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_be11c5ee_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_be11c5ee_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_be11c5ee_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/app/js/pages/Dashboard.vue?vue&type=template&id=be11c5ee&":
/*!*****************************************************************************!*\
  !*** ./resources/app/js/pages/Dashboard.vue?vue&type=template&id=be11c5ee& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_be11c5ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=be11c5ee& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/js/pages/Dashboard.vue?vue&type=template&id=be11c5ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_be11c5ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_be11c5ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);