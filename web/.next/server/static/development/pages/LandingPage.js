module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sanityClient = __webpack_require__(/*! @sanity/client */ "@sanity/client");

var client = sanityClient({
  projectId: 'ogg4t6rs',
  dataset: 'production',
  token: '',
  // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data

});
module.exports = client;

/***/ }),

/***/ "./components/Cta.js":
/*!***************************!*\
  !*** ./components/Cta.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Cta_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cta.module.css */ "./components/Cta.module.css");
/* harmony import */ var _Cta_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Cta_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/Cta.js";





function cta(props) {
  var title = props.title,
      route = props.route,
      link = props.link;

  if (route && route.slug && route.slug.current) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/LandingPage',
        query: {
          slug: route.slug.current
        }
      },
      as: "/".concat(route.slug.current),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: _Cta_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, title));
  }

  if (link) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: _Cta_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
      href: link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, title);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _Cta_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, title);
}

cta.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    slug: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      current: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })
  }),
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (cta);

/***/ }),

/***/ "./components/Cta.module.css":
/*!***********************************!*\
  !*** ./components/Cta.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"button": "Cta-module__button___2cyJ4"
};

/***/ }),

/***/ "./components/EmbedHTML.js":
/*!*********************************!*\
  !*** ./components/EmbedHTML.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/EmbedHTML.js";



function EmbedHTML(_ref) {
  var node = _ref.node;
  var html = node.html;

  if (!html) {
    return undefined;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
}

EmbedHTML.propTypes = {
  node: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    html: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })
};
/* harmony default export */ __webpack_exports__["default"] = (EmbedHTML);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.module.css */ "./components/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SimpleBlockContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SimpleBlockContent */ "./components/SimpleBlockContent.js");
var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/Footer.js";







function Footer(props) {
  var navItems = props.navItems,
      text = props.text,
      router = props.router;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.items,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, navItems && navItems.map(function (item) {
    var isActive = router.pathname === '/LandingPage' && router.query.slug === item.slug.current;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item._id,
      className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: {
        pathname: '/LandingPage',
        query: {
          slug: item.slug.current
        }
      },
      as: "/".concat(item.slug.current),
      prefetch: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-is-active": isActive ? 'true' : 'false',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, item.title)));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SimpleBlockContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    blocks: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
}

Footer.propTypes = {
  navItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    slug: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      current: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    }).isRequired
  })),
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      slug: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Footer));

/***/ }),

/***/ "./components/Footer.module.css":
/*!**************************************!*\
  !*** ./components/Footer.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "Footer-module__root___2GrSr",
	"items": "Footer-module__items___2dGMJ",
	"item": "Footer-module__item___2tIfA",
	"text": "Footer-module__text___1vBhe"
};

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-inlinesvg */ "react-inlinesvg");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header.module.css */ "./components/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _icons_Hamburger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/Hamburger */ "./components/icons/Hamburger.js");







var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/Header.js";








var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      showNav: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "hideMenu", function () {
      _this.setState({
        showNav: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMenuToggle", function () {
      var showNav = _this.state.showNav;

      _this.setState({
        showNav: !showNav
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderLogo", function (logo) {
      if (!logo || !logo.asset) {
        return null;
      }

      if (logo.asset.extension === 'svg') {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_11___default.a, {
          src: logo.asset.url,
          className: _Header_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.logo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: logo.asset.url,
        alt: logo.title,
        className: _Header_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var router = this.props.router;
      router.events.on('routeChangeComplete', this.hideMenu);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var router = this.props.router;
      router.events.off('routeChangeComplete', this.hideMenu);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? 'Missing title' : _this$props$title,
          navItems = _this$props.navItems,
          router = _this$props.router,
          logo = _this$props.logo;
      var showNav = this.state.showNav;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _Header_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.root,
        "data-show-nav": showNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: _Header_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.branding,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: {
          pathname: '/LandingPage',
          query: {
            slug: '/'
          }
        },
        as: "/",
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, this.renderLogo(logo)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: _Header_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.nav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: _Header_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.navItems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, navItems && navItems.map(function (item) {
        var slug = item.slug,
            title = item.title,
            _id = item._id;
        var isActive = router.pathname === '/LandingPage' && router.query.slug === slug.current;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: _id,
          className: _Header_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.navItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: {
            pathname: '/LandingPage',
            query: {
              slug: slug.current
            }
          },
          as: "/".concat(slug.current),
          prefetch: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          "data-is-active": isActive ? 'true' : 'false',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, title)));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: _Header_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.showNavButton,
        onClick: this.handleMenuToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icons_Hamburger__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: _Header_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.hamburgerIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Header, "propTypes", {
  router: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    query: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
      slug: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
    }),
    events: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any
  }),
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  navItems: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
    slug: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
      current: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
    }).isRequired
  })),
  logo: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    asset: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
      url: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
    }),
    logo: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Header));

/***/ }),

/***/ "./components/Header.module.css":
/*!**************************************!*\
  !*** ./components/Header.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "Header-module__root___1UNRH",
	"branding": "Header-module__branding___3fWoR",
	"logo": "Header-module__logo___1C890",
	"nav": "Header-module__nav___3dWJo",
	"navItems": "Header-module__navItems___D97XT",
	"navItem": "Header-module__navItem___1XGqh",
	"showNavButton": "Header-module__showNavButton___2y7_a",
	"hamburgerIcon": "Header-module__hamburgerIcon___1DYPP"
};

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/Layout.js";







function Layout(props) {
  var config = props.config,
      children = props.children;

  if (!config) {
    console.error('Missing config');
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Missing config");
  }

  var title = config.title,
      mainNavigation = config.mainNavigation,
      footerNavigation = config.footerNavigation,
      footerText = config.footerText,
      logo = config.logo,
      url = config.url;
  var logoUrl = logo && logo.asset && logo.asset.url;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width, viewport-fit=cover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    navItems: mainNavigation,
    logo: logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navItems: footerNavigation,
    text: footerText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), logoUrl && url && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_3__["LogoJsonLd"], {
    url: url,
    logo: logoUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })));
}

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node),
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    mainNavigation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    footerNavigation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    footerText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    logo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      asset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
      })
    }),
    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/RenderSections.js":
/*!**************************************!*\
  !*** ./components/RenderSections.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections */ "./components/sections/index.js");

var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/RenderSections.js";





function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  var Section = _sections__WEBPACK_IMPORTED_MODULE_4__[Object(lodash__WEBPACK_IMPORTED_MODULE_3__["upperFirst"])(section._type)];

  if (Section) {
    return Section;
  }

  console.error('Cant find section', section); // eslint-disable-line no-console

  return null;
}

function RenderSections(props) {
  var sections = props.sections;

  if (!sections) {
    console.error('Missing section');
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Missing sections");
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, sections.map(function (section) {
    var SectionComponent = resolveSections(section);

    if (!SectionComponent) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Missing section ", section._type);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, section, {
      key: section._key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }));
  }));
}

RenderSections.propTypes = {
  sections: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    _type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    _key: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    section: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (RenderSections);

/***/ }),

/***/ "./components/SimpleBlockContent.js":
/*!******************************************!*\
  !*** ./components/SimpleBlockContent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/block-content-to-react */ "@sanity/block-content-to-react");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _serializers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serializers */ "./components/serializers.js");
