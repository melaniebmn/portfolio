/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _routes = __webpack_require__(7);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.use((0, _compression2.default)());

	app.use(_express2.default.static(_path2.default.join(__dirname, 'public'), { index: false }));

	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    if (err) {
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n      <meta charset="UTF-8">\n      <title>Portfolio | Melanie Bockmann Test</title>\n      <meta name="description" content="Hey, my name is Melanie, I\'m a Front-End Developer based in Vancouver, BC. This porfolio sites showcases some of my work." />\n      <meta name="keywords" content="melanie bockmann, front-end developer, web development vancouver, front-end vancouver, frontend vancouver" />\n\n      <meta name="viewport" content="width=device-width, initial-scale=1">\n      <link rel="stylesheet" type="text/css" href="assets/css/style.css">\n      <link rel="stylesheet" type="text/css" href="style.css">\n      \n      <div id=app>' + appHtml + '</div>\n      <script src="bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _About = __webpack_require__(8);

	var _About2 = _interopRequireDefault(_About);

	var _Home = __webpack_require__(18);

	var _Home2 = _interopRequireDefault(_Home);

	var _Layout = __webpack_require__(26);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Project = __webpack_require__(48);

	var _Project2 = _interopRequireDefault(_Project);

	var _Project3 = __webpack_require__(58);

	var _Project4 = _interopRequireDefault(_Project3);

	var _Work = __webpack_require__(42);

	var _Work2 = _interopRequireDefault(_Work);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _Layout2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'about', name: 'about', component: _About2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'project1', name: 'project1', component: _Project2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'project2', name: 'project2', component: _Project4.default }),
		_react2.default.createElement(_reactRouter.Route, { path: 'work', name: 'work', component: _Work2.default })
	);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _About = __webpack_require__(9);

	var _About2 = _interopRequireDefault(_About);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _AboutText = __webpack_require__(10);

	var _AboutText2 = _interopRequireDefault(_AboutText);

	var _btnWork = __webpack_require__(12);

	var _btnWork2 = _interopRequireDefault(_btnWork);

	var _Description = __webpack_require__(14);

	var _Description2 = _interopRequireDefault(_Description);

	var _Heading = __webpack_require__(16);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var About = function (_React$Component) {
		_inherits(About, _React$Component);

		function About() {
			_classCallCheck(this, About);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(About).apply(this, arguments));
		}

		_createClass(About, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'main',
					{ className: _About2.default.about },
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(_Heading2.default, { capitalLetter: 'h', heading: 'ey' }),
						_react2.default.createElement(_AboutText2.default, null)
					),
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(_Description2.default, { text: 'I\'m currently available for fulltime work. If you are looking for an enthusiastic addition to your team, send me a message and I\'ll get back to you as soon as possible.' })
					),
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(_Heading2.default, { capitalLetter: 'm', heading: 'ountain of experience' }),
						_react2.default.createElement('img', { src: 'assets/img/skillset.png', alt: 'Skillset' })
					),
					_react2.default.createElement(_btnWork2.default, null)
				);
			}
		}]);

		return About;
	}(_react2.default.Component);

	exports.default = About;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"about":"About__about___10pTh"};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _aboutText = __webpack_require__(11);

	var _aboutText2 = _interopRequireDefault(_aboutText);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutText = function (_React$Component) {
		_inherits(AboutText, _React$Component);

		function AboutText() {
			_classCallCheck(this, AboutText);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(AboutText).apply(this, arguments));
		}

		_createClass(AboutText, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'ul',
					{ className: _aboutText2.default.aboutText },
					_react2.default.createElement(
						'li',
						null,
						'I love being challenged and learning new things.'
					),
					_react2.default.createElement(
						'li',
						null,
						'My name is Melanie,',
						_react2.default.createElement('br', null),
						'I am a Front-End Developer based in Vancouver, BC.'
					),
					_react2.default.createElement(
						'li',
						null,
						'I have over 2 years of web development experience.'
					)
				);
			}
		}]);

		return AboutText;
	}(_react2.default.Component);

	exports.default = AboutText;

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"aboutText":"aboutText__aboutText___1QIXm"};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _btnWork = __webpack_require__(13);

	var _btnWork2 = _interopRequireDefault(_btnWork);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var btnWork = function (_React$Component) {
		_inherits(btnWork, _React$Component);

		function btnWork() {
			_classCallCheck(this, btnWork);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(btnWork).apply(this, arguments));
		}

		_createClass(btnWork, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'address',
					{ className: _btnWork2.default.btnWork },
					_react2.default.createElement(
						'a',
						{ href: 'mailto:melanie.bockmann@yahoo.com' },
						'Work with me'
					)
				);
			}
		}]);

		return btnWork;
	}(_react2.default.Component);

	exports.default = btnWork;

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"btnWork":"btnWork__btnWork___e2X4C"};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Description = __webpack_require__(15);

	var _Description2 = _interopRequireDefault(_Description);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Description = function (_React$Component) {
		_inherits(Description, _React$Component);

		function Description() {
			_classCallCheck(this, Description);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Description).apply(this, arguments));
		}

		_createClass(Description, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'article',
					{ className: _Description2.default.description },
					_react2.default.createElement(
						'p',
						null,
						this.props.text
					)
				);
			}
		}]);

		return Description;
	}(_react2.default.Component);

	exports.default = Description;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"description":"Description__description___1Kyvp"};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Heading = __webpack_require__(17);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Heading = function (_React$Component) {
		_inherits(Heading, _React$Component);

		function Heading() {
			_classCallCheck(this, Heading);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Heading).apply(this, arguments));
		}

		_createClass(Heading, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'h2',
					{ className: _Heading2.default.heading },
					_react2.default.createElement(
						'strong',
						null,
						this.props.capitalLetter
					),
					this.props.heading
				);
			}
		}]);

		return Heading;
	}(_react2.default.Component);

	exports.default = Heading;

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"heading":"Heading__heading___3GmR5"};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Home = __webpack_require__(19);

	var _Home2 = _interopRequireDefault(_Home);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Btn = __webpack_require__(20);

	var _Btn2 = _interopRequireDefault(_Btn);

	var _Description = __webpack_require__(14);

	var _Description2 = _interopRequireDefault(_Description);

	var _DotsAnimation = __webpack_require__(22);

	var _DotsAnimation2 = _interopRequireDefault(_DotsAnimation);

	var _Heading = __webpack_require__(16);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _TriangleList = __webpack_require__(24);

	var _TriangleList2 = _interopRequireDefault(_TriangleList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
		_inherits(Home, _React$Component);

		function Home() {
			_classCallCheck(this, Home);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
		}

		_createClass(Home, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'main',
					{ className: _Home2.default.home },
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(_Heading2.default, { capitalLetter: 'h', heading: 'ey' }),
							_react2.default.createElement(_Description2.default, { text: 'My name is Melanie, I\'m a Front-End Developer in Vancouver.' })
						)
					),
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(_Heading2.default, { capitalLetter: 'w', heading: 'ork' }),
							_react2.default.createElement(_TriangleList2.default, null),
							_react2.default.createElement(_Btn2.default, { width: '125', height: '45', link: '/work', btnLabel: 'View Work' })
						)
					),
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(_DotsAnimation2.default, null),
							_react2.default.createElement(_Heading2.default, { capitalLetter: 'a', heading: 'bout' }),
							_react2.default.createElement(_Description2.default, { text: 'I\'m currently available for fulltime work. If you are looking for an enthusiastic addition to your team, take a look at my work or send me a message and I\'ll get back to you as soon as possible.' }),
							_react2.default.createElement(_Btn2.default, { width: '125', height: '45', link: '/about', btnLabel: 'View About' })
						)
					)
				);
			}
		}]);

		return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"home":"Home__home___1eg0Z"};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Btn = __webpack_require__(21);

	var _Btn2 = _interopRequireDefault(_Btn);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Btn = function (_React$Component) {
		_inherits(Btn, _React$Component);

		function Btn() {
			_classCallCheck(this, Btn);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Btn).apply(this, arguments));
		}

		_createClass(Btn, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'h4',
					{ className: _Btn2.default.btn },
					_react2.default.createElement(
						'svg',
						_extends({ xmlns: 'http://www.w3.org/2000/svg' }, this.props),
						_react2.default.createElement('rect', { width: '100%', height: '100%' })
					),
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: this.props.link },
						this.props.btnLabel
					)
				);
			}
		}]);

		return Btn;
	}(_react2.default.Component);

	exports.default = Btn;

	var BtnLink = function (_React$Component2) {
		_inherits(BtnLink, _React$Component2);

		function BtnLink() {
			_classCallCheck(this, BtnLink);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(BtnLink).apply(this, arguments));
		}

		_createClass(BtnLink, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'h4',
					{ className: _Btn2.default.btn },
					_react2.default.createElement(
						'svg',
						_extends({ xmlns: 'http://www.w3.org/2000/svg' }, this.props),
						_react2.default.createElement('rect', { width: '100%', height: '100%' })
					),
					_react2.default.createElement(
						'a',
						{ href: this.props.link, target: this.props.target },
						this.props.btnLabel
					)
				);
			}
		}]);

		return BtnLink;
	}(_react2.default.Component);

	exports.default = BtnLink;

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"btn":"Btn__btn___2bmiJ"};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DotsAnimation = __webpack_require__(23);

	var _DotsAnimation2 = _interopRequireDefault(_DotsAnimation);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DotsAnimation = function (_React$Component) {
		_inherits(DotsAnimation, _React$Component);

		function DotsAnimation() {
			_classCallCheck(this, DotsAnimation);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(DotsAnimation).apply(this, arguments));
		}

		_createClass(DotsAnimation, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'svg',
					{ className: _DotsAnimation2.default.dotsAnimation, xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', viewBox: '0 0 1151.1 631.9' },
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '136', cy: '193.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '389', cy: '109.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '729', cy: '504.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '925', cy: '448.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1047', cy: '339.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1052', cy: '210.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '958.1', cy: '109.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '746.6', cy: '119.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '614.6', cy: '65', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '251.6', cy: '87.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '154.1', cy: '339.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '245.6', cy: '435.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '407.6', cy: '492.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '571.1', cy: '534.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '797.6', cy: '429.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1039.1', cy: '434.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '963.1', cy: '339.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '958.1', cy: '236', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1075.1', cy: '97.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '868.1', cy: '138.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '818.6', cy: '70', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '548.6', cy: '138.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '473.6', cy: '59', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '251.6', cy: '162.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '136', cy: '119.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '95.6', cy: '273.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '154.1', cy: '458.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '223.1', cy: '273.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '308.6', cy: '514.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '473.6', cy: '544.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '614.6', cy: '463.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '674.6', cy: '579.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '845.6', cy: '539.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '349.1', cy: '589.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '95.6', cy: '435.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '533.6', cy: '599.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '311.1', cy: '100', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '184.6', cy: '218', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '189.6', cy: '136', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '85.6', cy: '342.4', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '161.6', cy: '412', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '225.6', cy: '517.4', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '396.5', cy: '552', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '617.1', cy: '587', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '640.6', cy: '532', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '775.6', cy: '577', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '826.1', cy: '471.4', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '932.5', cy: '517.4', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '978.1', cy: '412', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1017.1', cy: '290.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '993.1', cy: '165', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '875.6', cy: '77.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '702.1', cy: '77.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '546.1', cy: '95', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '439.6', cy: '141', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '363.1', cy: '47.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '878.1', cy: '388', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '502.6', cy: '490', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '306.1', cy: '456.4', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '230.6', cy: '337.4', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '643.1', cy: '127.4', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1114.6', cy: '213', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '60.1', cy: '201.4', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '200.6', cy: '389', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '152.6', cy: '523.4', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '269.6', cy: '578', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '454.1', cy: '608', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '703.1', cy: '457.4', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '796.1', cy: '526.9', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '996.6', cy: '491', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1083.6', cy: '391.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1087.1', cy: '277', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1078.6', cy: '153.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '923.5', cy: '171', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '936', cy: '51', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '737.5', cy: '39.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '806.1', cy: '118.4', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '549.6', cy: '39.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '477.1', cy: '108.4', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '334.1', cy: '142', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '307.1', cy: '62.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '234.1', cy: '219', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '29.6', cy: '294', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '159.6', cy: '291.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '428.6', cy: '24.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1120.6', cy: '329', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '665.6', cy: '17', r: '3.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '171.6', cy: '178.5', r: '7.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '194.6', cy: '461.4', r: '7.5' }),
					_react2.default.createElement('circle', { opacity: '0.7', fill: 'none', stroke: '#FFFFFF', cx: '338.1', cy: '542', r: '7.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '591.6', cy: '500', r: '7.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '870.6', cy: '500', r: '7.5' }),
					_react2.default.createElement('circle', { opacity: '0.8', fill: 'none', stroke: '#FFFFFF', cx: '81.6', cy: '305', r: '7.5' }),
					_react2.default.createElement('circle', { opacity: '0.8', fill: 'none', stroke: '#FFFFFF', cx: '406.5', cy: '71.5', r: '7.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '1007.6', cy: '213', r: '7.5' }),
					_react2.default.createElement('circle', { opacity: '0.8', fill: 'none', stroke: '#FFFFFF', cx: '1007.6', cy: '87.5', r: '7.5' }),
					_react2.default.createElement('circle', { opacity: '0.8', fill: 'none', stroke: '#FFFFFF', cx: '1027.1', cy: '375', r: '7.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '650.6', cy: '87.5', r: '7.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '488.1', cy: '597', r: '7.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '1131.6', cy: '269.4', r: '7.5' }),
					_react2.default.createElement('circle', { opacity: '0.8', fill: 'none', stroke: '#FFFFFF', cx: '741.5', cy: '547', r: '7.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '853.1', cy: '35.5', r: '7.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '278.6', cy: '122.4', r: '12.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '176.6', cy: '317.5', r: '12.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '214.6', cy: '529.9', r: '12.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '454.6', cy: '497.5', r: '12.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '650.6', cy: '567', r: '12.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '788.1', cy: '466.4', r: '12.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '990.6', cy: '447', r: '12.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '1003.1', cy: '289.5', r: '12.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '920.6', cy: '112.5', r: '12.5' }),
					_react2.default.createElement('circle', { fill: 'none', stroke: '#FFFFFF', cx: '515.1', cy: '112.5', r: '12.5' }),
					_react2.default.createElement('circle', { opacity: '0.7', fill: 'none', stroke: '#FFFFFF', cx: '712.1', cy: '48', r: '12.5' }),
					_react2.default.createElement('circle', { opacity: '0.5', fill: 'none', stroke: '#FFFFFF', cx: '298.6', cy: '107.5', r: '20' }),
					_react2.default.createElement('circle', { opacity: '0.5', fill: 'none', stroke: '#FFFFFF', cx: '196.6', cy: '359.9', r: '20' }),
					_react2.default.createElement('circle', { opacity: '0.5', fill: 'none', stroke: '#FFFFFF', cx: '271.6', cy: '534.9', r: '20' }),
					_react2.default.createElement('circle', { opacity: '0.5', fill: 'none', stroke: '#FFFFFF', cx: '452.1', cy: '512.5', r: '20' }),
					_react2.default.createElement('circle', { opacity: '0.5', fill: 'none', stroke: '#FFFFFF', cx: '658.1', cy: '552', r: '20' }),
					_react2.default.createElement('circle', { opacity: '0.5', fill: 'none', stroke: '#FFFFFF', cx: '749', cy: '483.9', r: '20' }),
					_react2.default.createElement('circle', { opacity: '0.5', fill: 'none', stroke: '#FFFFFF', cx: '928.1', cy: '491.4', r: '20' }),
					_react2.default.createElement('circle', { opacity: '0.5', fill: 'none', stroke: '#FFFFFF', cx: '1000.6', cy: '315', r: '20' }),
					_react2.default.createElement('circle', { opacity: '0.5', fill: 'none', stroke: '#FFFFFF', cx: '1047.1', cy: '182.5', r: '20' }),
					_react2.default.createElement('circle', { opacity: '0.5', fill: 'none', stroke: '#FFFFFF', cx: '895.6', cy: '100', r: '20' }),
					_react2.default.createElement('circle', { opacity: '0.5', fill: 'none', stroke: '#FFFFFF', cx: '596.5', cy: '104.9', r: '20' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '112.1', cy: '372.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '858.1', cy: '435.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '935', cy: '384.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1019.6', cy: '138.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '679.6', cy: '119.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '339.1', cy: '82.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '159.1', cy: '246', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '245.6', cy: '505', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '655.6', cy: '499.5', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1025.6', cy: '266.9', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '742.5', cy: '75', r: '5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '432.1', cy: '570.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '579.5', cy: '570.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '518.6', cy: '526.9', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '829.6', cy: '503.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '892.1', cy: '469.9', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '999.1', cy: '376', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1094.1', cy: '348.4', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1082.1', cy: '239.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '961.6', cy: '197.4', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '844.1', cy: '96', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '600', cy: '138.4', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '522.1', cy: '69.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '66.1', cy: '246.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '120.6', cy: '398.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '226.6', cy: '125.4', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '443.1', cy: '96', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '366.6', cy: '518.4', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '406.1', cy: '600.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '532.1', cy: '558.4', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '710.1', cy: '538.4', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1047.6', cy: '305.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '595.1', cy: '96', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '791.6', cy: '46.5', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '94.1', cy: '214', r: '3.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '114.6', cy: '311.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '62.6', cy: '397.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '179.1', cy: '497', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '203.1', cy: '437', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '259.1', cy: '473.9', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '346.6', cy: '492.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '316.1', cy: '574.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '601.6', cy: '549.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '551.1', cy: '502.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '714.6', cy: '574.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '754.1', cy: '456.4', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '898.1', cy: '427', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '960.6', cy: '456.4', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1010.1', cy: '417', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '1086.1', cy: '308', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '970.6', cy: '283', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '960.6', cy: '160', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '965.6', cy: '65', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '775.6', cy: '95', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '217.1', cy: '181', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '119.6', cy: '152.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '194.6', cy: '102.5', r: '2.5' }),
					_react2.default.createElement('circle', { fill: '#C2241F', cx: '316.1', cy: '30.5', r: '2.5' })
				);
			}
		}]);

		return DotsAnimation;
	}(_react2.default.Component);

	exports.default = DotsAnimation;

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"dotsAnimation":"DotsAnimation__dotsAnimation___3GqBv"};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _TriangleList = __webpack_require__(25);

	var _TriangleList2 = _interopRequireDefault(_TriangleList);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var triangleList = function (_React$Component) {
		_inherits(triangleList, _React$Component);

		function triangleList() {
			_classCallCheck(this, triangleList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(triangleList).apply(this, arguments));
		}

		_createClass(triangleList, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'ul',
					{ className: _TriangleList2.default.triangleList },
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ href: '/project1' },
							_react2.default.createElement('img', { src: 'assets/img-loaders/project1-triangles.png' }),
							_react2.default.createElement(
								'h3',
								null,
								'View Project 1'
							)
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ href: '/project2' },
							_react2.default.createElement('img', { src: 'assets/img-loaders/project2-triangles.png' }),
							_react2.default.createElement(
								'h3',
								null,
								'View Project 2'
							)
						)
					)
				);
			}
		}]);

		return triangleList;
	}(_react2.default.Component);

	exports.default = triangleList;

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"triangleList":"TriangleList__triangleList___WwsC8"};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _Footer = __webpack_require__(27);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Header = __webpack_require__(33);

	var _Header2 = _interopRequireDefault(_Header);

	var _Work = __webpack_require__(42);

	var _Work2 = _interopRequireDefault(_Work);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Layout = function (_React$Component) {
		_inherits(Layout, _React$Component);

		function Layout() {
			_classCallCheck(this, Layout);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));
		}

		_createClass(Layout, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_Header2.default, null),
					this.props.children,
					_react2.default.createElement(_Footer2.default, null)
				);
			}
		}]);

		return Layout;
	}(_react2.default.Component);

	exports.default = Layout;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Footer = __webpack_require__(28);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _ContactList = __webpack_require__(29);

	var _ContactList2 = _interopRequireDefault(_ContactList);

	var _Copyright = __webpack_require__(31);

	var _Copyright2 = _interopRequireDefault(_Copyright);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Footer = function (_React$Component) {
		_inherits(Footer, _React$Component);

		function Footer() {
			_classCallCheck(this, Footer);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
		}

		_createClass(Footer, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'footer',
					{ className: _Footer2.default.footer },
					_react2.default.createElement(_ContactList2.default, null),
					_react2.default.createElement(_Copyright2.default, null)
				);
			}
		}]);

		return Footer;
	}(_react2.default.Component);

	exports.default = Footer;

