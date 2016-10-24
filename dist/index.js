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
/***/ function(module, exports) {

	import { createAction } from 'redux-act';
	import R from 'ramda';
	import { length, map, compose, without, split } from 'ramda';

	export function createActions(x) {
	  if (R.length(x) === 1) return applyTypes(x);
	  return R.map(applyTypes, x);
	}

	export const createTypes = R.compose(R.without(' '), R.split(/\s/));

	function applyTypes(x) {
	  return {
	    request: createAction(`${ x }_REQUEST`),
	    success: createAction(`${ x }_SUCCESS`),
	    failure: createAction(`${ x }_FAILURE`)
	  };
	}

	export default {
	  createActions,
	  createTypes
	};

/***/ }
/******/ ]);