var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/SimpleBlockContent.js";






var _client$config = _client__WEBPACK_IMPORTED_MODULE_3___default.a.config(),
    projectId = _client$config.projectId,
    dataset = _client$config.dataset;

function SimpleBlockContent(props) {
  var blocks = props.blocks;

  if (!blocks) {
    console.error('Missing blocks');
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    blocks: blocks,
    serializers: _serializers__WEBPACK_IMPORTED_MODULE_4__["default"],
    projectId: projectId,
    dataset: dataset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  });
}

SimpleBlockContent.propTypes = {
  blocks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (SimpleBlockContent);

/***/ }),

/***/ "./components/icons/Hamburger.js":
/*!***************************************!*\
  !*** ./components/icons/Hamburger.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/icons/Hamburger.js";

var strokeStyle = {
  vectorEffect: 'non-scaling-stroke'
};

function HamburgerIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    width: "1em",
    height: "1em"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M5 7.5H20",
    stroke: "currentColor",
    style: strokeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M5 12.5H20",
    stroke: "currentColor",
    style: strokeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M5 17.5H20",
    stroke: "currentColor",
    style: strokeStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HamburgerIcon);

/***/ }),

/***/ "./components/sections/ContactUs.js":
/*!******************************************!*\
  !*** ./components/sections/ContactUs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextSection_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextSection.module.css */ "./components/sections/TextSection.module.css");
/* harmony import */ var _TextSection_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextSection_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/sections/ContactUs.js";





var ContactUs = function ContactUs(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _TextSection_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1971359954" + " " + (_TextSection_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.article || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    name: "contact",
    method: "POST",
    "data-netlify": "true",
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: "50%"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    name: "subject[]",
    required: "required",
    selected: "default",
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "default",
    disabled: true,
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Select..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Informatin Request"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "General Inquiry"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Praise/Complaint"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Website Suggestion"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: "100%",
      display: "flex"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "name",
    required: true,
    placeholder: "Your name",
    style: {
      width: "45%",
      marginRight: "5%"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "email",
    name: "email",
    required: true,
    placeholder: "Your email",
    style: {
      width: "45%"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: "100%",
      display: "flex"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: "company",
    name: "company",
    placeholder: "Company",
    style: {
      width: "45%",
      marginRight: "5%"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: "100%",
      display: "flex"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: "address1",
    name: "address1",
    placeholder: "Address line 1",
    style: {
      width: "45%",
      marginRight: "5%"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: "address2",
    name: "address2",
    placeholder: "Address line 2",
    style: {
      width: "45%"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: "100%",
      display: "flex"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: "city",
    name: "city",
    placeholder: "City",
    style: {
      width: "33%",
      marginRight: "4%"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: "st",
    name: "st",
    placeholder: "State/Province",
    style: {
      width: "33%",
      marginRight: "4%"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    id: "zip",
    name: "zip",
    placeholder: "Postal Code",
    style: {
      width: "20%"
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    id: "message",
    name: "message",
    rows: "6",
    placeholder: "Your message here...",
    style: {
      width: '45%'
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "fileUpload",
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "File input"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "file",
    id: "fileUpload",
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    "data-netlify-recaptcha": "true",
    style: {
      maxWidth: '75% !important'
    },
    className: "jsx-1971359954",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "jsx-1971359954" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Submit")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1971359954",
    __self: this
  }, "div.jsx-1971359954{margin-bottom:1.5vh;}@media only screen and (max-width:1024px){.form.jsx-1971359954{margin:0 4%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRoYW4vcHJvamVjdHMvbmF0aXZlbnVyc2VyeS9zYW5pdHktbmVhcmx5LW5hdGl2ZS1udXJzZXJ5L3dlYi9jb21wb25lbnRzL3NlY3Rpb25zL0NvbnRhY3RVcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SG9CLEFBR21DLEFBS1IsWUFDZCxRQUxGIiwiZmlsZSI6Ii9Vc2Vycy9uYXRoYW4vcHJvamVjdHMvbmF0aXZlbnVyc2VyeS9zYW5pdHktbmVhcmx5LW5hdGl2ZS1udXJzZXJ5L3dlYi9jb21wb25lbnRzL3NlY3Rpb25zL0NvbnRhY3RVcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0U2VjdGlvbi5tb2R1bGUuY3NzJ1xuXG5cbmNvbnN0IENvbnRhY3RVcyA9IChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+ICAgICAgICBcbiAgICAgICAgPGZvcm0gbmFtZT1cImNvbnRhY3RcIiBtZXRob2Q9XCJQT1NUXCIgZGF0YS1uZXRsaWZ5PVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI1MCVcIiB9fT5cbiAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic3ViamVjdFtdXCIgIHJlcXVpcmVkPSdyZXF1aXJlZCcgc2VsZWN0ZWQ9J2RlZmF1bHQnPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCIgZGlzYWJsZWQ+U2VsZWN0Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5JbmZvcm1hdGluIFJlcXVlc3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPkdlbmVyYWwgSW5xdWlyeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+UHJhaXNlL0NvbXBsYWludDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+V2Vic2l0ZSBTdWdnZXN0aW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI0NSVcIiwgbWFyZ2luUmlnaHQ6IFwiNSVcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjQ1JVwiIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29tcGFueVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbXBhbnlcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29tcGFueVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNDUlXCIsIG1hcmdpblJpZ2h0OiBcIjUlXCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cImFkZHJlc3MxXCJcbiAgICAgICAgICAgICAgICBuYW1lPSdhZGRyZXNzMSdcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgbGluZSAxXCJcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI0NSVcIiwgbWFyZ2luUmlnaHQ6IFwiNSVcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJhZGRyZXNzMlwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImFkZHJlc3MyXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgbGluZSAyXCJcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI0NSVcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cImNpdHlcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNpdHlcIlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBtYXJnaW5SaWdodDogXCI0JVwiIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cInN0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwic3RcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhdGUvUHJvdmluY2VcIlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBtYXJnaW5SaWdodDogXCI0JVwiIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cInppcFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3N0YWwgQ29kZVwiXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjAlXCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICByb3dzPVwiNlwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2UgaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc0NSUnIH19XG4gICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVVcGxvYWRcIj5GaWxlIGlucHV0PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIGlkPVwiZmlsZVVwbG9hZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1uZXRsaWZ5LXJlY2FwdGNoYT1cInRydWVcIiBzdHlsZT17e21heFdpZHRoOiAnNzUlICFpbXBvcnRhbnQnfX0+PC9kaXY+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41dmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIC5mb3JtIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDQlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBDb250YWN0VXMucHJvcFR5cGVzID0ge1xuICAgIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXM7XG4iXX0= */\n/*@ sourceURL=/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/sections/ContactUs.js */")));
};

ContactUs.propTypes = {
  heading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ContactUs);

/***/ }),

/***/ "./components/sections/Hero.js":
/*!*************************************!*\
  !*** ./components/sections/Hero.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hero.module.css */ "./components/sections/Hero.module.css");
/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SimpleBlockContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SimpleBlockContent */ "./components/SimpleBlockContent.js");
/* harmony import */ var _Cta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cta */ "./components/Cta.js");