/***/ },
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"footer":"Footer__footer___p8Mlr"};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Contactlist = __webpack_require__(30);

	var _Contactlist2 = _interopRequireDefault(_Contactlist);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Heading = __webpack_require__(16);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContactList = function (_React$Component) {
		_inherits(ContactList, _React$Component);

		function ContactList() {
			_classCallCheck(this, ContactList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ContactList).apply(this, arguments));
		}

		_createClass(ContactList, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'ul',
					{ className: _Contactlist2.default.contactlist },
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(_Heading2.default, { capitalLetter: 'c', heading: 'ontact' })
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'p',
							null,
							'Email'
						),
						_react2.default.createElement(
							'a',
							{ href: 'mailto:melanie.bockmann@yahoo.com' },
							'melanie.bockmann',
							_react2.default.createElement('wbr', null),
							'@yahoo.com'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'p',
								null,
								'Linkedin',
								_react2.default.createElement('br', null),
								'Profile'
							),
							_react2.default.createElement(
								'a',
								{ href: '//www.linkedin.com/in/melanie-bockmann-98701078', target: '_blank' },
								'in'
							)
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'p',
								null,
								'Github',
								_react2.default.createElement('br', null),
								'Account'
							),
							_react2.default.createElement(
								'a',
								{ href: '//github.com/melaniebmn', target: '_blank' },
								_react2.default.createElement('img', { src: '/assets/img/github-icon-black.png' })
							)
						)
					)
				);
			}
		}]);

		return ContactList;
	}(_react2.default.Component);

	exports.default = ContactList;

