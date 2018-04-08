webpackJsonp(["styles"],{

/***/ "../../../../../apps/demo/src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../apps/demo/src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--7-1!../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--7-1!../../../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../apps/demo/src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n  font-family: 'Oxygen', sans-serif;\r\n}\r\n\r\nbody{\r\n  height: 100%;\r\n\twidth: 100%;\r\n\tpadding: 0;\r\n\tmargin:0;\r\n}\r\n\r\n.app{\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n\r\n.nav-button{\r\n  display: none;\r\n\tposition: fixed;\r\n\tleft: 10px;\r\n\ttop: 20px;\r\n\tz-index: 3;\r\n\twidth: 30px;\r\n  height: 30px;\r\n  transform: rotate(0deg);\r\n  transition: .3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-button.open{\r\n\tleft: 310px;\r\n}\r\n.nav-button.open span{\r\n  background: #ccc;\r\n}\r\n\r\n.nav-button span{\r\n\tdisplay: block;\r\n  position: absolute;\r\n  height: 4px;\r\n  width: 100%;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  opacity: 1;\r\n  left: 0;\r\n  transform: rotate(0deg);\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n/* Icon 3 */\r\n\r\n.nav-button  span:nth-child(1) {\r\n  top: 0px;\r\n}\r\n\r\n.nav-button  span:nth-child(2),.nav-button  span:nth-child(3) {\r\n  top: 8px;\r\n}\r\n\r\n.nav-button  span:nth-child(4) {\r\n  top: 16px;\r\n}\r\n\r\n.nav-button.open span:nth-child(1) {\r\n  top: 18px;\r\n  width: 0%;\r\n  left: 50%;\r\n}\r\n\r\n.nav-button.open span:nth-child(2) {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.nav-button.open span:nth-child(3) {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.nav-button.open span:nth-child(4) {\r\n  top: 8px;\r\n  width: 0%;\r\n  left: 50%;\r\n}\r\n\r\n.navigator{\r\n  width: 350px;\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n\tbox-shadow: 0px 2px 5px #ccc;\r\n\tbackground-color: white;\r\n\tz-index: 1;\r\n  transition: width .3s ease-in-out;\r\n  overflow: hidden;\r\n}\r\n\r\n.navigator.closed{\r\n  width: 0;\r\n}\r\n\r\n.navigator-content{\r\n  padding-top: 0px;\r\n  width: 350px;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.navigator-header h3{\r\n  padding-left: 10px;\r\n}\r\n\r\n.divider{\r\n  height: 1px;\r\n  border-bottom: 1px solid #ddd;\r\n  margin-top: -2px;\r\n}\r\n\r\n.menu-section h4{\r\n  color: #444;\r\n  padding-left: 10px;\r\n}\r\n\r\n.menu-section ul{\r\n  color: #666;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.menu-section li{\r\n  font-size: 14px;\r\n  margin: 0;\r\n  padding: 10px;\r\n  padding-left: 30px;\r\n  cursor: pointer;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.menu-section li:hover{\r\n  background-color: ghostwhite;\r\n}\r\n\r\n.menu-section li.selected{\r\n  background-color: ghostwhite;  \r\n}\r\n\r\n.content{\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n\t-ms-flex: 1 1 auto;\r\n\t    flex: 1 1 auto;\r\n\tbackground-color: #f8f9fa;\r\n  min-width: 0;\r\n}\r\n\r\n.demo {\r\n  -ms-flex: 1;\r\n      flex: 1;\r\n  overflow: auto;\r\n  min-width: 0;\r\n}\r\n\r\n.header{\r\n\theight: 60px;\r\n\tbackground-color: rgb(221, 0, 49);\r\n\tbox-shadow: 2px 0px 4px #ccc;\r\n\tz-index: 0;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tpadding: 0 50px;\r\n\tvertical-align: middle;\r\n\tline-height: 60px;\r\n}\r\n\r\n.header.open{\r\n\tpadding: 0 20px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n\t.navigator {\r\n\t\tposition: fixed;\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t\tbottom: 0;\r\n  }\r\n  \r\n  .nav-button {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.demo-panel{\r\n  -ms-flex:1;\r\n      flex:1;\r\n  overflow-x: auto;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.nav-panel{\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n  width: 300px;\r\n}\r\n\r\n.demo-navigator{\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  position: fixed;\r\n  width: 300px;\r\n  bottom: 0px;\r\n  top: 0px;\r\n  left: 0px;\r\n  padding: 0px;\r\n  margin: 0;\r\n  box-shadow: 1px 0px 5px #ccc;\r\n  z-index: 1;  \r\n}\r\n\r\n.demo-navigator li{\r\n  height: 50px;\r\n  display: block;\r\n}\r\n\r\n.demo-header {\r\n  height: 50px;\r\n  background-color: #eee;\r\n}\r\n\r\n.source-code{  \r\n  float: right;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n}\r\n\r\n.source-code img{\r\n  width: 30px;\r\n  height: 30px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.source-code span{\r\n  font-size: 14px;\r\n  color: #eee;\r\n  margin-left: 10px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.demo-navigator button {\r\n  border: 1px solid #348;\r\n  text-align: center;\r\n  height: 100%;\r\n  width : 100%;\r\n  display: block;\r\n  background-color: rgb(64, 105, 182);\r\n  cursor: pointer;\r\n  outline: 0;\r\n  color: white;\r\n  border-top: 1px solid rgb(116, 137, 223);\r\n  border-bottom: 1px solid rgb(43, 76, 185);\r\n  transition: all .2s ease;\r\n  font-size: 16px;\r\n}\r\n\r\n.demo-navigator button:hover {\r\n  background-color: rgb(47, 94, 182);\r\n}\r\n\r\n\r\n.simple-page{\r\n  max-width: 500px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.simple-page-scroller{\r\n  max-width: 500px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n  overflow-y: auto;\r\n  height: 80vh;\r\n}\r\n\r\n.draggable-item{\r\n  height: 50px;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  width : 100%;\r\n  display: block;\r\n  background-color: #fff;\r\n  outline: 0;\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  margin-bottom: 2px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.draggable-item-horizontal{\r\n    height: 300px;\r\n    padding: 10px;\r\n    line-height: 100px;\r\n    text-align: center;\r\n    /* width : 200px; */\r\n    display: block;\r\n    background-color: #fff;\r\n    outline: 0;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    margin-right: 4px;\r\n}\r\n\r\n.form-demo{\r\n  width: 650px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n  display: -ms-flexbox;\r\n  display: flex\r\n}\r\n\r\n.form{\r\n  -ms-flex: 3;\r\n      flex: 3;\r\n  /* width: 500px; */\r\n  /* background-color: #f3f3f3; */\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  border-radius: 6px;\r\n  box-shadow: 3px 3px 3px rgba(0,0,0,0.08), 0px 3px 3px rgba(0,0,0,0.08);\r\n}\r\n\r\n.form-fields-panel{\r\n  -ms-flex: 1;\r\n      flex: 1;\r\n  margin-right: 50px;\r\n}\r\n\r\n.form-field{\r\n  height: 50px;\r\n  width: 250px;\r\n  line-height: 30px;\r\n  vertical-align: middle;\r\n  padding: 10px;\r\n  background-color: #fff;\r\n  border: 1px solid #eee;\r\n  border-top: 1px solid #fff;\r\n  border-bottom: 1px solid #ddd;\r\n  /* background-color: #eee; */\r\n  cursor: move;\r\n  \r\n}\r\n\r\n.form-line {\r\n  padding: 20px 30px;\r\n  background-color: #f8f9fa;\r\n  border: 1px solid transparent;\r\n  border-radius: 6px;\r\n  transition: all .3s ease;\r\n  transition-property: border-color, background-color;\r\n  cursor: move;\r\n}\r\n\r\n.form-line.selected {\r\n  /* border: 1px solid #ddd; */\r\n  background-color: #f8f9fa;\r\n  /* box-shadow: 0px 0px 10px 10px #ccc; */\r\n}\r\n\r\n.form-ghost{\r\n  transition: 0.18s ease;\r\n  box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.08);\r\n}\r\n\r\n.form-ghost-drop{\r\n  box-shadow: 0 0 2px 5px rgba(0,0,0,0.0);\r\n}\r\n\r\n.form-submit-button{\r\n  border: 0;\r\n  width: 100%;\r\n  vertical-align: middle;\r\n  height: 40px;\r\n  color: #eee;\r\n  background-color: cornflowerblue;\r\n  cursor: pointer;\r\n}\r\n\r\n.label {\r\n  margin-bottom: 5px; \r\n}\r\n\r\n.field {\r\n  cursor: auto;\r\n}\r\n\r\n.field input, .field textarea, .field select {\r\n  width: 100%;\r\n  padding: 10px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 3px;\r\n  outline: none;\r\n  transition: border-color .3s ease;\r\n}\r\n\r\n.field input[type=\"radio\"], .field input[type=\"checkbox\"] {\r\n  width: auto;\r\n}\r\n\r\n.field input:focus, textarea:focus {\r\n  border: 1px solid #80bdff;\r\n  box-shadow: 0 0 3px 0px #80bdff;\r\n}\r\n\r\n.field-group input, .field-group textarea, .field-group select{\r\n  width: 49%;\r\n  margin-right: 2%;\r\n}\r\n\r\ninput:last-child{\r\n  margin-right: 0;\r\n}\r\n\r\n.dragging {\r\n  background-color: yellow;\r\n}\r\n\r\n.card-scene{\r\n  padding: 50px;\r\n  /* background-color: #fff; */\r\n}\r\n\r\n.card-container{\r\n  width: 320px;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  margin-right: 45px;\r\n  background-color: #f3f3f3;\r\n  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);\r\n}\r\n\r\n.card{\r\n  margin: 5px;\r\n  /* border: 1px solid #ccc; */\r\n  background-color: white;\r\n  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);\r\n  padding: 10px;\r\n}\r\n\r\n.card-column-header{\r\n  font-size: 18px;\r\n}\r\n\r\n.column-drag-handle{\r\n  cursor: move;\r\n  padding: 5px; \r\n}\r\n\r\n.card-ghost {\r\n  transition: transform 0.18s ease;\r\n  transform: rotateZ(5deg)\r\n}\r\n\r\n.card-ghost-drop{\r\n  transition: transform 0.18s ease-in-out;\r\n  transform: rotateZ(0deg)\r\n}\r\n\r\n.opacity-ghost {\r\n  transition: all .18s ease;\r\n  opacity: 0.8;\r\n  /* transform: rotateZ(5deg); */\r\n  background-color: cornflowerblue;\r\n  box-shadow: 3px 3px 10px 3px rgba(0,0,0,0.3);\r\n}\r\n\r\n.opacity-ghost-drop {\r\n  opacity: 1;\r\n  /* transform: rotateZ(0deg); */\r\n  background-color: white;\r\n  box-shadow: 3px 3px 10px 3px rgba(0,0,0,0.0);\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../apps/demo/src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map