var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/sections/Hero.js";








function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_client__WEBPACK_IMPORTED_MODULE_5___default.a).image(source);
}

function Hero(props) {
  var heading = props.heading,
      backgroundImage = props.backgroundImage,
      tagline = props.tagline,
      ctas = props.ctas;
  var style = backgroundImage ? {
    backgroundImage: "url(\"".concat(urlFor(backgroundImage).width(2000).auto('format').url(), "\")")
  } : {};
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.root,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, heading), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.tagline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, tagline && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SimpleBlockContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    blocks: tagline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), ctas && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.ctas,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, ctas.map(function (cta) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Cta__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cta, {
      key: cta._key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }));
  }))));
}

Hero.propTypes = {
  heading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  backgroundImage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  tagline: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  ctas: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/sections/Hero.module.css":
/*!*********************************************!*\
  !*** ./components/sections/Hero.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	"root": "Hero-module__root___2Imh6 " + __webpack_require__(/*! -!../../node_modules/css-loader/locals.js??ref--5-0!../../node_modules/postcss-loader/src??ref--5-1!../../styles/shared.module.css */ "./styles/shared.module.css")["center"] + "",
	"content": "Hero-module__content___2h0zh",
	"title": "Hero-module__title___hoCiS",
	"tagline": "Hero-module__tagline___6cdwx",
	"ctas": "Hero-module__ctas___oSOEb"
};

/***/ }),

/***/ "./components/sections/ImageSection.js":
/*!*********************************************!*\
  !*** ./components/sections/ImageSection.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ImageSection_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageSection.module.css */ "./components/sections/ImageSection.module.css");
/* harmony import */ var _ImageSection_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ImageSection_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SimpleBlockContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SimpleBlockContent */ "./components/SimpleBlockContent.js");
/* harmony import */ var _Cta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cta */ "./components/Cta.js");

var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/sections/ImageSection.js";







var builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_client__WEBPACK_IMPORTED_MODULE_5___default.a);

function ImageSection(props) {
  var heading = props.heading,
      label = props.label,
      text = props.text,
      image = props.image,
      cta = props.cta;

  if (!image) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _ImageSection_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
    className: _ImageSection_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: builder.image(image).auto('format').width(2000).url(),
    className: _ImageSection_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image,
    alt: heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figcaption", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _ImageSection_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.caption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _ImageSection_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.captionBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _ImageSection_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: _ImageSection_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, heading), text && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SimpleBlockContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    blocks: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), cta && cta.route && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Cta__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })))))));
}

ImageSection.propTypes = {
  heading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    asset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      _ref: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
    })
  }),
  backgroundImage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  tagline: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  cta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (ImageSection);

/***/ }),

/***/ "./components/sections/ImageSection.module.css":
/*!*****************************************************!*\
  !*** ./components/sections/ImageSection.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "ImageSection-module__root___X5RCV",
	"label": "ImageSection-module__label___3E5g0",
	"title": "ImageSection-module__title___1FKdd",
	"image": "ImageSection-module__image___wjA9x",
	"content": "ImageSection-module__content___gC3fG",
	"caption": "ImageSection-module__caption___2a5Db",
	"captionBox": "ImageSection-module__captionBox___2WD54"
};

/***/ }),

/***/ "./components/sections/Mailchimp.js":
/*!******************************************!*\
  !*** ./components/sections/Mailchimp.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mailchimp; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_mailchimp_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-mailchimp-form */ "react-mailchimp-form");
/* harmony import */ var react_mailchimp_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Mailchimp_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mailchimp.module.css */ "./components/sections/Mailchimp.module.css");
/* harmony import */ var _Mailchimp_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Mailchimp_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/sections/Mailchimp.js";




function Mailchimp(props) {
  var heading = props.heading,
      subtitle = props.subtitle,
      actionUrl = props.actionUrl;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: _Mailchimp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Mailchimp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: _Mailchimp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, heading), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _Mailchimp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, subtitle), actionUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_mailchimp_form__WEBPACK_IMPORTED_MODULE_2___default.a, {
    action: actionUrl,
    fields: [{
      name: 'EMAIL',
      placeholder: 'Email',
      type: 'email',
      className: _Mailchimp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.email,
      required: true
    }],
    buttonClassName: _Mailchimp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
    styles: {
      sendingMsg: {
        color: '#0652DD'
      },
      successMsg: {
        color: '#009432'
      },
      duplicateMsg: {
        color: '#EE5A24'
      },
      errorMsg: {
        color: 'red'
      }
    },
    messages: {
      sending: 'Sending...',
      success: 'Thank you for subscribing!',
      error: 'An unexpected internal error has occurred.',
      empty: 'You must write an e-mail.',
      duplicate: 'Already subscribed',
      button: 'Subscribe!'
    },
    className: _Mailchimp_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })));
}
Mailchimp.propTypes = {
  heading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  actionUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};

/***/ }),

/***/ "./components/sections/Mailchimp.module.css":
/*!**************************************************!*\
  !*** ./components/sections/Mailchimp.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "Mailchimp-module__root___2JTQm",
	"container": "Mailchimp-module__container___3RNYq",
	"heading": "Mailchimp-module__heading___1dshs",
	"subtitle": "Mailchimp-module__subtitle___3UGKa",
	"form": "Mailchimp-module__form___3eJ8N"
};

/***/ }),