/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"contactlist":"Contactlist__contactlist___2zamR"};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Copyright = __webpack_require__(32);

	var _Copyright2 = _interopRequireDefault(_Copyright);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Copyright = function (_React$Component) {
		_inherits(Copyright, _React$Component);

		function Copyright() {
			_classCallCheck(this, Copyright);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Copyright).apply(this, arguments));
		}

		_createClass(Copyright, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'p',
					{ className: _Copyright2.default.copyright },
					'Copyright 2016 - Melanie Bockmann'
				);
			}
		}]);

		return Copyright;
	}(_react2.default.Component);

	exports.default = Copyright;

/***/ },
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"copyright":"Copyright__copyright___UiYaD"};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Header = __webpack_require__(34);

	var _Header2 = _interopRequireDefault(_Header);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _Logo = __webpack_require__(35);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _Navigation = __webpack_require__(37);

	var _Navigation2 = _interopRequireDefault(_Navigation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
		_inherits(Header, _React$Component);

		function Header() {
			_classCallCheck(this, Header);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
		}

		_createClass(Header, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'header',
					{ className: _Header2.default.header },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_Logo2.default, null),
						_react2.default.createElement(_Navigation2.default, null)
					)
				);
			}
		}]);

		return Header;
	}(_react2.default.Component);

	exports.default = Header;

