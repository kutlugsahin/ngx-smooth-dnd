(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  font-family: 'Oxygen', sans-serif;\r\n}\r\n\r\nbody{\r\n  height: 100%;\r\n\twidth: 100%;\r\n\tpadding: 0;\r\n\tmargin:0;\r\n}\r\n\r\n.app{\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n}\r\n\r\n.nav-button{\r\n  display: none;\r\n\tposition: fixed;\r\n\tleft: 10px;\r\n\ttop: 20px;\r\n\tz-index: 3;\r\n\twidth: 30px;\r\n  height: 30px;\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  transition: .3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-button.open{\r\n\tleft: 310px;\r\n}\r\n\r\n.nav-button.open span{\r\n  background: #ccc;\r\n}\r\n\r\n.nav-button span{\r\n\tdisplay: block;\r\n  position: absolute;\r\n  height: 4px;\r\n  width: 100%;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  opacity: 1;\r\n  left: 0;\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n/* Icon 3 */\r\n\r\n.nav-button  span:nth-child(1) {\r\n  top: 0px;\r\n}\r\n\r\n.nav-button  span:nth-child(2),.nav-button  span:nth-child(3) {\r\n  top: 8px;\r\n}\r\n\r\n.nav-button  span:nth-child(4) {\r\n  top: 16px;\r\n}\r\n\r\n.nav-button.open span:nth-child(1) {\r\n  top: 18px;\r\n  width: 0%;\r\n  left: 50%;\r\n}\r\n\r\n.nav-button.open span:nth-child(2) {\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.nav-button.open span:nth-child(3) {\r\n  -webkit-transform: rotate(-45deg);\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.nav-button.open span:nth-child(4) {\r\n  top: 8px;\r\n  width: 0%;\r\n  left: 50%;\r\n}\r\n\r\n.navigator{\r\n  width: 350px;\r\n  flex-shrink: 0;\r\n\tbox-shadow: 0px 2px 5px #ccc;\r\n\tbackground-color: white;\r\n\tz-index: 1;\r\n  transition: width .3s ease-in-out;\r\n  overflow: hidden;\r\n}\r\n\r\n.navigator.closed{\r\n  width: 0;\r\n}\r\n\r\n.navigator-content{\r\n  padding-top: 0px;\r\n  width: 350px;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.navigator-header h3{\r\n  padding-left: 10px;\r\n}\r\n\r\n.divider{\r\n  height: 1px;\r\n  border-bottom: 1px solid #ddd;\r\n  margin-top: -2px;\r\n}\r\n\r\n.menu-section h4{\r\n  color: #444;\r\n  padding-left: 10px;\r\n}\r\n\r\n.menu-section ul{\r\n  color: #666;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.menu-section li{\r\n  font-size: 14px;\r\n  margin: 0;\r\n  padding: 10px;\r\n  padding-left: 30px;\r\n  cursor: pointer;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.menu-section li:hover{\r\n  background-color: ghostwhite;\r\n}\r\n\r\n.menu-section li.selected{\r\n  background-color: ghostwhite;  \r\n}\r\n\r\n.content{\r\n  display: flex;\r\n  flex-direction: column;\r\n\tflex: 1 1 auto;\r\n\tbackground-color: #f8f9fa;\r\n  min-width: 0;\r\n}\r\n\r\n.demo {\r\n  flex: 1;\r\n  overflow: auto;\r\n  min-width: 0;\r\n}\r\n\r\n.header{\r\n\theight: 60px;\r\n\tbackground-color: rgb(221, 0, 49);\r\n\tbox-shadow: 2px 0px 4px #ccc;\r\n\tz-index: 0;\r\n\tcolor: white;\r\n\tfont-size: 20px;\r\n\tpadding: 0 50px;\r\n\tvertical-align: middle;\r\n\tline-height: 60px;\r\n}\r\n\r\n.header.open{\r\n\tpadding: 0 20px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n\t.navigator {\r\n\t\tposition: fixed;\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t\tbottom: 0;\r\n  }\r\n  \r\n  .nav-button {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.demo-panel{\r\n  flex:1;\r\n  overflow-x: auto;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.nav-panel{\r\n  flex-shrink: 0;\r\n  width: 300px;\r\n}\r\n\r\n.demo-navigator{\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  position: fixed;\r\n  width: 300px;\r\n  bottom: 0px;\r\n  top: 0px;\r\n  left: 0px;\r\n  padding: 0px;\r\n  margin: 0;\r\n  box-shadow: 1px 0px 5px #ccc;\r\n  z-index: 1;  \r\n}\r\n\r\n.demo-navigator li{\r\n  height: 50px;\r\n  display: block;\r\n}\r\n\r\n.demo-header {\r\n  height: 50px;\r\n  background-color: #eee;\r\n}\r\n\r\n.source-code{  \r\n  float: right;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n}\r\n\r\n.source-code img{\r\n  width: 30px;\r\n  height: 30px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.source-code span{\r\n  font-size: 14px;\r\n  color: #eee;\r\n  margin-left: 10px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.demo-navigator button {\r\n  border: 1px solid #348;\r\n  text-align: center;\r\n  height: 100%;\r\n  width : 100%;\r\n  display: block;\r\n  background-color: rgb(64, 105, 182);\r\n  cursor: pointer;\r\n  outline: 0;\r\n  color: white;\r\n  border-top: 1px solid rgb(116, 137, 223);\r\n  border-bottom: 1px solid rgb(43, 76, 185);\r\n  transition: all .2s ease;\r\n  font-size: 16px;\r\n}\r\n\r\n.demo-navigator button:hover {\r\n  background-color: rgb(47, 94, 182);\r\n}\r\n\r\n.simple-page{\r\n  max-width: 500px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.simple-page-scroller{\r\n  max-width: 500px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n  overflow-y: auto;\r\n  height: 80vh;\r\n}\r\n\r\n.draggable-item{\r\n  height: 50px;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  width : 100%;\r\n  display: block;\r\n  background-color: #fff;\r\n  outline: 0;\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  margin-bottom: 2px;\r\n  margin-top: 2px;\r\n}\r\n\r\n.draggable-item-horizontal{\r\n    height: 300px;\r\n    padding: 10px;\r\n    line-height: 100px;\r\n    text-align: center;\r\n    /* width : 200px; */\r\n    display: block;\r\n    background-color: #fff;\r\n    outline: 0;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    margin-right: 4px;\r\n}\r\n\r\n.form-demo{\r\n  width: 650px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 50px;\r\n  display: flex\r\n}\r\n\r\n.form{\r\n  flex: 3;\r\n  /* width: 500px; */\r\n  /* background-color: #f3f3f3; */\r\n  border: 1px solid rgba(0,0,0,.125);\r\n  border-radius: 6px;\r\n  box-shadow: 3px 3px 3px rgba(0,0,0,0.08), 0px 3px 3px rgba(0,0,0,0.08);\r\n}\r\n\r\n.form-fields-panel{\r\n  flex: 1;\r\n  margin-right: 50px;\r\n}\r\n\r\n.form-field{\r\n  height: 50px;\r\n  width: 250px;\r\n  line-height: 30px;\r\n  vertical-align: middle;\r\n  padding: 10px;\r\n  background-color: #fff;\r\n  border: 1px solid #eee;\r\n  border-top: 1px solid #fff;\r\n  border-bottom: 1px solid #ddd;\r\n  /* background-color: #eee; */\r\n  cursor: move;\r\n  \r\n}\r\n\r\n.form-line {\r\n  padding: 20px 30px;\r\n  background-color: #f8f9fa;\r\n  border: 1px solid transparent;\r\n  border-radius: 6px;\r\n  transition: all .3s ease;\r\n  transition-property: border-color, background-color;\r\n  cursor: move;\r\n}\r\n\r\n.form-line.selected {\r\n  /* border: 1px solid #ddd; */\r\n  background-color: #f8f9fa;\r\n  /* box-shadow: 0px 0px 10px 10px #ccc; */\r\n}\r\n\r\n.form-ghost{\r\n  transition: 0.18s ease;\r\n  box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.08);\r\n}\r\n\r\n.form-ghost-drop{\r\n  box-shadow: 0 0 2px 5px rgba(0,0,0,0.0);\r\n}\r\n\r\n.form-submit-button{\r\n  border: 0;\r\n  width: 100%;\r\n  vertical-align: middle;\r\n  height: 40px;\r\n  color: #eee;\r\n  background-color: cornflowerblue;\r\n  cursor: pointer;\r\n}\r\n\r\n.label {\r\n  margin-bottom: 5px; \r\n}\r\n\r\n.field {\r\n  cursor: auto;\r\n}\r\n\r\n.field input, .field textarea, .field select {\r\n  width: 100%;\r\n  padding: 10px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 3px;\r\n  outline: none;\r\n  transition: border-color .3s ease;\r\n}\r\n\r\n.field input[type=\"radio\"], .field input[type=\"checkbox\"] {\r\n  width: auto;\r\n}\r\n\r\n.field input:focus, textarea:focus {\r\n  border: 1px solid #80bdff;\r\n  box-shadow: 0 0 3px 0px #80bdff;\r\n}\r\n\r\n.field-group input, .field-group textarea, .field-group select{\r\n  width: 49%;\r\n  margin-right: 2%;\r\n}\r\n\r\ninput:last-child{\r\n  margin-right: 0;\r\n}\r\n\r\n.dragging {\r\n  background-color: yellow;\r\n}\r\n\r\n.card-scene{\r\n  padding: 50px;\r\n  /* background-color: #fff; */\r\n}\r\n\r\n.card-container{\r\n  width: 320px;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  margin-right: 45px;\r\n  background-color: #f3f3f3;\r\n  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);\r\n}\r\n\r\n.card{\r\n  margin: 5px;\r\n  /* border: 1px solid #ccc; */\r\n  background-color: white;\r\n  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);\r\n  padding: 10px;\r\n}\r\n\r\n.card-column-header{\r\n  font-size: 18px;\r\n}\r\n\r\n.column-drag-handle{\r\n  cursor: move;\r\n  padding: 5px; \r\n}\r\n\r\n.card-ghost {\r\n  transition: -webkit-transform 0.18s ease;\r\n  transition: transform 0.18s ease;\r\n  transition: transform 0.18s ease, -webkit-transform 0.18s ease;\r\n  -webkit-transform: rotateZ(5deg);\r\n          transform: rotateZ(5deg)\r\n}\r\n\r\n.card-ghost-drop{\r\n  transition: -webkit-transform 0.18s ease-in-out;\r\n  transition: transform 0.18s ease-in-out;\r\n  transition: transform 0.18s ease-in-out, -webkit-transform 0.18s ease-in-out;\r\n  -webkit-transform: rotateZ(0deg);\r\n          transform: rotateZ(0deg)\r\n}\r\n\r\n.opacity-ghost {\r\n  transition: all .18s ease;\r\n  opacity: 0.8;\r\n  /* transform: rotateZ(5deg); */\r\n  background-color: cornflowerblue;\r\n  box-shadow: 3px 3px 10px 3px rgba(0,0,0,0.3);\r\n}\r\n\r\n.opacity-ghost-drop {\r\n  opacity: 1;\r\n  /* transform: rotateZ(0deg); */\r\n  background-color: white;\r\n  box-shadow: 3px 3px 10px 3px rgba(0,0,0,0.0);\r\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kutlu\Desktop\ngx-smooth-dnd\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map