/***/ "./components/sections/SearchPage.js":
/*!*******************************************!*\
  !*** ./components/sections/SearchPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/sections/SearchPage.js";



var SearchPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchPage, _Component);

  function SearchPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      search_name: "",
      category: "any",
      soil_ph_acid: false,
      soil_ph_neutral: false,
      soil_ph_alkaline: false,
      soil_type_clay: false,
      soil_type_average: false,
      soil_type_sand: false,
      water_dry: false,
      water_average: false,
      water_wet: false,
      sun_full: false,
      sun_partial: false,
      sun_shade: false,
      foliage_evergreen: false,
      foliage_semievergreen: false,
      foliage_deciduous: false,
      zone: 'any'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event) {
      event.preventDefault();
      var field = event.target.id;

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, event.target.value));

      setTimeout(function () {
        return console.log(field + ": " + _this.state[field]);
      }, 1000);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleCheck", function (event) {
      var field = event.target.id;

      _this.setState(function (prevState) {
        return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, !prevState[field]);
      });

      setTimeout(function () {
        return console.log(field + ": " + _this.state[field]);
      }, 1000);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          textAlign: "center"
        },
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "search_name",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Search Botanical Name or Common Name: \xA0")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        id: "search_name",
        onChange: this.handleChange,
        style: {
          backgroundColor: '#e3e3e3',
          padding: '0 8px',
          height: '22px'
        },
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "...or by Growing Conditions"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          padding: "0 2vw 1vh",
          boxSizing: "border-box",
          border: "1px solid #cccccc",
          textAlign: "left",
          fontSize: '1.8vw'
        },
        className: "jsx-1752864845" + " " + "spacedRow col1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          display: "inline-block"
        },
        className: "jsx-1752864845" + " " + "spacedRow indent0 col5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Soil Ph"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "soil_ph_acid",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "soil_ph_acid",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "acid")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "soil_ph_neutral",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "soil_ph_neutral",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "neutral")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "soil_ph_alkaline",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "soil_ph_alkaline",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "alkaline"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1752864845" + " " + "spacedRow indent20 col5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Soil Type"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "soil_type_clay",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "soil_type_clay",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "clay")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "soil_type_average",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "soil_type_average",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "average")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "soil_type_sand",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "soil_type_sand",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "sand"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1752864845" + " " + "spacedRow indent40 col5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Water"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "water_wet",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "water_wet",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "wet")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "water_average",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "water_average",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "average")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        onChange: this.handleCheck,
        id: "water_dry",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "water_dry",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "dry"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1752864845" + " " + "spacedRow indent60 col5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Sun Exposure"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "sun_full",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "sun_full",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "full")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "sun_partial",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "sun_partial",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "partial")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "sun_shade",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "sun_shade",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "shade"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1752864845" + " " + "spacedRow indent80 col5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Foliage"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "foliage_evergreen",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "foliage_evergreen",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "evergreen")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "foliage_semievergreen",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "foliage_semievergreen",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "semi-evergreen")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "checkbox",
        id: "foliage_deciduous",
        onChange: this.handleCheck,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "foliage_deciduous",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "deciduous")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "zone",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
        style: {
          margin: '10px 0 0 0'
        },
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "USDA Hardiness Zone")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
        type: "number",
        id: "zone",
        value: this.state.zone,
        onChange: this.handleChange,
        style: {
          display: 'inline-block',
          margin: '0 10px'
        },
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "any",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "--any--"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "3"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "4"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "5"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "6"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "7"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "8"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "9"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "10"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "11"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "12")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://garden.org/nga/zipzone/",
        target: "_blank",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
        style: {
          display: 'inline-block',
          margin: '0 10px'
        },
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("u", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "What's My USDA Hardiness Zone?"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          margin: '20px 0 0 0',
          display: 'block'
        },
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        htmlFor: "category",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Category")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
        id: "category",
        value: this.state.category,
        onChange: this.handleChange,
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "any",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "--any--"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "Ferns",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Ferns"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "Grasses",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Grasses"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "Opuntia",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "Opuntia"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "Palms",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Palms"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "Perennials",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Perennials"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "Seeds",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "Seeds"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "Shrubs",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "Shrubs"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "Trees",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Trees"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "Vines",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Vines"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "Yucca",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "Yucca"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/search",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        id: "plantFind",
        className: "jsx-1752864845",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Find My Plants"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1752864845",
        __self: this
      }, "html.jsx-1752864845{font-size:1.8vw;}.spacedRow.jsx-1752864845{margin-top:2vh;}.indent0.jsx-1752864845{position:relative;left:0%;width:auto;}.indent20.jsx-1752864845{position:absolute;left:20%;width:auto;}.indent40.jsx-1752864845{position:absolute;left:40%;width:auto;}.indent60.jsx-1752864845{position:absolute;left:60%;width:auto;}.indent80.jsx-1752864845{position:absolute;left:80%;}.col1.jsx-1752864845{width:100%;}.col5.jsx-1752864845{width:20%;}#plantFind.jsx-1752864845{width:38%;text-align:center;padding:15px 0;margin:50px 0;border:1px solid #3e3e3e;border-radius:2vw;box-sizing:border-box;color:#3e3e3e;background-color:transparent;cursor:pointer;font-size:var(--font-title3-size);line-height:var(--font-title3-line-height);}#plantFind.jsx-1752864845:hover{color:#7d62b2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRoYW4vcHJvamVjdHMvbmF0aXZlbnVyc2VyeS9zYW5pdHktbmVhcmx5LW5hdGl2ZS1udXJzZXJ5L3dlYi9jb21wb25lbnRzL3NlY3Rpb25zL1NlYXJjaFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1FXLEFBRytCLEFBR0QsQUFHRyxBQUtBLEFBS0EsQUFLQSxBQUtBLEFBSVAsQUFHRCxBQUdELEFBY0ssVUFoQmhCLEFBR29CLENBTnBCLEdBb0JBLENBL0NBLENBSEEsRUFNVSxBQUtDLEFBS0EsQUFLQSxBQUtBLFFBbkJFLENBS0EsQUFLQSxBQUtBLEFBS2IsQ0FVaUIsU0E3QmpCLENBS0EsQUFLQSxBQUtBLEtBZWdCLGNBQ1cseUJBQ1Asa0JBQ0ksc0JBQ1IsY0FDZSw2QkFDZCxlQUNtQixrQ0FDUywyQ0FDN0MiLCJmaWxlIjoiL1VzZXJzL25hdGhhbi9wcm9qZWN0cy9uYXRpdmVudXJzZXJ5L3Nhbml0eS1uZWFybHktbmF0aXZlLW51cnNlcnkvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvU2VhcmNoUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgU2VhcmNoUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNlYXJjaF9uYW1lOiBcIlwiLFxuICAgIGNhdGVnb3J5OiBcImFueVwiLFxuICAgIHNvaWxfcGhfYWNpZDogZmFsc2UsXG4gICAgc29pbF9waF9uZXV0cmFsOiBmYWxzZSxcbiAgICBzb2lsX3BoX2Fsa2FsaW5lOiBmYWxzZSxcbiAgICBzb2lsX3R5cGVfY2xheTogZmFsc2UsXG4gICAgc29pbF90eXBlX2F2ZXJhZ2U6IGZhbHNlLFxuICAgIHNvaWxfdHlwZV9zYW5kOiBmYWxzZSxcbiAgICB3YXRlcl9kcnk6IGZhbHNlLFxuICAgIHdhdGVyX2F2ZXJhZ2U6IGZhbHNlLFxuICAgIHdhdGVyX3dldDogZmFsc2UsXG4gICAgc3VuX2Z1bGw6IGZhbHNlLFxuICAgIHN1bl9wYXJ0aWFsOiBmYWxzZSxcbiAgICBzdW5fc2hhZGU6IGZhbHNlLFxuICAgIGZvbGlhZ2VfZXZlcmdyZWVuOiBmYWxzZSxcbiAgICBmb2xpYWdlX3NlbWlldmVyZ3JlZW46IGZhbHNlLFxuICAgIGZvbGlhZ2VfZGVjaWR1b3VzOiBmYWxzZSxcbiAgICB6b25lOiAnYW55J1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZpZWxkID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjb25zb2xlLmxvZyhmaWVsZCArIFwiOiBcIiArIHRoaXMuc3RhdGVbZmllbGRdKSwgMTAwMCk7XG4gIH07XG5cbiAgaGFuZGxlQ2hlY2sgPSBldmVudCA9PiB7XG4gICAgY29uc3QgZmllbGQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIFtmaWVsZF06ICFwcmV2U3RhdGVbZmllbGRdXG4gICAgfSkpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY29uc29sZS5sb2coZmllbGQgKyBcIjogXCIgKyB0aGlzLnN0YXRlW2ZpZWxkXSksIDEwMDApO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VhcmNoX25hbWVcIj5cbiAgICAgICAgICAgIDxoND5TZWFyY2ggQm90YW5pY2FsIE5hbWUgb3IgQ29tbW9uIE5hbWU6ICZuYnNwOzwvaDQ+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwic2VhcmNoX25hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2UzZTNlMycsIHBhZGRpbmc6ICcwIDhweCcsIGhlaWdodDogJzIycHgnIH19XG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPGg0Pi4uLm9yIGJ5IEdyb3dpbmcgQ29uZGl0aW9uczwvaDQ+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFjZWRSb3cgY29sMVwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAydncgMXZoXCIsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NjY2NcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLCBcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEuOHZ3J1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9XCJzcGFjZWRSb3cgaW5kZW50MCBjb2w1XCJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2PlNvaWwgUGg8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD1cInNvaWxfcGhfYWNpZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGVja31cbiAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNvaWxfcGhfYWNpZFwiPmFjaWQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD1cInNvaWxfcGhfbmV1dHJhbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGVja31cbiAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNvaWxfcGhfbmV1dHJhbFwiPm5ldXRyYWw8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD1cInNvaWxfcGhfYWxrYWxpbmVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hlY2t9XG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzb2lsX3BoX2Fsa2FsaW5lXCI+YWxrYWxpbmU8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc3Bhbj5cblxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VkUm93IGluZGVudDIwIGNvbDVcIj5cbiAgICAgICAgPGRpdj5Tb2lsIFR5cGU8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD1cInNvaWxfdHlwZV9jbGF5XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoZWNrfVxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic29pbF90eXBlX2NsYXlcIj5jbGF5PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJzb2lsX3R5cGVfYXZlcmFnZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGVja31cbiAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNvaWxfdHlwZV9hdmVyYWdlXCI+YXZlcmFnZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGlkPVwic29pbF90eXBlX3NhbmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hlY2t9XG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzb2lsX3R5cGVfc2FuZFwiPnNhbmQ8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc3Bhbj5cblxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VkUm93IGluZGVudDQwIGNvbDVcIj5cbiAgICAgICAgPGRpdj5XYXRlcjwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGlkPVwid2F0ZXJfd2V0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoZWNrfVxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2F0ZXJfd2V0XCI+d2V0PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJ3YXRlcl9hdmVyYWdlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoZWNrfVxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2F0ZXJfYXZlcmFnZVwiPmF2ZXJhZ2U8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGVja31cbiAgICAgICAgICAgIGlkPVwid2F0ZXJfZHJ5XCJcbiAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndhdGVyX2RyeVwiPmRyeTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZWRSb3cgaW5kZW50NjAgY29sNVwiPlxuICAgICAgICA8ZGl2PlN1biBFeHBvc3VyZTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGlkPVwic3VuX2Z1bGxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hlY2t9XG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdW5fZnVsbFwiPmZ1bGw8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD1cInN1bl9wYXJ0aWFsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoZWNrfVxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VuX3BhcnRpYWxcIj5wYXJ0aWFsPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJzdW5fc2hhZGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hlY2t9XG4gICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdW5fc2hhZGVcIj5zaGFkZTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZWRSb3cgaW5kZW50ODAgY29sNVwiPlxuICAgICAgICA8ZGl2PkZvbGlhZ2U8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD1cImZvbGlhZ2VfZXZlcmdyZWVuXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoZWNrfVxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZm9saWFnZV9ldmVyZ3JlZW5cIj5ldmVyZ3JlZW48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBpZD1cImZvbGlhZ2Vfc2VtaWV2ZXJncmVlblwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGVja31cbiAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZvbGlhZ2Vfc2VtaWV2ZXJncmVlblwiPnNlbWktZXZlcmdyZWVuPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgaWQ9XCJmb2xpYWdlX2RlY2lkdW91c1wiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGVja31cbiAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZvbGlhZ2VfZGVjaWR1b3VzXCI+ZGVjaWR1b3VzPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgICBcbiAgICAgICAgIDxkaXY+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxzcGFuPjxsYWJlbCBodG1sRm9yPVwiem9uZVwiPjxoNSBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAgMCAwJyB9fT5VU0RBIEhhcmRpbmVzcyBab25lPC9oNT48L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ6b25lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS56b25lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgbWFyZ2luOiAnMCAxMHB4JyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nYW55Jz4tLWFueS0tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj4xPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj4zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj40PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj42PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj43PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj44PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj45PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj4xMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+MTE8L29wdGlvbj4gXG4gICAgICAgICAgICAgICAgPG9wdGlvbj4xMjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nYXJkZW4ub3JnL25nYS96aXB6b25lL1wiIHRhcmdldD1cIl9ibGFua1wiPjxoNiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgbWFyZ2luOiAnMCAxMHB4JyB9fT48dT5XaGF0J3MgTXkgVVNEQSBIYXJkaW5lc3MgWm9uZT88L3U+PC9oNj48L2E+PC9zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMjBweCAwIDAgMCcsIGRpc3BsYXk6ICdibG9jaycgfX0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhdGVnb3J5XCI+PGg1PkNhdGVnb3J5PC9oNT48L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jYXRlZ29yeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbnlcIj4tLWFueS0tPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmVybnNcIj5GZXJuczwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdyYXNzZXNcIj5HcmFzc2VzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3B1bnRpYVwiPk9wdW50aWE8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQYWxtc1wiPlBhbG1zPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUGVyZW5uaWFsc1wiPlBlcmVubmlhbHM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTZWVkc1wiPlNlZWRzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2hydWJzXCI+U2hydWJzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJlZXNcIj5UcmVlczwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZpbmVzXCI+VmluZXM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZdWNjYVwiPll1Y2NhPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgIDwvZGl2PiAgXG5cbiAgICAgICAgICA8YSBocmVmPVwiL3NlYXJjaFwiPjxidXR0b24gaWQ9XCJwbGFudEZpbmRcIj5GaW5kIE15IFBsYW50czwvYnV0dG9uPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNwYWNlZFJvdyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbmRlbnQwIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5kZW50MjAge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDIwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5kZW50NDAge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDQwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5kZW50NjAge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDYwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5kZW50ODAge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2wxIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgICAgLmNvbDUge1xuICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI3BsYW50RmluZCB7XG4gICAgICAgICAgICAgIHdpZHRoOjM4JTsgXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDsgXG4gICAgICAgICAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM2UzZTNlOyBcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnZ3O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcbiAgICAgICAgICAgICAgY29sb3I6ICMzZTNlM2U7IFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgIFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtdGl0bGUzLXNpemUpOyBcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtdGl0bGUzLWxpbmUtaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNwbGFudEZpbmQ6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogIzdkNjJiMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlO1xuIl19 */\n/*@ sourceURL=/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/sections/SearchPage.js */"));
    }
  }]);

  return SearchPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchPage);