/***/ },
/* 34 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"header":"Header__header___wIF4G"};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Logo = __webpack_require__(36);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Logo = function (_React$Component) {
		_inherits(Logo, _React$Component);

		function Logo() {
			_classCallCheck(this, Logo);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Logo).apply(this, arguments));
		}

		_createClass(Logo, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'h1',
					{ className: _Logo2.default.logo },
					_react2.default.createElement(
						'a',
						{ href: '/' },
						'Melanie Bockmann'
					)
				);
			}
		}]);

		return Logo;
	}(_react2.default.Component);

	exports.default = Logo;

/***/ },
/* 36 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"logo":"Logo__logo___20AFc"};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Navigation = __webpack_require__(38);

	var _Navigation2 = _interopRequireDefault(_Navigation);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _MenuBtn = __webpack_require__(39);

	var _MenuBtn2 = _interopRequireDefault(_MenuBtn);

	var _NavLink = __webpack_require__(41);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Navigation = function (_React$Component) {
		_inherits(Navigation, _React$Component);

		function Navigation() {
			_classCallCheck(this, Navigation);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Navigation).apply(this, arguments));
		}

		_createClass(Navigation, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'nav',
					{ className: _Navigation2.default.navigation },
					_react2.default.createElement(_MenuBtn2.default, null),
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_NavLink2.default,
								{ to: { pathname: 'work' } },
								'Work'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_NavLink2.default,
								{ to: { pathname: 'about' } },
								'About'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: 'mailto:melanie.bockmann@yahoo.com' },
								'Contact'
							)
						)
					)
				);
			}
		}]);

		return Navigation;
	}(_react2.default.Component);

	exports.default = Navigation;

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"navigation":"Navigation__navigation___2_8kQ","active":"Navigation__active___1w8qs"};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _MenuBtn = __webpack_require__(40);

	var _MenuBtn2 = _interopRequireDefault(_MenuBtn);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuBtn = function (_React$Component) {
		_inherits(MenuBtn, _React$Component);

		function MenuBtn() {
			_classCallCheck(this, MenuBtn);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(MenuBtn).apply(this, arguments));
		}

		_createClass(MenuBtn, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'button',
					{ className: _MenuBtn2.default.menuBtn },
					_react2.default.createElement('span', null)
				);
			}
		}]);

		return MenuBtn;
	}(_react2.default.Component);

	exports.default = MenuBtn;

/***/ },
/* 40 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"menuBtn":"MenuBtn__menuBtn___36ybM"};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavLink = function (_React$Component) {
		_inherits(NavLink, _React$Component);

		function NavLink() {
			_classCallCheck(this, NavLink);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(NavLink).apply(this, arguments));
		}

		_createClass(NavLink, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
			}
		}]);

		return NavLink;
	}(_react2.default.Component);

	exports.default = NavLink;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Work = __webpack_require__(43);

	var _Work2 = _interopRequireDefault(_Work);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _btnWork = __webpack_require__(12);

	var _btnWork2 = _interopRequireDefault(_btnWork);

	var _Description = __webpack_require__(14);

	var _Description2 = _interopRequireDefault(_Description);

	var _Heading = __webpack_require__(16);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _ProjectList = __webpack_require__(44);

	var _ProjectList2 = _interopRequireDefault(_ProjectList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Work = function (_React$Component) {
		_inherits(Work, _React$Component);

		function Work() {
			_classCallCheck(this, Work);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Work).apply(this, arguments));
		}

		_createClass(Work, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'main',
					{ className: _Work2.default.work },
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(_Heading2.default, { capitalLetter: 'w', heading: 'ork' }),
						_react2.default.createElement(_Description2.default, { text: 'Here is a selection of some of my latest work. If you like to see more, just let me know.' })
					),
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(_ProjectList2.default, null)
					),
					_react2.default.createElement(_btnWork2.default, null)
				);
			}
		}]);

		return Work;
	}(_react2.default.Component);

	exports.default = Work;

/***/ },
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"work":"Work__work___GuMmi"};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ProjectList = __webpack_require__(45);

	var _ProjectList2 = _interopRequireDefault(_ProjectList);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _ProjectListBtn = __webpack_require__(46);

	var _ProjectListBtn2 = _interopRequireDefault(_ProjectListBtn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProjectList = function (_React$Component) {
		_inherits(ProjectList, _React$Component);

		function ProjectList() {
			_classCallCheck(this, ProjectList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ProjectList).apply(this, arguments));
		}

		_createClass(ProjectList, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'ul',
					{ className: _ProjectList2.default.projectList },
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(_ProjectListBtn2.default, { projectName: 'Peak Trails', link: '/project1' })
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(_ProjectListBtn2.default, { projectName: 'Said the whale', link: '/project2' })
					)
				);
			}
		}]);

		return ProjectList;
	}(_react2.default.Component);

	exports.default = ProjectList;