/***/ }),

/***/ "./components/sections/Shipping.js":
/*!*****************************************!*\
  !*** ./components/sections/Shipping.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/sections/Shipping.js";



var Shipping =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Shipping, _Component);

  function Shipping() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Shipping);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Shipping)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "shipping", "document.getElementById('shipping')");

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onButton", "document.getElementById('onButton')");

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "offButton", "document.getElementById('offButton')");

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showShipping", function () {
      shipping.style.display = 'inherit';
      onButton.style.display = 'none';
      offButton.style.display = 'inline-block';
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "hideShipping", function () {
      shipping.style.display = 'none';
      document.getElementById('onButton').style.display = 'inline-block';
      document.getElementById('offButton').style.display = 'none';
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Shipping, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2336324882" + " " + 'wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        id: "onButton",
        onClick: this.showShipping,
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "See Shipping Costs"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        id: "offButton",
        onClick: this.hideShipping,
        style: {
          display: 'none'
        },
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Hide Shipping Costs"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "shipping",
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
        style: {
          width: "100%",
          textAlign: "center"
        },
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("u", {
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Total Shipping charges are Base Cost ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", {
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("u", {
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "plus")), " Fuel Surcharge")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
        className: "jsx-2336324882" + " " + 'tableHeader',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Boxes, Packaging and Shipping ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Base Costs")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          backgroundColor: '#c3c3c3'
        },
        className: "jsx-2336324882" + " " + 'row',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "$0 to $10"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "$10.01 to $25"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "$25.01 to $50"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "$50.01 to $75"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "$75.01 to $100"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "over $100")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2336324882" + " " + 'row',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "$15"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "$17"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "$19"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "$21"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "$23"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "28%")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
        className: "jsx-2336324882" + " " + 'tableHeader',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Fuel Surcharge Costs"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2336324882" + " " + 'row',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          backgroundColor: '#ff007f'
        },
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Zone 1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          backgroundColor: '#01ffff'
        },
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Zone 2"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          backgroundColor: '#ff7f02'
        },
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Zone 3"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          backgroundColor: '#00ff01'
        },
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Zone 4"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          backgroundColor: '#4e148c'
        },
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Zone 5"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          backgroundColor: '#1601ff'
        },
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Zone 6")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2336324882" + " " + 'row',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "base costs ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", {
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "plus")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "base costs ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", {
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "plus")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "base costs ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", {
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "plus")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "base costs ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", {
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "plus")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "base costs ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", {
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "plus")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "base costs ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", {
        className: "jsx-2336324882",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "plus"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2336324882" + " " + 'row',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "0"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "10%"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "20%"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "30%"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "40%"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2336324882" + " " + 'outlined6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "50%"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2336324882",
        __self: this
      }, ".wrapper.jsx-2336324882{width:90%;margin-left:5%;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;}.tableHeader.jsx-2336324882{text-align:center;margin:3vh 0 0 0;font-weight:bold;font-size:larger;}.row.jsx-2336324882{display:table-row;width:100%;margin:0 auto;}.outlined.jsx-2336324882{display:table-cell;border:1px solid #8a8a8a;text-align:center;font-size:1.5vw;box-sizing:border-box;padding:0 2.83vw;}.outlined6.jsx-2336324882{display:table-cell;border:1px solid #8a8a8a;text-align:center;font-size:1.5vw;box-sizing:border-box;padding:0 2vw;}button.jsx-2336324882{width:38%;text-align:center;padding:15px 0;margin:50px 0;border:1px solid #3e3e3e;border-radius:2vw;box-sizing:border-box;color:#3e3e3e;background-color:transparent;cursor:pointer;font-size:var(--font-title3-size);line-height:var(--font-title3-line-height);}#shipping.jsx-2336324882{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRoYW4vcHJvamVjdHMvbmF0aXZlbnVyc2VyeS9zYW5pdHktbmVhcmx5LW5hdGl2ZS1udXJzZXJ5L3dlYi9jb21wb25lbnRzL3NlY3Rpb25zL1NoaXBwaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFd0IsQUFHK0IsQUFPUSxBQU1BLEFBS0MsQUFRQSxBQVFWLEFBY0ksVUEvQ0UsQUFrQ0csR0FjdEIsS0F6Q3FCLEFBTU4sQ0FLYyxBQVFBLE1BekJQLEdBa0NILENBckJELE1BTkcsUUFOTSxBQWEzQixBQXFCa0IsQ0FqQkksQUFRQSxRQWxCRCxLQTRCUSxLQWpCVCxBQVFBLE9BbEJwQixTQVcwQixBQVFBLElBU0osa0JBaEJELEFBUUgsQUFTUSxjQVIxQixHQVJBLEtBaUJrQixjQUNlLE1BdENuQixVQUNkLGFBc0NtQixlQUNtQixrQ0FDUywyQ0FDL0MiLCJmaWxlIjoiL1VzZXJzL25hdGhhbi9wcm9qZWN0cy9uYXRpdmVudXJzZXJ5L3Nhbml0eS1uZWFybHktbmF0aXZlLW51cnNlcnkvd2ViL2NvbXBvbmVudHMvc2VjdGlvbnMvU2hpcHBpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIFNoaXBwaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHNoaXBwaW5nID0gXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcHBpbmcnKVwiO1xuICAgIG9uQnV0dG9uID0gXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb25CdXR0b24nKVwiO1xuICAgIG9mZkJ1dHRvbiA9IFwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29mZkJ1dHRvbicpXCI7XG5cbiAgICBzaG93U2hpcHBpbmcgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBwaW5nLnN0eWxlLmRpc3BsYXk9J2luaGVyaXQnO1xuICAgICAgICBvbkJ1dHRvbi5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICAgICAgb2ZmQnV0dG9uLnN0eWxlLmRpc3BsYXk9J2lubGluZS1ibG9jayc7XG4gICAgfVxuICAgIGhpZGVTaGlwcGluZyA9ICgpID0+IHtcbiAgICAgICAgc2hpcHBpbmcuc3R5bGUuZGlzcGxheT0nbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvbkJ1dHRvbicpLnN0eWxlLmRpc3BsYXk9J2lubGluZS1ibG9jayc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvZmZCdXR0b24nKS5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJvbkJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2hvd1NoaXBwaW5nfT5TZWUgU2hpcHBpbmcgQ29zdHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJvZmZCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmhpZGVTaGlwcGluZ30gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PkhpZGUgU2hpcHBpbmcgQ29zdHM8L2J1dHRvbj4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzaGlwcGluZ1wiPlxuICAgICAgICAgICAgPGg1IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+PHU+XG4gICAgICAgICAgICBUb3RhbCBTaGlwcGluZyBjaGFyZ2VzIGFyZSBCYXNlIENvc3QgPGVtPjx1PnBsdXM8L3U+PC9lbT4gRnVlbCBTdXJjaGFyZ2VcbiAgICAgICAgICAgIDwvdT48L2g1PlxuXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSd0YWJsZUhlYWRlcic+Qm94ZXMsIFBhY2thZ2luZyBhbmQgU2hpcHBpbmcgPHN0cm9uZz5CYXNlIENvc3RzPC9zdHJvbmc+PC9oNj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdycgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2MzYzNjMycgfX0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdXRsaW5lZCc+JDAgdG8gJDEwPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3V0bGluZWQnPiQxMC4wMSB0byAkMjU8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdXRsaW5lZCc+JDI1LjAxIHRvICQ1MDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J291dGxpbmVkJz4kNTAuMDEgdG8gJDc1PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3V0bGluZWQnPiQ3NS4wMSB0byAkMTAwPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3V0bGluZWQnPm92ZXIgJDEwMDwvcD4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J291dGxpbmVkJz4kMTU8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdXRsaW5lZCc+JDE3PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3V0bGluZWQnPiQxOTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J291dGxpbmVkJz4kMjE8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdXRsaW5lZCc+JDIzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3V0bGluZWQnPjI4JTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0ndGFibGVIZWFkZXInPkZ1ZWwgU3VyY2hhcmdlIENvc3RzPC9oNj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdXRsaW5lZDYnIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmZjAwN2YnIH19PlpvbmUgMTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J291dGxpbmVkNicgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzAxZmZmZicgfX0+Wm9uZSAyPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3V0bGluZWQ2JyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmY3ZjAyJyB9fT5ab25lIDM8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdXRsaW5lZDYnIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMwMGZmMDEnIH19PlpvbmUgNDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J291dGxpbmVkNicgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzRlMTQ4YycgfX0+Wm9uZSA1PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3V0bGluZWQ2JyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMTYwMWZmJyB9fT5ab25lIDY8L3A+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdXRsaW5lZDYnPmJhc2UgY29zdHMgPGVtPnBsdXM8L2VtPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J291dGxpbmVkNic+YmFzZSBjb3N0cyA8ZW0+cGx1czwvZW0+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3V0bGluZWQ2Jz5iYXNlIGNvc3RzIDxlbT5wbHVzPC9lbT48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdXRsaW5lZDYnPmJhc2UgY29zdHMgPGVtPnBsdXM8L2VtPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J291dGxpbmVkNic+YmFzZSBjb3N0cyA8ZW0+cGx1czwvZW0+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3V0bGluZWQ2Jz5iYXNlIGNvc3RzIDxlbT5wbHVzPC9lbT48L3A+XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J291dGxpbmVkNic+MDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J291dGxpbmVkNic+MTAlPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3V0bGluZWQ2Jz4yMCU8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdXRsaW5lZDYnPjMwJTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J291dGxpbmVkNic+NDAlPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3V0bGluZWQ2Jz41MCU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFibGVIZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM3ZoIDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm91dGxpbmVkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzhhOGE4YTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIuODN2dztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm91dGxpbmVkNiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YThhOGE7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjV2dztcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAydnc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjM4JTsgXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDsgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM2UzZTNlOyBcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnZ3O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzZTNlM2U7IFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgIFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtdGl0bGUzLXNpemUpOyBcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtdGl0bGUzLWxpbmUtaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3NoaXBwaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcHBpbmc7Il19 */\n/*@ sourceURL=/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/sections/Shipping.js */"));
    }
  }]);

  return Shipping;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Shipping);

/***/ }),

/***/ "./components/sections/SocialMedia.js":
/*!********************************************!*\
  !*** ./components/sections/SocialMedia.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SocialMedia_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SocialMedia.module.css */ "./components/sections/SocialMedia.module.css");
/* harmony import */ var _SocialMedia_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SocialMedia_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/sections/SocialMedia.js";





function SocialMedia(props) {
  var heading = props.heading,
      label = props.label,
      text = props.text;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4141188235" + " " + (_SocialMedia_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.root || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-4141188235" + " " + (_SocialMedia_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.article || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4141188235" + " " + (_SocialMedia_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-4141188235" + " " + (_SocialMedia_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.heading || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, heading), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.facebook.com/NearlyNativeNursery/",
    target: "blank",
    className: "jsx-4141188235",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042017/untitled-1_145.png?itok=UOdjYB6-",
    alt: "facebook",
    style: {
      float: 'left'
    },
    className: "jsx-4141188235",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.instagram.com/nearlynativenursery/",
    target: "blank",
    className: "jsx-4141188235",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052016/untitled-1_201.png?itok=xztgzGA4",
    alt: "instagram",
    style: {
      float: 'left'
    },
    className: "jsx-4141188235",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/NNativeNursery",
    target: "blank",
    className: "jsx-4141188235",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062012/twitter-bird-white-on-blue.png?itok=XLNMKkJn",
    alt: "twitter",
    className: "jsx-4141188235",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4141188235",
    __self: this
  }, "img.jsx-4141188235{width:23.33%;margin:0 5%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRoYW4vcHJvamVjdHMvbmF0aXZlbnVyc2VyeS9zYW5pdHktbmVhcmx5LW5hdGl2ZS1udXJzZXJ5L3dlYi9jb21wb25lbnRzL3NlY3Rpb25zL1NvY2lhbE1lZGlhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFHMEIsYUFDRCxZQUNoQiIsImZpbGUiOiIvVXNlcnMvbmF0aGFuL3Byb2plY3RzL25hdGl2ZW51cnNlcnkvc2FuaXR5LW5lYXJseS1uYXRpdmUtbnVyc2VyeS93ZWIvY29tcG9uZW50cy9zZWN0aW9ucy9Tb2NpYWxNZWRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Tb2NpYWxNZWRpYS5tb2R1bGUuY3NzJ1xuXG5mdW5jdGlvbiBTb2NpYWxNZWRpYSAocHJvcHMpIHtcbiAgY29uc3Qge2hlYWRpbmcsIGxhYmVsLCB0ZXh0fSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PntoZWFkaW5nfTwvaDI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vTmVhcmx5TmF0aXZlTnVyc2VyeS9cIiB0YXJnZXQ9XCJibGFua1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2QxeWpqbnB4MHA1M3M4LmNsb3VkZnJvbnQubmV0L3N0eWxlcy9sb2dvLXRodW1ibmFpbC9zMy8wNDIwMTcvdW50aXRsZWQtMV8xNDUucG5nP2l0b2s9VU9kallCNi1cIiBcbiAgICAgICAgICAgIGFsdD1cImZhY2Vib29rXCIgXG4gICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogJ2xlZnQnIH19PlxuICAgICAgICAgICAgPC9pbWc+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vbmVhcmx5bmF0aXZlbnVyc2VyeS9cIiB0YXJnZXQ9XCJibGFua1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2QxeWpqbnB4MHA1M3M4LmNsb3VkZnJvbnQubmV0L3N0eWxlcy9sb2dvLXRodW1ibmFpbC9zMy8wNTIwMTYvdW50aXRsZWQtMV8yMDEucG5nP2l0b2s9eHp0Z3pHQTRcIiBcbiAgICAgICAgICAgIGFsdD1cImluc3RhZ3JhbVwiIFxuICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JyB9fT5cbiAgICAgICAgICAgIDwvaW1nPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL05OYXRpdmVOdXJzZXJ5XCIgdGFyZ2V0PVwiYmxhbmtcIj5cbiAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2QxeWpqbnB4MHA1M3M4LmNsb3VkZnJvbnQubmV0L3N0eWxlcy9sb2dvLXRodW1ibmFpbC9zMy8wNjIwMTIvdHdpdHRlci1iaXJkLXdoaXRlLW9uLWJsdWUucG5nP2l0b2s9WExOTUtrSm5cIiBcbiAgICAgICAgICAgIGFsdD1cInR3aXR0ZXJcIj5cbiAgICAgICAgICAgIDwvaW1nPlxuICAgICAgICA8L2E+XG4gICAgICA8L3NlY3Rpb24+XG4gIFxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIzLjMzJTsgXG4gICAgICAgICAgICBtYXJnaW46IDAgNSU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblNvY2lhbE1lZGlhLnByb3BUeXBlcyA9IHtcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbE1lZGlhXG4iXX0= */\n/*@ sourceURL=/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/sections/SocialMedia.js */"));
}