/***/ },
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"projectList":"ProjectList__projectList___36SNf"};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ProjectListBtn = __webpack_require__(47);

	var _ProjectListBtn2 = _interopRequireDefault(_ProjectListBtn);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Btn = __webpack_require__(20);

	var _Btn2 = _interopRequireDefault(_Btn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProjectListBtn = function (_React$Component) {
		_inherits(ProjectListBtn, _React$Component);

		function ProjectListBtn() {
			_classCallCheck(this, ProjectListBtn);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ProjectListBtn).apply(this, arguments));
		}

		_createClass(ProjectListBtn, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: _ProjectListBtn2.default.projectListBtn },
					_react2.default.createElement(
						'h3',
						null,
						this.props.projectName
					),
					_react2.default.createElement(_Btn2.default, { width: '120', height: '30', link: this.props.link, btnLabel: 'View Project' })
				);
			}
		}]);

		return ProjectListBtn;
	}(_react2.default.Component);

	exports.default = ProjectListBtn;

/***/ },
/* 47 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"projectListBtn":"ProjectListBtn__projectListBtn___160sR"};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Project = __webpack_require__(49);

	var _Project2 = _interopRequireDefault(_Project);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Btn = __webpack_require__(20);

	var _Btn2 = _interopRequireDefault(_Btn);

	var _btnWork = __webpack_require__(12);

	var _btnWork2 = _interopRequireDefault(_btnWork);

	var _Heading = __webpack_require__(16);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Mockups = __webpack_require__(50);

	var _Mockups2 = _interopRequireDefault(_Mockups);

	var _PrevNextBtns = __webpack_require__(52);

	var _PrevNextBtns2 = _interopRequireDefault(_PrevNextBtns);

	var _ProjectInfo = __webpack_require__(54);

	var _ProjectInfo2 = _interopRequireDefault(_ProjectInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Project1 = function (_React$Component) {
		_inherits(Project1, _React$Component);

		function Project1() {
			_classCallCheck(this, Project1);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Project1).apply(this, arguments));
		}

		_createClass(Project1, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'main',
					{ className: _Project2.default.project },
					_react2.default.createElement(
						'header',
						null,
						_react2.default.createElement(_Heading2.default, { capitalLetter: 'p', heading: 'roject 1 - Peak Trails' })
					),
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(
							'aside',
							null,
							_react2.default.createElement('img', { src: 'assets/img/project1-cover.jpg' })
						),
						_react2.default.createElement(_ProjectInfo2.default, {
							text: ['Peak Trails is a website about hiking trails in and around Vancouver.', _react2.default.createElement('br', null), 'It shows you available trails and gives you a variety of information about each trail.', _react2.default.createElement('br', null), 'The project is a Wordpress theme and all the CSS is done with Less. I did all the UI/UX and icons as well for this project.'],
							skill1: 'Wordpress', skill2: 'HTML5', skill3: 'CSS3 (Less)', skill4: 'PHP', skill5: 'Javascript', skill6: 'PS + AI' })
					),
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(_Mockups2.default, { src: 'assets/img/project1-mockups.png' }),
						_react2.default.createElement(
							'nav',
							null,
							_react2.default.createElement(_Btn2.default, { width: '170', height: '50', btnLabel: 'View Live Demo', link: '//peaktrails.mbockmann.com/', target: '_blank' }),
							_react2.default.createElement(_Btn2.default, { width: '170', height: '50', btnLabel: 'See Github Repo', link: '//github.com/melaniebmn/peaktrails', target: '_blank' })
						)
					),
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(_PrevNextBtns2.default, { linkPrevious: '/work', previous: 'Overview', linkNext: '/project2', next: 'Project 2' })
					),
					_react2.default.createElement(_btnWork2.default, null)
				);
			}
		}]);

		return Project1;
	}(_react2.default.Component);

	exports.default = Project1;

/***/ },
/* 49 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"project":"Project__project___P2k8t"};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Mockups = __webpack_require__(51);

	var _Mockups2 = _interopRequireDefault(_Mockups);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Mockups = function (_React$Component) {
		_inherits(Mockups, _React$Component);

		function Mockups() {
			_classCallCheck(this, Mockups);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Mockups).apply(this, arguments));
		}

		_createClass(Mockups, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement('img', { className: _Mockups2.default.mockups, src: this.props.src });
			}
		}]);

		return Mockups;
	}(_react2.default.Component);

	exports.default = Mockups;

/***/ },
/* 51 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mockups":"Mockups__mockups___2fr6H"};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _PrevNextBtns = __webpack_require__(53);

	var _PrevNextBtns2 = _interopRequireDefault(_PrevNextBtns);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PrevNextBtns = function (_React$Component) {
		_inherits(PrevNextBtns, _React$Component);

		function PrevNextBtns() {
			_classCallCheck(this, PrevNextBtns);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(PrevNextBtns).apply(this, arguments));
		}

		_createClass(PrevNextBtns, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'ul',
					{ className: _PrevNextBtns2.default.prevNextBtns },
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ href: this.props.linkPrevious },
							this.props.previous
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ href: this.props.linkNext },
							this.props.next
						)
					)
				);
			}
		}]);

		return PrevNextBtns;
	}(_react2.default.Component);

	exports.default = PrevNextBtns;

/***/ },
/* 53 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"prevNextBtns":"PrevNextBtns__prevNextBtns___3Ga6M"};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ProjectInfo = __webpack_require__(55);

	var _ProjectInfo2 = _interopRequireDefault(_ProjectInfo);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Description = __webpack_require__(14);

	var _Description2 = _interopRequireDefault(_Description);

	var _Skills = __webpack_require__(56);

	var _Skills2 = _interopRequireDefault(_Skills);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProjectInfo = function (_React$Component) {
		_inherits(ProjectInfo, _React$Component);

		function ProjectInfo() {
			_classCallCheck(this, ProjectInfo);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ProjectInfo).apply(this, arguments));
		}

		_createClass(ProjectInfo, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: _ProjectInfo2.default.projectInfo },
					_react2.default.createElement(_Description2.default, { text: this.props.text }),
					_react2.default.createElement(_Skills2.default, { skill1: this.props.skill1, skill2: this.props.skill2, skill3: this.props.skill3, skill4: this.props.skill4, skill5: this.props.skill5, skill6: this.props.skill6 })
				);
			}
		}]);

		return ProjectInfo;
	}(_react2.default.Component);

	exports.default = ProjectInfo;

/***/ },
/* 55 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"projectInfo":"ProjectInfo__projectInfo___hGAqd"};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Skills = __webpack_require__(57);

	var _Skills2 = _interopRequireDefault(_Skills);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Skills = function (_React$Component) {
		_inherits(Skills, _React$Component);

		function Skills() {
			_classCallCheck(this, Skills);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Skills).apply(this, arguments));
		}

		_createClass(Skills, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'ul',
					{ className: _Skills2.default.skills },
					_react2.default.createElement(
						'li',
						null,
						this.props.skill1
					),
					_react2.default.createElement(
						'li',
						null,
						this.props.skill2
					),
					_react2.default.createElement(
						'li',
						null,
						this.props.skill3
					),
					_react2.default.createElement(
						'li',
						null,
						this.props.skill4
					),
					_react2.default.createElement(
						'li',
						null,
						this.props.skill5
					),
					_react2.default.createElement(
						'li',
						null,
						this.props.skill6
					)
				);
			}
		}]);

		return Skills;
	}(_react2.default.Component);

	exports.default = Skills;

/***/ },
/* 57 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"skills":"Skills__skills___6nLCa"};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Project = __webpack_require__(49);

	var _Project2 = _interopRequireDefault(_Project);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Btn = __webpack_require__(20);

	var _Btn2 = _interopRequireDefault(_Btn);

	var _btnWork = __webpack_require__(12);

	var _btnWork2 = _interopRequireDefault(_btnWork);

	var _Heading = __webpack_require__(16);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Mockups = __webpack_require__(50);

	var _Mockups2 = _interopRequireDefault(_Mockups);

	var _PrevNextBtns = __webpack_require__(52);

	var _PrevNextBtns2 = _interopRequireDefault(_PrevNextBtns);

	var _ProjectInfo = __webpack_require__(54);

	var _ProjectInfo2 = _interopRequireDefault(_ProjectInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Project2 = function (_React$Component) {
		_inherits(Project2, _React$Component);

		function Project2() {
			_classCallCheck(this, Project2);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Project2).apply(this, arguments));
		}

		_createClass(Project2, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'main',
					{ className: _Project2.default.project },
					_react2.default.createElement(
						'header',
						null,
						_react2.default.createElement(_Heading2.default, { capitalLetter: 'p', heading: 'roject 2 - Said the whale' })
					),
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(
							'aside',
							null,
							_react2.default.createElement('img', { src: 'assets/img/project2-cover.jpg' })
						),
						_react2.default.createElement(_ProjectInfo2.default, {
							text: ['Said the whale is a website that is suppose to give you interesting and random facts about whales.', _react2.default.createElement('br', null), 'The project is done with Bootstrap and all the CSS is done with Less. I also did all the UI/UX for this project.'],
							skill1: 'Bootstrap', skill2: 'HTML5', skill3: 'CSS3 (Less)', skill4: 'jQuery', skill5: 'Photoshop', skill6: 'Illustrator' })
					),
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(_Mockups2.default, { src: 'assets/img/project2-mockups.png' }),
						_react2.default.createElement(
							'nav',
							null,
							_react2.default.createElement(_Btn2.default, { width: '170', height: '50', btnLabel: 'View Live Demo', link: '//saidthewhale.mbockmann.com/', target: '_blank' }),
							_react2.default.createElement(_Btn2.default, { width: '170', height: '50', btnLabel: 'See Github Repo', link: '//github.com/melaniebmn/saidthewhale', target: '_blank' })
						)
					),
					_react2.default.createElement(
						'section',
						null,
						_react2.default.createElement(_PrevNextBtns2.default, { linkPrevious: '/project1', previous: 'Project 1', linkNext: '/work', next: 'Overview' })
					),
					_react2.default.createElement(_btnWork2.default, null)
				);
			}
		}]);

		return Project2;
	}(_react2.default.Component);

	exports.default = Project2;

/***/ }
/******/ ]);