SocialMedia.propTypes = {
  heading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

/***/ }),

/***/ "./components/sections/SocialMedia.module.css":
/*!****************************************************!*\
  !*** ./components/sections/SocialMedia.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "SocialMedia-module__root___1T68Z",
	"article": "SocialMedia-module__article___a_1Uj",
	"label": "SocialMedia-module__label___1JBy4",
	"heading": "SocialMedia-module__heading____lEfF"
};

/***/ }),

/***/ "./components/sections/TextSection.js":
/*!********************************************!*\
  !*** ./components/sections/TextSection.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SimpleBlockContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SimpleBlockContent */ "./components/SimpleBlockContent.js");
/* harmony import */ var _TextSection_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextSection.module.css */ "./components/sections/TextSection.module.css");
/* harmony import */ var _TextSection_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextSection_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/components/sections/TextSection.js";





function TextSection(props) {
  var heading = props.heading,
      label = props.label,
      text = props.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TextSection_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: _TextSection_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.article,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TextSection_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _TextSection_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, heading), text && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SimpleBlockContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    blocks: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
}

TextSection.propTypes = {
  heading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (TextSection);

/***/ }),

/***/ "./components/sections/TextSection.module.css":
/*!****************************************************!*\
  !*** ./components/sections/TextSection.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "TextSection-module__root___175SO",
	"article": "TextSection-module__article___ER3pL",
	"label": "TextSection-module__label___2Y2Kp",
	"heading": "TextSection-module__heading___45X3s"
};

/***/ }),

/***/ "./components/sections/index.js":
/*!**************************************!*\
  !*** ./components/sections/index.js ***!
  \**************************************/
/*! exports provided: Hero, Mailchimp, TextSection, ImageSection, ContactUs, SocialMedia, SearchPage, Shipping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ "./components/sections/Hero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _Hero__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Mailchimp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mailchimp */ "./components/sections/Mailchimp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mailchimp", function() { return _Mailchimp__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TextSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextSection */ "./components/sections/TextSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextSection", function() { return _TextSection__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ImageSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageSection */ "./components/sections/ImageSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageSection", function() { return _ImageSection__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ContactUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContactUs */ "./components/sections/ContactUs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return _ContactUs__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SocialMedia */ "./components/sections/SocialMedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialMedia", function() { return _SocialMedia__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _SearchPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchPage */ "./components/sections/SearchPage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return _SearchPage__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Shipping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shipping */ "./components/sections/Shipping.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shipping", function() { return _Shipping__WEBPACK_IMPORTED_MODULE_7__["default"]; });




 // export {default as ImageOnly} from './ImageOnly'






/***/ }),

/***/ "./components/serializers.js":
/*!***********************************!*\
  !*** ./components/serializers.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmbedHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmbedHTML */ "./components/EmbedHTML.js");

var serializers = {
  types: {
    embedHTML: _EmbedHTML__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (serializers);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/LandingPage.js":
/*!******************************!*\
  !*** ./pages/LandingPage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! groq */ "groq");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_RenderSections__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/RenderSections */ "./components/RenderSections.js");










var _jsxFileName = "/Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/pages/LandingPage.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n        *[_id == \"global-config\"][0]{\n          frontpage -> {\n            ...,\n            content[] {\n              ...,\n              cta {\n                ...,\n                route->\n              },\n              ctas[] {\n                ...,\n                route->\n              }\n            }\n          }\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n*[_type == \"route\" && slug.current == $slug][0]{\n  page-> {\n    ...,\n    content[] {\n      ...,\n      cta {\n        ...,\n        route->\n      },\n      ctas[] {\n        ...,\n        route->\n      }\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_14___default()(_client__WEBPACK_IMPORTED_MODULE_16___default.a);
var pageQuery = groq__WEBPACK_IMPORTED_MODULE_13___default()(_templateObject());

var LandingPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(LandingPage, _Component);

  function LandingPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, LandingPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(LandingPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(LandingPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? 'Missing title' : _this$props$title,
          description = _this$props.description,
          disallowRobots = _this$props.disallowRobots,
          openGraphImage = _this$props.openGraphImage,
          _this$props$content = _this$props.content,
          content = _this$props$content === void 0 ? [] : _this$props$content,
          _this$props$config = _this$props.config,
          config = _this$props$config === void 0 ? {} : _this$props$config,
          slug = _this$props.slug;
      var openGraphImages = openGraphImage ? [{
        url: builder.image(openGraphImage).width(800).height(600).url(),
        width: 800,
        height: 600,
        alt: title
      }, {
        // Facebook recommended size
        url: builder.image(openGraphImage).width(1200).height(630).url(),
        width: 1200,
        height: 630,
        alt: title
      }, {
        // Square 1:1
        url: builder.image(openGraphImage).width(600).height(600).url(),
        width: 600,
        height: 600,
        alt: title
      }] : [];
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_15__["default"], {
        config: config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_12___default.a, {
        config: {
          title: title,
          titleTemplate: "".concat(config.title, " | %s"),
          description: description,
          canonical: config.url && "".concat(config.url, "/").concat(slug),
          openGraph: {
            images: openGraphImages
          },
          noindex: disallowRobots
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), content && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_RenderSections__WEBPACK_IMPORTED_MODULE_17__["default"], {
        sections: content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, slug;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                slug = query.slug;

                if (query) {
                  _context.next = 5;
                  break;
                }

                console.error('no query');
                return _context.abrupt("return");

              case 5:
                if (!(slug && slug !== '/')) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", _client__WEBPACK_IMPORTED_MODULE_16___default.a.fetch(pageQuery, {
                  slug: slug
                }).then(function (res) {
                  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, res.page, {
                    slug: slug
                  });
                }));

              case 7:
                if (!(slug && slug === '/')) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", _client__WEBPACK_IMPORTED_MODULE_16___default.a.fetch(groq__WEBPACK_IMPORTED_MODULE_13___default()(_templateObject2())).then(function (res) {
                  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, res.frontpage, {
                    slug: slug
                  });
                }));

              case 9:
                return _context.abrupt("return", null);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return LandingPage;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(LandingPage, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  // TODO: improve types
  disallowRobots: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any,
  openGraphImage: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any,
  content: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any,
  config: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any,
  slug: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any
});

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "./styles/shared.module.css":
/*!**********************************!*\
  !*** ./styles/shared.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"center": "shared-module__center___1SLHm",
	"container": "shared-module__container___j_wCJ",
	"normal-container": "shared-module__normal-container___1vW6X shared-module__container___j_wCJ",
	"narrow-container": "shared-module__narrow-container___1Q38q shared-module__container___j_wCJ"
};

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/LandingPage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nathan/projects/nativenursery/sanity-nearly-native-nursery/web/pages/LandingPage.js */"./pages/LandingPage.js");


/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("groq");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-inlinesvg":
/*!**********************************!*\
  !*** external "react-inlinesvg" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-inlinesvg");

/***/ }),

/***/ "react-mailchimp-form":
/*!***************************************!*\
  !*** external "react-mailchimp-form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-form");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=LandingPage.js.map