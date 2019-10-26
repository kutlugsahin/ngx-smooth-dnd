(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/dist/cjs.js!./libs/ngx-smooth-dnd/src/container/container.component.html":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./libs/ngx-smooth-dnd/src/container/container.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #container>\r\n    <ng-content></ng-content>\r\n</div>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./libs/ngx-smooth-dnd/src/draggable/draggable.component.html":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./libs/ngx-smooth-dnd/src/draggable/draggable.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container #draggableWrapper>\r\n    <ng-content></ng-content>\r\n</ng-container>");

/***/ }),

/***/ "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!***************************************************************************!*\
  !*** ../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div [ngClass]=\"'app'\">\r\n\t<div [ngClass]=\"navButtonClass\" (click)=\"toggleNav()\">\r\n\t\t<span></span>\r\n\t\t<span></span>\r\n\t\t<span></span>\r\n\t\t<span></span>\r\n\t</div>\r\n\t<div [ngClass]=\"navigatorClass\">\r\n\t\t<div [ngClass]=\"'navigator-content'\">\r\n\t\t\t<div [ngClass]=\"'navigator-header'\">\r\n\t\t\t\t<h3>ngx-smooth-dnd</h3>\r\n\t\t\t\t<div [ngClass]=\"'divider'\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<div *ngFor=\"let section of pages\" [ngClass]=\"'menu-section'\">\r\n\t\t\t\t\t<h4>{{section.title}}</h4>\r\n\t\t\t\t\t<ul>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li *ngFor=\"let page of section.pages\" [ngClass]=\"page.selected ? 'selected' : ''\" (click)=\"selectPage(page)\">{{page.title}}</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div [ngClass]=\"'content'\">\r\n\t\t<div [ngClass]=\"headerClass\">\r\n\t\t\t{{selectedPage.title}}\r\n\t\t\t<div [ngClass]=\"'source-code'\" (click)=\"openCode()\">\r\n\t\t\t\t<img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZml0PSIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ij48L3BhdGg+CiAgICA8cGF0aCBkPSJNOS40IDE2LjZMNC44IDEybDQuNi00LjZMOCA2bC02IDYgNiA2IDEuNC0xLjR6bTUuMiAwbDQuNi00LjYtNC42LTQuNkwxNiA2bDYgNi02IDYtMS40LTEuNHoiIGZpbGw9IiNGRkYiPjwvcGF0aD4KPC9zdmc+Cg==\"\r\n\t\t\t\t alt=\"\" />\r\n\t\t\t\t<span>source</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div [ngClass]=\"'demo'\">\r\n\t\t\t<app-simple *ngIf=\"selectedPage.page == 'simple'\"></app-simple>\r\n\t\t\t<app-simple-scroller *ngIf=\"selectedPage.page == 'simple-scroller'\"></app-simple-scroller>\r\n\t\t\t<app-simple-horizontal *ngIf=\"selectedPage.page == 'simple-horizontal'\"></app-simple-horizontal>\r\n\t\t\t<app-groups *ngIf=\"selectedPage.page == 'groups'\"></app-groups>\r\n\t\t\t<app-copy *ngIf=\"selectedPage.page == 'copy'\"></app-copy>\r\n\t\t\t<app-nested *ngIf=\"selectedPage.page == 'nested'\"></app-nested>\r\n\t\t\t<app-lock-axis *ngIf=\"selectedPage.page == 'lock-axis'\"></app-lock-axis>\r\n\t\t\t<app-drag-handle *ngIf=\"selectedPage.page == 'drag-handle'\"></app-drag-handle>\r\n\t\t\t<app-drag-class *ngIf=\"selectedPage.page == 'drag-class'\"></app-drag-class>\r\n\t\t\t<app-drag-delay *ngIf=\"selectedPage.page == 'drag-delay'\"></app-drag-delay>\r\n\t\t\t<app-transition-duration *ngIf=\"selectedPage.page == 'transition-duration'\"></app-transition-duration>\r\n\t\t\t<app-cards *ngIf=\"selectedPage.page == 'cards'\"></app-cards>\r\n\t\t\t<app-form *ngIf=\"selectedPage.page == 'form'\"></app-form>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "../smooth-dnd/dist/index.js":
/*!***********************************!*\
  !*** ../smooth-dnd/dist/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):undefined}(this,function(e){"use strict";var l,t,r="smooth-dnd-container-instance",f="smooth-dnd-draggable-wrapper",o="animated",p="__smooth_dnd_draggable_translation_value",u="__smooth_dnd_draggable_visibility_value",v="smooth-dnd-ghost",g="smooth-dnd-container",d="smooth-dnd-extra-size-for-insertion",h="smooth-dnd-stretcher-element",y="smooth-dnd-stretcher-instance",s="smooth-dnd-disable-touch-action",c="smooth-dnd-no-user-select",i="smooth-dnd-prevent-auto-scroll-class",b="smooth-dnd-drop-preview-default-class",w="smooth-dnd-drop-preview-inner-class",x="smooth-dnd-drop-preview-constant-class",E="smooth-dnd-drop-preview-flex-container-class",n=Object.freeze({containerInstance:r,defaultGroupName:"@@smooth-dnd-default-group@@",wrapperClass:f,defaultGrabHandleClass:"smooth-dnd-default-grap-handle",animationClass:o,translationValue:p,visibilityValue:u,ghostClass:v,containerClass:g,extraSizeForInsertion:d,stretcherElementClass:h,stretcherElementInstance:y,isDraggableDetached:"smoth-dnd-is-draggable-detached",disbaleTouchActions:s,noUserSelectClass:c,preventAutoScrollClass:i,dropPlaceholderDefaultClass:b,dropPlaceholderInnerClass:w,dropPlaceholderWrapperClass:x,dropPlaceholderFlexContainerClass:E}),C={groupName:void 0,behaviour:"move",orientation:"vertical",getChildPayload:void 0,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:void 0,shouldAnimateDrop:void 0};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t=l||(l={})).x="x",t.y="y",t.xy="xy";function S(e,t,n){return"x"===n?{left:Math.max(e.left,t.left),top:e.top,right:Math.min(e.right,t.right),bottom:e.bottom}:{left:e.left,top:Math.max(e.top,t.top),right:e.right,bottom:Math.min(e.bottom,t.bottom)}}function O(e){var t=window.getComputedStyle(e),n=t.overflow;if("auto"===n||"scroll"===n)return l.xy;var o=t["overflow-x"],r="auto"===o||"scroll"===o,i=t["overflow-y"],a="auto"===i||"scroll"===i;return r&&a?l.xy:r?l.x:a?l.y:null}function R(e,t){var n=window.getComputedStyle(e),o=n.overflow,r=n["overflow-".concat(t)];return"auto"===o||"scroll"===o||("auto"===r||"scroll"===r)}var A=function(e,t){return{left:Math.max(e.left,t.left),top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom)}},I=function(e){var t=e.getBoundingClientRect(),n={left:t.left,right:t.right,top:t.top,bottom:t.bottom};if(P(e,"x")&&!B(e,"x")){var o=n.right-n.left;n.right=n.right+e.scrollWidth-o}if(P(e,"y")&&!B(e,"y")){var r=n.bottom-n.top;n.bottom=n.bottom+e.scrollHeight-r}return n},B=function(e,t){var n=window.getComputedStyle(e),o=n.overflow,r=n["overflow-".concat(t)];return"auto"===o||"scroll"===o||"hidden"===o||("auto"===r||"scroll"===r||"hidden"===r)},P=function(e,t){return"x"===t?e.scrollWidth>e.clientWidth:e.scrollHeight>e.clientHeight},T=function(e,t){var n=e,o=t||I(e);for(n=e.parentElement;n;)P(n,"x")&&B(n,"x")&&(o=S(o,n.getBoundingClientRect(),"x")),P(n,"y")&&B(n,"y")&&(o=S(o,n.getBoundingClientRect(),"y")),n=n.parentElement;return o},z=function(e,n){for(var o=e;o;){if(o[r]){var t=function(){var t=o[r];if(n.some(function(e){return e===t}))return{v:t}}();if("object"===a(t))return t.v}o=o.parentElement}return null},N=function(e,t){for(var n=e;n;){if(n.matches(t))return n;n=n.parentElement}return null},L=function(e,t){return-1<e.className.split(" ").map(function(e){return e}).indexOf(t)},M=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e});-1===n.indexOf(t)&&(n.unshift(t),e.className=n.join(" "))}},j=function(e,t){if(e){var n=e.className.split(" ").filter(function(e){return e&&e!==t});e.className=n.join(" ")}},_=function(e,t){return e.removeChild(e.children[t])},F=function(e,t,n){n>=e.children.length?e.appendChild(t):e.insertBefore(t,e.children[n])},V=function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():window.document.selection&&window.document.selection.empty()},X=function(e){if(e){var t=window.getComputedStyle(e);if(t)return t.cursor}return null};function H(e){return!(e.bottom<=e.top||e.right<=e.left)}function Y(e){var s=e.element,c=e.draggables;return function(e,t){var n=e,o=n.removedIndex,r=n.addedIndex,i=n.droppedElement,a=null;if(null!==o&&(a=_(s,o),c.splice(o,1)),null!==r){var l=window.document.createElement("div");l.className="".concat(f),l.appendChild(a&&a.firstElementChild?a.firstElementChild:i),F(s,l,r),r>=c.length?c.push(l):c.splice(r,0,l)}t&&t(e)}}var k=Object.freeze({domDropHandler:Y,reactDropHandler:function(){return{handler:function(){return function(e,t){t&&t(e)}}}}}),G={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(e){return"translate3d(".concat(e,"px, 0, 0)")}}},W={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(e){return"translate3d(0,".concat(e,"px, 0)")}}};function q(n,s,e){n[d]=0;var o=function(o){return{get:function(e,t){return e[o[t]||t]},set:function(e,t,n){e[o[t]]=o.setters[t]?o.setters[t](n):n}}}("horizontal"===s?G:W),c={translation:0};function t(){r(n),function(e){var t=e.getBoundingClientRect();c.scaleX=e.offsetWidth?(t.right-t.left)/e.offsetWidth:1,c.scaleY=e.offsetHeight?(t.bottom-t.top)/e.offsetHeight:1}(n)}function r(e){c.rect=I(e);var t=T(e,c.rect);H(t)&&(c.lastVisibleRect=c.visibleRect),c.visibleRect=t}function i(e){var t=e;if(t.tagName){var n=t.getBoundingClientRect();return"vertical"===s?n.bottom-n.top:n.right-n.left}return o.get(e,"size")*o.get(c,"scale")}function a(e){return o.get(e,"dragPosition")}return window.addEventListener("resize",function(){r(n)}),setTimeout(function(){t()},10),{getSize:i,getContainerRectangles:function(){return{rect:c.rect,visibleRect:c.visibleRect,lastVisibleRect:c.lastVisibleRect}},getBeginEndOfDOMRect:function(e){return{begin:o.get(e,"begin"),end:o.get(e,"end")}},getBeginEndOfContainer:function(){return{begin:o.get(c.rect,"begin")+c.translation,end:o.get(c.rect,"end")+c.translation}},getBeginEndOfContainerVisibleRect:function(){return{begin:o.get(c.visibleRect,"begin")+c.translation,end:o.get(c.visibleRect,"end")+c.translation}},getBeginEnd:function(e){var t=function(e){return(o.get(e,"distanceToParent")+(e[p]||0))*o.get(c,"scale")}(e)+(o.get(c.rect,"begin")+c.translation)-o.get(n,"scrollValue");return{begin:t,end:t+i(e)*o.get(c,"scale")}},getAxisValue:a,setTranslation:function(e,t){t?o.set(e.style,"translate",t):e.style.removeProperty("transform"),e[p]=t},getTranslation:function(e){return e[p]},setVisibility:function(e,t){void 0!==e[u]&&e[u]===t||(t?e.style.removeProperty("visibility"):e.style.visibility="hidden",e[u]=t)},isVisible:function(e){return void 0===e[u]||e[u]},isInVisibleRect:function(e,t){var n=c.visibleRect,o=n.left,r=n.top,i=n.right,a=n.bottom;a-r<2&&(a=r+30);var l=c.rect;return"vertical"===s?e>l.left&&e<l.right&&r<t&&t<a:o<e&&e<i&&t>l.top&&t<l.bottom},setSize:function(e,t){o.set(e,"setSize",t)},getTopLeftOfElementBegin:function(e){var t=0;return{top:"horizontal"===s?(t=e,c.rect.top):(t=c.rect.left,e),left:t}},getScrollSize:function(e){return o.get(e,"scrollSize")},getScrollValue:function(e){return o.get(e,"scrollValue")},setScrollValue:function(e,t){return o.set(e,"scrollValue",t)},invalidate:t,invalidateRects:function(){r(n)},getPosition:function(e){return a(e)},setBegin:function(e,t){o.set(e,"begin",t)}}}function U(e,t,n){var o,r,i,a=n.left,l=n.right,s=n.top,c=n.bottom,u=e.x,d=e.y;if(u<a||l<u||d<s||c<d)return null;i="x"===t?(o=a,r=l,u):(o=s,r=c,d);var f=r-o,g=400<f?100:f/4;return r-i<g?{direction:"end",speedFactor:(g-(r-i))/g}:i-o<g?{direction:"begin",speedFactor:(g-(i-o))/g}:null}function J(l){var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"y",c=null,u=null,d=null,f=null;return{animate:function(e,t){d=e,f=t,function a(){null===c&&(c=requestAnimationFrame(function(e){null===u&&(u=e);var t=e-u;u=e;var n,o,r,i=t/1e3*f;o=s,r=i="begin"===d?0-i:i,(n=l)&&(n!==window?"x"===o?n.scrollLeft+=r:n.scrollTop+=r:"x"===o?n.scrollBy(r,0):n.scrollBy(0,r)),c=null,a()}))}()},stop:function(){null!==c&&(cancelAnimationFrame(c),c=null),u=null}}}function K(e){return function(){return T(e,e.getBoundingClientRect())}}var Q,Z,$,ee=function(e){var u=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1500,r=e.reduce(function(e,t){var n=function(e){for(var t=[],n=e.element;n;){var o=O(n);if(o&&!L(n,i)){var r={};switch(o){case l.xy:r.x={animator:J(n,"x")},r.y={animator:J(n,"y")};break;case l.x:r.x={animator:J(n,"x")};break;case l.y:r.y={animator:J(n,"y")}}t.push({axisAnimations:r,getRect:K(n),scrollerElement:n})}n=n.parentElement}return t}(t).filter(function(t){return!e.find(function(e){return e.scrollerElement===t.scrollerElement})});return[].concat(D(e),D(n))},[]);return function(e){var t=e.draggableInfo;if(e.reset)r.forEach(function(e){e.axisAnimations.x&&e.axisAnimations.x.animator.stop(),e.axisAnimations.y&&e.axisAnimations.y.animator.stop()});else if(t){!function(e,o){e.forEach(function(e){var t=e.axisAnimations,n=(0,e.getRect)();t.x&&(t.x.scrollParams=U(o,"x",n),e.cachedRect=n),t.y&&(t.y.scrollParams=U(o,"y",n),e.cachedRect=n)})}(r,t.mousePosition),r.forEach(function(e){var t=e.axisAnimations,n=t.x,o=t.y;if(n)if(n.scrollParams){var r=n.scrollParams,i=r.direction,a=r.speedFactor;n.animator.animate(i,a*u)}else n.animator.stop();if(o)if(o.scrollParams){var l=o.scrollParams,s=l.direction,c=l.speedFactor;o.animator.animate(s,c*u)}else o.animator.stop()});var n=r.filter(function(e){return e.cachedRect});if(n.length&&1<n.length){var o=function(e,t){for(var n=document.elementFromPoint(t.x,t.y);n;){var o=e.find(function(e){return e.scrollerElement===n});if(o)return o;n=n.parentElement}return null}(n,t.mousePosition);o&&n.forEach(function(e){e!==o&&(e.axisAnimations.x&&e.axisAnimations.x.animator.stop(),e.axisAnimations.y&&e.axisAnimations.y.animator.stop())})}}}};"undefined"!=typeof window&&((Q=Element)&&Q.prototype&&!Q.prototype.matches&&(Q.prototype.matches=Q.prototype.matchesSelector||Q.prototype.mozMatchesSelector||Q.prototype.msMatchesSelector||Q.prototype.oMatchesSelector||Q.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n}),(Z=Node||Element)&&Z.prototype&&null==Z.prototype.firstElementChild&&Object.defineProperty(Z.prototype,"firstElementChild",{get:function(){for(var e,t=this.childNodes,n=0;e=t[n++];)if(1===e.nodeType)return e;return null}}),Array.prototype.some||(Array.prototype.some=function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof e)throw new TypeError;for(var t=Object(this),n=t.length>>>0,o=2<=arguments.length?arguments[1]:void 0,r=0;r<n;r++)if(r in t&&e.call(o,t[r],r,t))return!0;return!1}));var te={overflow:"hidden",display:"block"},ne={height:"100%",display:"table-cell","vertical-align":"top"},oe=(m($={},".".concat(g),{position:"relative","min-height":"30px","min-width":"30px"}),m($,".".concat(g,".horizontal"),{display:"table"}),m($,".".concat(g,".horizontal > .").concat(h),{display:"inline-block"}),m($,".".concat(g,".horizontal > .").concat(f),ne),m($,".".concat(g,".vertical > .").concat(f),te),m($,".".concat(f),{"box-sizing":"border-box"}),m($,".".concat(f,".horizontal"),ne),m($,".".concat(f,".vertical"),te),m($,".".concat(f,".animated"),{transition:"transform ease"}),m($,".".concat(v),{"box-sizing":"border-box"}),m($,".".concat(v,".animated"),{transition:"all ease-in-out"}),m($,".".concat(v," *"),{"pointer-events":"none"}),m($,".".concat(s," *"),{"touch-action":"none","-ms-touch-action":"none"}),m($,".".concat(c),{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),m($,".".concat(w),{flex:"1"}),m($,".".concat(g,".horizontal > .").concat(x),{height:"100%",overflow:"hidden",display:"table-cell","vertical-align":"top"}),m($,".".concat(g,".vertical > .").concat(x),{overflow:"hidden",display:"block",width:"100%"}),m($,".".concat(E),{width:"100%",height:"100%",display:"flex","justify-content":"stretch","align-items":"stretch"}),m($,".".concat(b),{"background-color":"rgba(150, 150, 150, 0.1)",border:"1px solid #ccc"}),$);function re(o){return Object.keys(o).reduce(function(e,t){var n=o[t];return"object"===a(n)?"".concat(e).concat(t,"{").concat(re(n),"}"):"".concat(e).concat(t,":").concat(n,";")},"")}function ie(e){if(e&&"undefined"!=typeof window){var t=window.document.head||window.document.getElementsByTagName("head")[0],n=window.document.createElement("style"),o=re({"body *":{cursor:"".concat(e," !important")}});return n.type="text/css",n.styleSheet?n.styleSheet.cssText=o:n.appendChild(window.document.createTextNode(o)),t.appendChild(n),n}return null}var ae,le,se=["mousedown","touchstart"],ce=["mousemove","touchmove"],ue=["mouseup","touchend"],de=null,fe=null,ge=null,me=null,pe=[],ve=!1,he=!1,ye=!1,be=!1,we=null,xe=null,Ee=null,Ce=null,De=(ae=null,le=!1,{start:function(){le||(le=!0,function e(){ae=requestAnimationFrame(function(){de.forEach(function(e){return e.layout.invalidateRects()}),setTimeout(function(){null!==ae&&e()},50)})}())},stop:function(){null!==ae&&(cancelAnimationFrame(ae),ae=null),le=!1}}),Se="undefined"!=typeof window&&!!(window.navigator.userAgent.match(/Android/i)||window.navigator.userAgent.match(/webOS/i)||window.navigator.userAgent.match(/iPhone/i)||window.navigator.userAgent.match(/iPad/i)||window.navigator.userAgent.match(/iPod/i)||window.navigator.userAgent.match(/BlackBerry/i)||window.navigator.userAgent.match(/Windows Phone/i));function Oe(){"undefined"!=typeof window&&se.forEach(function(e){window.document.addEventListener(e,Ve,{passive:!1})})}function Re(){return me&&me.ghostParent?me.ghostParent:fe&&fe.parentElement||window.document.body}var Ae,Ie,Be,Pe,Te,ze,Ne=(Pe=null,Te=1,ze=5,function(e,t,n){Ae=Je(e),Be=n,(Ie="number"==typeof t?t:Se?200:0)&&(Pe=setTimeout(Fe,Ie)),ce.forEach(function(e){return window.document.addEventListener(e,Le)},{passive:!1}),ue.forEach(function(e){return window.document.addEventListener(e,Me)},{passive:!1}),window.document.addEventListener("drag",je,{passive:!1})});function Le(e){var t=Je(e),n=t.clientX,o=t.clientY;if(Ie)(Math.abs(Ae.clientX-n)>ze||Math.abs(Ae.clientY-o)>ze)&&_e();else if(Math.abs(Ae.clientX-n)>Te||Math.abs(Ae.clientY-o)>Te)return Fe()}function Me(){_e()}function je(){_e()}function _e(){clearTimeout(Pe),ce.forEach(function(e){return window.document.removeEventListener(e,Le)},{passive:!1}),ue.forEach(function(e){return window.document.removeEventListener(e,Me)},{passive:!1}),window.document.removeEventListener("drag",je,{passive:!1})}function Fe(){clearTimeout(Pe),_e(),Be()}function Ve(e){var t=Je(e);if(!ve&&(void 0===t.button||0===t.button)&&(fe=N(t.target,"."+f))){var n=N(fe,"."+g),o=pe.filter(function(e){return e.element===n})[0],r=o.getOptions().dragHandleSelector,i=o.getOptions().nonDragAreaSelector,a=!0;if(r&&!N(t.target,r)&&(a=!1),i&&N(t.target,i)&&(a=!1),a){o.layout.invalidate(),M(window.document.body,s),M(window.document.body,c);window.document.addEventListener("mouseup",function e(){j(window.document.body,s),j(window.document.body,c),window.document.removeEventListener("mouseup",e)})}a&&Ne(t,o.getOptions().dragBeginDelay,function(){V(),et(t,X(e.target)),ce.forEach(function(e){window.document.addEventListener(e,Xe,{passive:!1})}),ue.forEach(function(e){window.document.addEventListener(e,Ue,{passive:!1})})})}}function Xe(e){e.preventDefault();var t=Je(e);if(me){var n=me.container.getOptions();"contain"===n.behaviour?function(e){var t,n,o,r,i=e.clientX,a=e.clientY,l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"vertical",s=me.container.layout.getBeginEndOfContainerVisibleRect();r="vertical"===l?(t=a,n="y",o="top",me.size.offsetHeight):(t=i,n="x",o="left",me.size.offsetWidth);var c=s.begin,u=s.end-r,d=Math.max(c,Math.min(u,t+ge.positionDelta[o]));ge.topLeft[n]=d,me.position[n]=Math.max(s.begin,Math.min(s.end,t+ge.centerDelta[n])),me.mousePosition[n]=Math.max(s.begin,Math.min(s.end,t)),me.position[n]<s.begin+r/2&&(me.position[n]=s.begin+2),me.position[n]>s.end-r/2&&(me.position[n]=s.end-2)}(t,n.orientation):Ee?"y"===Ee?(ge.topLeft.y=t.clientY+ge.positionDelta.top,me.position.y=t.clientY+ge.centerDelta.y,me.mousePosition.y=t.clientY):"x"===Ee&&(ge.topLeft.x=t.clientX+ge.positionDelta.left,me.position.x=t.clientX+ge.centerDelta.x,me.mousePosition.x=t.clientX):(ge.topLeft.x=t.clientX+ge.positionDelta.left,ge.topLeft.y=t.clientY+ge.positionDelta.top,me.position.x=t.clientX+ge.centerDelta.x,me.position.y=t.clientY+ge.centerDelta.y,me.mousePosition.x=t.clientX,me.mousePosition.y=t.clientY),nt(),(be=!we(me))&&We()}else et(t,X(e.target))}var He,Ye,ke,Ge,We=(He=qe,ke=!(Ye=20),Ge=null,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Ge&&clearTimeout(Ge),ke&&!Ge?He.call.apply(He,[null].concat(t)):Ge=setTimeout(function(){Ge=null,He.call.apply(He,[null].concat(t))},Ye)});function qe(){be&&(be=!1,Ke(me,de))}function Ue(){ce.forEach(function(e){window.document.removeEventListener(e,Xe,{passive:!1})}),ue.forEach(function(e){window.document.removeEventListener(e,Ue,{passive:!1})}),xe({reset:!0}),Ce&&(function(e){e&&"undefined"!=typeof window&&(window.document.head||window.document.getElementsByTagName("head")[0]).removeChild(e)}(Ce),Ce=null),me&&(De.stop(),qe(),ye=!0,function(e){function i(){j(ge.ghost,"animated"),ge.ghost.style.transitionDuration=null,Re().removeChild(ge.ghost),e()}function t(e,t,n){var o=e.top,r=e.left;M(ge.ghost,"animated"),n&&M(ge.ghost.firstElementChild,n),ge.topLeft.x=r,ge.topLeft.y=o,nt(t),setTimeout(function(){i()},t+20)}function n(e,t){M(ge.ghost,"animated"),nt(e,.9,!0),setTimeout(function(){t()},e+20)}if(me.targetElement){var o=pe.filter(function(e){return e.element===me.targetElement})[0];if(!(p=o.getOptions()).shouldAnimateDrop||p.shouldAnimateDrop(me.container.getOptions(),me.payload))t(o.getDragResult().shadowBeginEnd.rect,Math.max(150,o.getOptions().animationDuration/2),o.getOptions().dropClass);else i()}else{var r=pe.filter(function(e){return e===me.container})[0];if(r){var a=r.getOptions(),l=a.behaviour,s=a.removeOnDropOut;if("move"!==l&&"contain"!==l||!he&&s||!r.getDragResult())n(r.getOptions().animationDuration,i);else{var c=r.layout.getContainerRectangles();if(!H(c.visibleRect)&&H(c.lastVisibleRect))t({top:c.lastVisibleRect.top,left:c.lastVisibleRect.left},r.getOptions().animationDuration,r.getOptions().dropClass);else{var u=r.getDragResult(),d=u.removedIndex,f=u.elementSize,g=r.layout;r.getTranslateCalculator({dragResult:{removedIndex:d,addedIndex:d,elementSize:f,pos:void 0,shadowBeginEnd:void 0}});var m=0<d?g.getBeginEnd(r.draggables[d-1]).end:g.getBeginEndOfContainer().begin;t(g.getTopLeftOfElementBegin(m),r.getOptions().animationDuration,r.getOptions().dropClass)}}}else n(C.animationDuration,i)}var p}(function(){$e(ve=!1);for(var e=de||[],t=e.shift();void 0!==t;)t.handleDrop(me),t=e.shift();we=Ee=me=ge=fe=de=null,ye=!1}))}function Je(e){return e.touches?e.touches[0]:e}function Ke(n,e){var o=!1;e.forEach(function(e){var t=e.handleDrag(n);o=!!t.containerBoxChanged||!1,t.containerBoxChanged=!1}),o&&(o=!1,requestAnimationFrame(function(){pe.forEach(function(e){e.layout.invalidateRects(),e.onTranslated()})}))}function Qe(e){var t=e,n=null;return function(e){return!(null!==n||!ve||ye)&&(n=requestAnimationFrame(function(){ve&&!ye&&(Ke(e,t),xe({draggableInfo:e})),n=null}),!0)}}function Ze(e,t){return e.getOptions().autoScrollEnabled?ee(t,e.getScrollMaxSpeed()):function(e){return null}}function $e(o){pe.forEach(function(e){var t=o?e.getOptions().onDragStart:e.getOptions().onDragEnd;if(t){var n={isSource:e===me.container,payload:me.payload};e.isDragRelevant(me.container,me.payload)?n.willAcceptDrop=!0:n.willAcceptDrop=!1,t(n)}})}function et(e,t){if(null!==fe){ve=!0;var n=pe.filter(function(e){return fe.parentElement===e.element})[0];n.setDraggables(),Ee=n.getOptions().lockAxis?n.getOptions().lockAxis.toLowerCase():null,me=function(t){var e=pe.filter(function(e){return t.parentElement===e.element})[0],n=e.draggables.indexOf(t),o=e.getOptions().getGhostParent,r=t.getBoundingClientRect();return{container:e,element:t,size:{offsetHeight:r.bottom-r.top,offsetWidth:r.right-r.left},elementIndex:n,payload:e.getOptions().getChildPayload?e.getOptions().getChildPayload(n):void 0,targetElement:null,position:{x:0,y:0},groupName:e.getOptions().groupName,ghostParent:o?o():null,invalidateShadow:null,mousePosition:null,relevantContainers:null}}(fe),ge=function(e,t,n,o){var r=t.x,i=t.y,a=e.getBoundingClientRect(),l=a.left,s=a.top,c=a.right,u=a.bottom,d=A(n.layout.getContainerRectangles().visibleRect,a),f=d.left+(d.right-d.left)/2,g=d.top+(d.bottom-d.top)/2,m=e.cloneNode(!0);return m.style.zIndex="1000",m.style.boxSizing="border-box",m.style.position="fixed",m.style.top="0px",m.style.left="0px",m.style.transform=null,m.style.removeProperty("transform"),n.shouldUseTransformForGhost()?m.style.transform="translate3d(".concat(l,"px, ").concat(s,"px, 0)"):(m.style.top="".concat(s,"px"),m.style.left="".concat(l,"px")),m.style.width=c-l+"px",m.style.height=u-s+"px",m.style.overflow="visible",m.style.transition=null,m.style.removeProperty("transition"),m.style.pointerEvents="none",m.style.userSelect="none",n.getOptions().dragClass?setTimeout(function(){M(m.firstElementChild,n.getOptions().dragClass);var e=window.getComputedStyle(m.firstElementChild).cursor;Ce=ie(e)}):Ce=ie(o),M(m,n.getOptions().orientation||"vertical"),M(m,v),{ghost:m,centerDelta:{x:f-r,y:g-i},positionDelta:{left:l-r,top:s-i},topLeft:{x:l,y:s}}}(fe,{x:e.clientX,y:e.clientY},me.container,t),me.position={x:e.clientX+ge.centerDelta.x,y:e.clientY+ge.centerDelta.y},me.mousePosition={x:e.clientX,y:e.clientY},de=pe.filter(function(e){return e.isDragRelevant(n,me.payload)}),me.relevantContainers=de,we=Qe(de),xe&&xe({reset:!0,draggableInfo:void 0}),xe=Ze(n,de),de.forEach(function(e){return e.prepareDrag(e,de)}),$e(!0),we(me),Re().appendChild(ge.ghost),De.start()}}var tt=null;function nt(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=ge,r=o.ghost,i=o.topLeft,a=i.x,l=i.y,s=!me.container||me.container.shouldUseTransformForGhost(),c=s?"translate3d(".concat(a,"px,").concat(l,"px, 0)"):null;if(1!==t&&(c=c?"".concat(c," scale(").concat(t,")"):"scale(".concat(t,")")),0<e)return ge.ghost.style.transitionDuration=e+"ms",void requestAnimationFrame(function(){c&&(r.style.transform=c),s||(r.style.left=a+"px",r.style.top=l+"px"),tt=null,n&&(r.style.opacity="0")});null===tt&&(tt=requestAnimationFrame(function(){c&&(r.style.transform=c),s||(r.style.left=a+"px",r.style.top=l+"px"),tt=null,n&&(r.style.opacity="0")}))}function ot(){if(ve&&!he&&!ye){be=!(he=!0);var t=Object.assign({},me,{targetElement:null,position:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER},mousePosition:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER}});de.forEach(function(e){e.handleDrag(t)}),me.targetElement=null,me.cancelDrop=!0,Ue(),he=!1}}"undefined"!=typeof window&&function(){if("undefined"!=typeof window){var e=window.document.head||window.document.getElementsByTagName("head")[0],t=window.document.createElement("style");t.id="smooth-dnd-style-definitions";var n=re(oe);t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(window.document.createTextNode(n)),e.appendChild(t)}}();var rt=(Oe(),{register:function(e){!function(e){pe.push(e),ve&&me&&e.isDragRelevant(me.container,me.payload)&&(de.push(e),e.prepareDrag(e,de),xe&&xe({reset:!0,draggableInfo:void 0}),xe=Ze(e,de),we=Qe(de),e.handleDrag(me))}(e)},unregister:function(e){!function(e){if(pe.splice(pe.indexOf(e),1),ve&&me){me.container===e&&e.fireRemoveElement(),me.targetElement===e.element&&(me.targetElement=null);var t=de.indexOf(e);-1<t&&(de.splice(t,1),xe&&xe({reset:!0,draggableInfo:void 0}),xe=Ze(e,de),we=Qe(de))}}(e)},isDragging:function(){return ve},cancelDrag:ot});function it(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:C.animationDuration;t?(M(e,o),e.style.transitionDuration=n+"ms"):(j(e,o),e.style.removeProperty("transition-duration"))}function at(n){var o=[];return Array.prototype.forEach.call(n.children,function(e){if(e.nodeType===Node.ELEMENT_NODE){var t=e;L(e,f)||(t=function(e){if(It.wrapChild){var t=window.document.createElement("div");return t.className="".concat(f),e.parentElement.insertBefore(t,e),t.appendChild(e),t}return e}(e)),t[p]=0,o.push(t)}else n.removeChild(e)}),o}function lt(e){var g=e.layout;return function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];return function e(t,n,o,r){var i=4<arguments.length&&void 0!==arguments[4]&&arguments[4];if(r<o)return o;if(o===r){var a=g.getBeginEnd(t[o]),l=a.begin,s=a.end;return i?n<(s+l)/2?o:o+1:o}var c=Math.floor((r+o)/2),u=g.getBeginEnd(t[c]),d=u.begin,f=u.end;return n<d?e(t,n,o,c-1,i):f<n?e(t,n,c+1,r,i):i?n<(f+d)/2?c:c+1:c}(e,t,0,e.length-1,n)}}function st(e){var t=e.element,n=e.draggables,o=e.layout,a=e.getOptions,l=function(e){var t=e.element,n=e.draggables,o=e.layout;return function(){n.forEach(function(e){it(e,!1),o.setTranslation(e,0),o.setVisibility(e,!0)}),t[y]&&(t[y].parentNode.removeChild(t[y]),t[y]=null)}}({element:t,draggables:n,layout:o,getOptions:a}),s=(It.dropHandler||Y)({element:t,draggables:n,layout:o,getOptions:a});return function(e,t){var n=t.addedIndex,o=t.removedIndex,r=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(l(),!e.cancelDrop&&(e.targetElement||a().removeOnDropOut||r)){var i={removedIndex:o,addedIndex:null!==n?null!==o&&o<n?n-1:n:null,payload:e.payload};s(i,a().onDrop)}}}function ct(e){var o=e.element,r=e.getOptions,i=null;return function(e){var t=e.draggableInfo,n=i;return null==i&&t.container.element===o&&"copy"!==r().behaviour&&(n=i=t.elementIndex),{removedIndex:n}}}function ut(e){var n=e.draggables,o=e.layout;return function(e){var t=e.dragResult;null!==t.removedIndex&&o.setVisibility(n[t.removedIndex],!1)}}function dt(e){var r=e.element,i=e.layout;return function(e){var t=e.draggableInfo,n=document.elementFromPoint(t.position.x,t.position.y);if(n){var o=z(n,t.relevantContainers);if(o&&o.element===r)return{pos:i.getPosition(t.position)}}return{pos:null}}}function ft(e){var n=e.layout,o=null;return function(e){var t=e.draggableInfo;return null===e.dragResult.pos?o=null:{elementSize:o=o||n.getSize(t.size)}}}function gt(e){var o=e.element;return function(e){var t=e.draggableInfo,n=e.dragResult;!function(e,t){var n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2];t&&n?e.targetElement=t:e.targetElement===t&&(e.targetElement=null)}(t,o,!!n.pos)}}function mt(){return function(e){return null!==e.dragResult.pos?{addedIndex:0}:{addedIndex:null}}}function pt(e){var r=e.layout,i=null;return function(e){var t=e.dragResult.addedIndex;if(t===i)return null;i=t;var n=r.getBeginEndOfContainer(),o=n.begin;n.end;return{shadowBeginEnd:{rect:r.getTopLeftOfElementBegin(o)}}}}function vt(e){var g=e.layout,m=e.element,p=e.getOptions,v=null;return function(e){var t=e.dragResult,n=t.elementSize,o=t.shadowBeginEnd,r=t.addedIndex,i=t.dropPlaceholderContainer,a=p();if(a.dropPlaceholder){var l="boolean"==typeof a.dropPlaceholder?{}:a.dropPlaceholder,s=l.animationDuration,c=l.className,u=l.showOnTop;if(null===r)return i&&null!==v&&m.removeChild(i),v=null,{dropPlaceholderContainer:void 0};if(!i){var d=document.createElement("div"),f=document.createElement("div");f.className=E,d.className="".concat(w," ").concat(c||b),(i=document.createElement("div")).className="".concat(x),i.style.position="absolute",void 0!==s&&(i.style.transition="all ".concat(s,"ms ease")),i.appendChild(f),f.appendChild(d),g.setSize(i.style,n+"px"),i.style.pointerEvents="none",u?m.appendChild(i):m.insertBefore(i,m.firstElementChild)}return v!==r&&o.dropArea&&g.setBegin(i.style,o.dropArea.begin-g.getBeginEndOfContainer().begin+"px"),v=r,{dropPlaceholderContainer:i}}return null}}function ht(e){var o=Et(e);return function(e){var t=e.draggableInfo,n=e.dragResult;return t.invalidateShadow?o({draggableInfo:t,dragResult:n}):null}}function yt(e){var o=function(e){var i=e.draggables,a=lt({layout:e.layout});return function(e){var t=e.dragResult,n=t.shadowBeginEnd,o=t.pos;if(n)return n.begin+n.beginAdjustment<=o&&n.end>=o?null:o<n.begin+n.beginAdjustment?a(i,o):o>n.end?a(i,o)+1:i.length;var r=a(i,o,!0);return null!==r?r:i.length}}(e);return function(e){var t=e.dragResult,n=null;return null!==t.pos&&null===(n=o({dragResult:t}))&&(n=t.addedIndex),{addedIndex:n}}}function bt(){var r=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.shadowBeginEnd;n!==r&&null!==r&&o&&(o.beginAdjustment=0),r=n}}function wt(e){var u=e.element,d=e.draggables,f=e.layout,g=e.getOptions,m=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.removedIndex,r=t.elementSize;if(null===o)if(null!==n){if(!m){var i=f.getBeginEndOfContainer();i.end=i.begin+f.getSize(u);var a=f.getScrollSize(u)>f.getSize(u)?i.begin+f.getScrollSize(u)-f.getScrollValue(u):i.end,l=0<d.length?f.getBeginEnd(d[d.length-1]).end-d[d.length-1][p]:i.begin;if(a<l+r){(m=window.document.createElement("div")).className=h+" "+g().orientation;var s=0<d.length?r+l-a:r;return f.setSize(m.style,"".concat(s,"px")),u.appendChild(m),u[y]=m,{containerBoxChanged:!0}}}}else if(m){f.setTranslation(m,0);var c=m;return m=null,u.removeChild(c),{containerBoxChanged:!(u[y]=null)}}}}function xt(e){var s=e.draggables,c=e.layout,u=null,d=null;return function(e){var t=e.dragResult,n=t.addedIndex,o=t.removedIndex,r=t.elementSize;if(n!==u||o!==d){for(var i=0;i<s.length;i++)if(i!==o){var a=s[i],l=0;null!==o&&o<i&&(l-=r),null!==n&&n<=i&&(l+=r),c.setTranslation(a,l)}return{addedIndex:u=n,removedIndex:d=o}}}}function Et(e){var x=e.draggables,E=e.layout,C=null;return function(e){var t=e.draggableInfo,n=e.dragResult,o=n.addedIndex,r=n.removedIndex,i=n.elementSize,a=n.pos,l=n.shadowBeginEnd;if(null===a)return{shadowBeginEnd:C=null};if(null===o||!t.invalidateShadow&&o===C)return null;var s=o-1,c=Number.MIN_SAFE_INTEGER,u=0,d=0,f=null,g=null;if(s===r&&s--,-1<s){var m=E.getSize(x[s]);if(g=E.getBeginEnd(x[s]),i<m){var p=(m-i)/2;c=g.end-p}else c=g.end;u=g.end}else g={end:E.getBeginEndOfContainer().begin},u=E.getBeginEndOfContainer().begin;var v=Number.MAX_SAFE_INTEGER,h=o;if(h===r&&h++,h<x.length){var y=E.getSize(x[h]);if(f=E.getBeginEnd(x[h]),i<y){var b=(y-i)/2;v=f.begin+b}else v=f.begin;d=f.begin}else f={begin:E.getContainerRectangles().rect.end},d=E.getContainerRectangles().rect.end-E.getContainerRectangles().rect.begin;var w=g&&f?E.getTopLeftOfElementBegin(g.end):null;return C=o,{shadowBeginEnd:{dropArea:{begin:u,end:d},begin:c,end:v,rect:w,beginAdjustment:l?l.beginAdjustment:0}}}}function Ct(){var a=null;return function(e){var t=e.dragResult,n=t.pos,o=t.addedIndex,r=t.shadowBeginEnd;if(null!==n){if(null!=o&&null===a){if(n<r.begin){var i=n-r.begin-5;r.beginAdjustment=i}a=o}}else a=null}}function Dt(e){var t=e.getOptions,n=!1,o=t();return function(e){var t=!!e.dragResult.pos;t!==n&&((n=t)?o.onDragEnter&&o.onDragEnter():o.onDragLeave&&o.onDragLeave())}}function St(e){var t=e.getOptions,s=null,c=t();return function(e){var t=e.dragResult,n=t.addedIndex,o=t.removedIndex,r=e.draggableInfo,i=r.payload,a=r.element;if(c.onDropReady&&null!==n&&s!==n){var l=s=n;null!==o&&o<n&&l--,c.onDropReady({addedIndex:l,removedIndex:o,payload:i,element:a?a.firstElementChild:void 0})}}}function Ot(e){return"drop-zone"===e.getOptions().behaviour?Rt(e)(ct,ut,dt,ft,gt,mt,pt,Dt,St):Rt(e)(ct,ut,dt,ft,gt,ht,yt,bt,wt,xt,Et,vt,Ct,Dt,St)}function Rt(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.map(function(e){return e(i)}),r=null;return function(n){return r=o.reduce(function(e,t){return Object.assign(e,t({draggableInfo:n,dragResult:e}))},r||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}function At(d){return function(e){var n=Object.assign({},C,e),t=null,o=null,r=function(e,t){var n=at(e),o=t();return M(e,"".concat(g," ").concat(o.orientation)),{element:e,draggables:n,getOptions:t,layout:q(e,o.orientation,o.animationDuration)}}(d,u),i=Ot(r),a=st(r),l=function(t,n){var o=[];function e(){o&&(o.forEach(function(e){return e.removeEventListener("scroll",n)}),window.removeEventListener("scroll",n))}return function(){var e=t;for(;e;)(R(e,"x")||R(e,"y"))&&o.push(e),e=e.parentElement}(),{dispose:function(){e(),o=null},start:function(){o&&(o.forEach(function(e){return e.addEventListener("scroll",n)}),window.addEventListener("scroll",n))},stop:e}}(d,function(){r.layout.invalidateRects(),s()});function s(){null!==o&&(o.invalidateShadow=!0,t=i(o),o.invalidateShadow=!1)}function c(e,t){for(var n=at(t),o=0;o<n.length;o++)e[o]=n[o];for(var r=0;r<e.length-n.length;r++)e.pop()}function u(){return n}return{element:d,draggables:r.draggables,isDragRelevant:function(e){var r=e.element,i=e.getOptions;return function(e,t){var n=i();if(n.shouldAcceptDrop)return n.shouldAcceptDrop(e.getOptions(),t);var o=e.getOptions();return"copy"!==n.behaviour&&(N(r,"."+f)!==e.element&&(e.element===r||!(!o.groupName||o.groupName!==n.groupName)))}}(r),layout:r.layout,dispose:function(e){l.dispose(),function(t){It.wrapChild&&Array.prototype.forEach.call(t.children,function(e){e.nodeType===Node.ELEMENT_NODE&&L(e,f)&&(t.insertBefore(e.firstElementChild,e),t.removeChild(e))})}(e.element)},prepareDrag:function(e,t){var n=e.element,o=r.draggables;c(o,n),e.layout.invalidateRects(),o.forEach(function(e){return it(e,!0,u().animationDuration)}),l.start()},handleDrag:function(e){return t=i(o=e)},handleDrop:function(e){l.stop(),t&&t.dropPlaceholderContainer&&d.removeChild(t.dropPlaceholderContainer),o=null,i=Ot(r),a(e,t),t=null},fireRemoveElement:function(){a(o,Object.assign({},t,{addedIndex:null}),!0),t=null},getDragResult:function(){return t},getTranslateCalculator:function(e){return xt(r)(e)},onTranslated:function(){s()},setDraggables:function(){c(r.draggables,d)},getScrollMaxSpeed:function(){return It.maxScrollSpeed},shouldUseTransformForGhost:function(){return!0===It.useTransformForGhost},getOptions:u,setOptions:function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];n=!1===t?Object.assign({},C,e):Object.assign({},C,n,e)}}}}var It=function(e,t){var n=At(e)(t);return e[r]=n,rt.register(n),{dispose:function(){rt.unregister(n),n.dispose(n)},setOptions:function(e,t){n.setOptions(e,t)}}};function Bt(e,t,n){Object.defineProperty(e,n,{set:function(e){t[n]=e},get:function(){return t[n]}})}It.wrapChild=!0,It.cancelDrag=function(){rt.cancelDrag()},It.isDragging=function(){return rt.isDragging()};function Pt(e,t){return console.warn('default export is deprecated. please use named export "smoothDnD"'),It(e,t)}Pt.cancelDrag=function(){It.cancelDrag()},Pt.isDragging=function(){return It.isDragging()},Bt(Pt,It,"useTransformForGhost"),Bt(Pt,It,"maxScrollSpeed"),Bt(Pt,It,"wrapChild"),Bt(Pt,It,"dropHandler"),e.smoothDnD=It,e.constants=n,e.dropHandlers=k,e.default=Pt,Object.defineProperty(e,"__esModule",{value:!0})});


/***/ }),

/***/ "./libs/ngx-smooth-dnd/index.ts":
/*!**************************************!*\
  !*** ./libs/ngx-smooth-dnd/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./public_api */ "./libs/ngx-smooth-dnd/public_api.ts"), exports);


/***/ }),

/***/ "./libs/ngx-smooth-dnd/public_api.ts":
/*!*******************************************!*\
  !*** ./libs/ngx-smooth-dnd/public_api.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ngx_smooth_dnd_module_1 = __webpack_require__(/*! ./src/ngx-smooth-dnd.module */ "./libs/ngx-smooth-dnd/src/ngx-smooth-dnd.module.ts");
exports.NgxSmoothDnDModule = ngx_smooth_dnd_module_1.NgxSmoothDnDModule;
var container_component_1 = __webpack_require__(/*! ./src/container/container.component */ "./libs/ngx-smooth-dnd/src/container/container.component.ts");
exports.ContainerComponent = container_component_1.ContainerComponent;
var draggable_component_1 = __webpack_require__(/*! ./src/draggable/draggable.component */ "./libs/ngx-smooth-dnd/src/draggable/draggable.component.ts");
exports.DraggableComponent = draggable_component_1.DraggableComponent;
tslib_1.__exportStar(__webpack_require__(/*! smooth-dnd */ "../smooth-dnd/dist/index.js"), exports);


/***/ }),

/***/ "./libs/ngx-smooth-dnd/src/container/container.component.ts":
/*!******************************************************************!*\
  !*** ./libs/ngx-smooth-dnd/src/container/container.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var draggable_component_1 = __webpack_require__(/*! ../draggable/draggable.component */ "./libs/ngx-smooth-dnd/src/draggable/draggable.component.ts");
var smooth_dnd_1 = __webpack_require__(/*! smooth-dnd */ "../smooth-dnd/dist/index.js");
smooth_dnd_1.smoothDnD.dropHandler = smooth_dnd_1.dropHandlers.reactDropHandler().handler;
smooth_dnd_1.smoothDnD.wrapChild = false;
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.dragStart = new core_1.EventEmitter();
        this.dragEnd = new core_1.EventEmitter();
        this.drop = new core_1.EventEmitter();
        this.dropReady = new core_1.EventEmitter();
        this.dragEnter = new core_1.EventEmitter();
        this.dragLeave = new core_1.EventEmitter();
    }
    ContainerComponent.prototype.ngAfterViewInit = function () {
        this.container = smooth_dnd_1.smoothDnD(this.containerElementRef.nativeElement, this.getOptions());
        if (this.useTransformForGhost)
            this.container.useTransformForGhost = this.useTransformForGhost;
    };
    ContainerComponent.prototype.ngOnDestroy = function () {
        this.container.dispose();
    };
    ContainerComponent.prototype.getOptions = function () {
        var _this = this;
        var options = {};
        if (this.orientation)
            options.orientation = this.orientation;
        if (this.behaviour)
            options.behaviour = this.behaviour;
        if (this.groupName)
            options.groupName = this.groupName;
        if (this.lockAxis)
            options.lockAxis = this.lockAxis;
        if (this.dragHandleSelector)
            options.dragHandleSelector = this.dragHandleSelector;
        if (this.nonDragAreaSelector)
            options.nonDragAreaSelector = this.nonDragAreaSelector;
        if (this.dragBeginDelay)
            options.dragBeginDelay = this.dragBeginDelay;
        if (this.animationDuration)
            options.animationDuration = this.animationDuration;
        if (this.autoScrollEnabled)
            options.autoScrollEnabled = this.autoScrollEnabled;
        if (this.dragClass)
            options.dragClass = this.dragClass;
        if (this.dropClass)
            options.dropClass = this.dropClass;
        if (this.dropPlaceholder)
            options.dropPlaceholder = this.dropPlaceholder;
        if (this.dragStart)
            options.onDragStart = function (info) {
                _this.getNgZone(function () {
                    _this.dragStart.emit(info);
                });
            };
        if (this.dragEnd)
            options.onDragEnd = function (info) {
                _this.getNgZone(function () {
                    _this.dragEnd.emit(info);
                });
            };
        if (this.drop)
            options.onDrop = function (dropResult) {
                _this.getNgZone(function () {
                    _this.drop.emit(dropResult);
                });
            };
        if (this.getChildPayload)
            options.getChildPayload = this.getChildPayload;
        if (this.shouldAnimateDrop)
            options.shouldAnimateDrop = this.shouldAnimateDrop;
        if (this.shouldAcceptDrop)
            options.shouldAcceptDrop = this.shouldAcceptDrop;
        if (this.dragEnter)
            options.onDragEnter = function () { return _this.getNgZone(function () { return _this.dragEnter.emit(); }); };
        if (this.dragLeave)
            options.onDragLeave = function () { return _this.getNgZone(function () { return _this.dragLeave.emit(); }); };
        if (this.dropReady)
            options.onDropReady = function (dropResult) {
                _this.getNgZone(function () {
                    _this.dropReady.emit(dropResult);
                });
            };
        if (this.getGhostParent)
            options.getGhostParent = this.getGhostParent;
        return options;
    };
    ContainerComponent.prototype.getNgZone = function (clb) {
        this._ngZone.run(function () {
            clb();
        });
    };
    ContainerComponent.ctorParameters = function () { return [
        { type: core_1.NgZone }
    ]; };
    tslib_1.__decorate([
        core_1.ContentChildren(draggable_component_1.DraggableComponent),
        tslib_1.__metadata("design:type", core_1.QueryList)
    ], ContainerComponent.prototype, "draggables", void 0);
    tslib_1.__decorate([
        core_1.ViewChild("container", { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], ContainerComponent.prototype, "containerElementRef", void 0);
    tslib_1.__decorate([
        core_1.Input("orientation"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "orientation", void 0);
    tslib_1.__decorate([
        core_1.Input("behaviour"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "behaviour", void 0);
    tslib_1.__decorate([
        core_1.Input("groupName"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "groupName", void 0);
    tslib_1.__decorate([
        core_1.Input("lockAxis"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "lockAxis", void 0);
    tslib_1.__decorate([
        core_1.Input("dragHandleSelector"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragHandleSelector", void 0);
    tslib_1.__decorate([
        core_1.Input("nonDragAreaSelector"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "nonDragAreaSelector", void 0);
    tslib_1.__decorate([
        core_1.Input("dragBeginDelay"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragBeginDelay", void 0);
    tslib_1.__decorate([
        core_1.Input("animationDuration"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "animationDuration", void 0);
    tslib_1.__decorate([
        core_1.Input("autoScrollEnabled"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "autoScrollEnabled", void 0);
    tslib_1.__decorate([
        core_1.Input("dragClass"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragClass", void 0);
    tslib_1.__decorate([
        core_1.Input("dropClass"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "dropClass", void 0);
    tslib_1.__decorate([
        core_1.Input("dropPlaceholder"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "dropPlaceholder", void 0);
    tslib_1.__decorate([
        core_1.Input("removeOnDropOut"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "removeOnDropOut", void 0);
    tslib_1.__decorate([
        core_1.Input("useTransformForGhost"),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "useTransformForGhost", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragStart", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragEnd", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "drop", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "dropReady", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], ContainerComponent.prototype, "getChildPayload", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], ContainerComponent.prototype, "shouldAnimateDrop", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], ContainerComponent.prototype, "shouldAcceptDrop", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragEnter", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragLeave", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], ContainerComponent.prototype, "getGhostParent", void 0);
    ContainerComponent = tslib_1.__decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: "smooth-dnd-container",
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./container.component.html */ "../node_modules/raw-loader/dist/cjs.js!./libs/ngx-smooth-dnd/src/container/container.component.html")).default
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.NgZone])
    ], ContainerComponent);
    return ContainerComponent;
}());
exports.ContainerComponent = ContainerComponent;


/***/ }),

/***/ "./libs/ngx-smooth-dnd/src/draggable/draggable.component.ts":
/*!******************************************************************!*\
  !*** ./libs/ngx-smooth-dnd/src/draggable/draggable.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var smooth_dnd_1 = __webpack_require__(/*! smooth-dnd */ "../smooth-dnd/dist/index.js");
var wrapperClass = smooth_dnd_1.constants.wrapperClass, animationClass = smooth_dnd_1.constants.animationClass;
var constantClasses = (_a = {},
    _a[wrapperClass] = true,
    _a[animationClass] = true,
    _a);
var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
    }
    DraggableComponent.prototype.ngAfterViewInit = function () {
        this.wrapper.nativeElement.parentNode.className = smooth_dnd_1.constants.wrapperClass;
    };
    tslib_1.__decorate([
        core_1.ViewChild('draggableWrapper', { static: true }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], DraggableComponent.prototype, "wrapper", void 0);
    DraggableComponent = tslib_1.__decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'smooth-dnd-draggable',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./draggable.component.html */ "../node_modules/raw-loader/dist/cjs.js!./libs/ngx-smooth-dnd/src/draggable/draggable.component.html")).default
        })
    ], DraggableComponent);
    return DraggableComponent;
}());
exports.DraggableComponent = DraggableComponent;


/***/ }),

/***/ "./libs/ngx-smooth-dnd/src/ngx-smooth-dnd.module.ts":
/*!**********************************************************!*\
  !*** ./libs/ngx-smooth-dnd/src/ngx-smooth-dnd.module.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var container_component_1 = __webpack_require__(/*! ./container/container.component */ "./libs/ngx-smooth-dnd/src/container/container.component.ts");
var draggable_component_1 = __webpack_require__(/*! ./draggable/draggable.component */ "./libs/ngx-smooth-dnd/src/draggable/draggable.component.ts");
var NgxSmoothDnDModule = /** @class */ (function () {
    function NgxSmoothDnDModule() {
    }
    NgxSmoothDnDModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [container_component_1.ContainerComponent, draggable_component_1.DraggableComponent],
            exports: [container_component_1.ContainerComponent, draggable_component_1.DraggableComponent]
        })
    ], NgxSmoothDnDModule);
    return NgxSmoothDnDModule;
}());
exports.NgxSmoothDnDModule = NgxSmoothDnDModule;


/***/ }),

/***/ "./node_modules/@angular/core/fesm5 lazy recursive":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/core/fesm5 lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@angular/core/fesm5 lazy recursive";

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var pages_1 = __webpack_require__(/*! ../pages */ "./src/pages/index.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pages = pages_1.default;
        this.isNavOpen = true;
        this.navigatorClass = "navigator" + (this.isNavOpen ? ' open' : ' closed');
        this.navButtonClass = "nav-button" + (this.isNavOpen ? ' open' : ' closed');
        this.headerClass = "header" + (this.isNavOpen ? ' open' : ' closed');
        this.selectedPage = pages_1.default[0].pages[0];
    }
    AppComponent.prototype.selectPage = function (page) {
        this.selectedPage = page;
    };
    AppComponent.prototype.toggleNav = function () {
        this.isNavOpen = !this.isNavOpen;
        this.navigatorClass = "navigator" + (this.isNavOpen ? ' open' : ' closed');
        this.navButtonClass = "nav-button" + (this.isNavOpen ? ' open' : ' closed');
        this.headerClass = "header" + (this.isNavOpen ? ' open' : ' closed');
    };
    AppComponent.prototype.openCode = function () {
        window.open(this.selectedPage.url, '_blank');
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var ngx_smooth_dnd_1 = __webpack_require__(/*! ngx-smooth-dnd */ "./libs/ngx-smooth-dnd/index.ts");
var pages = __webpack_require__(/*! ../pages */ "./src/pages/index.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ngx_smooth_dnd_1.NgxSmoothDnDModule
            ],
            declarations: [app_component_1.AppComponent].concat(Object.keys(pages).filter(function (p) { return p !== 'default'; }).map(function (p) { return pages[p]; })),
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/pages/cards.ts":
/*!****************************!*\
  !*** ./src/pages/cards.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var columnNames = ['Lorem', 'Ipsum', 'Consectetur', 'Eiusmod'];
var cardColors = ['azure', 'beige', 'bisque', 'blanchedalmond', 'burlywood', 'cornsilk', 'gainsboro', 'ghostwhite', 'ivory', 'khaki'];
var pickColor = function () {
    var rand = Math.floor((Math.random() * 10));
    return cardColors[rand];
};
var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
        this.scene = {
            type: 'container',
            props: {
                orientation: 'horizontal'
            },
            children: utils_1.generateItems(4, function (i) { return ({
                id: "column" + i,
                type: 'container',
                name: columnNames[i],
                props: {
                    orientation: 'vertical',
                    className: 'card-container'
                },
                children: utils_1.generateItems(+(Math.random() * 10).toFixed() + 5, function (j) { return ({
                    type: 'draggable',
                    id: "" + i + j,
                    props: {
                        className: 'card',
                        style: { backgroundColor: pickColor() }
                    },
                    data: lorem.slice(0, Math.floor(Math.random() * 150) + 30)
                }); })
            }); })
        };
        this.items = utils_1.generateItems(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    CardsComponent.prototype.onColumnDrop = function (dropResult) {
        var scene = Object.assign({}, this.scene);
        scene.children = utils_1.applyDrag(scene.children, dropResult);
        this.scene = scene;
    };
    CardsComponent.prototype.onCardDrop = function (columnId, dropResult) {
        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            var scene = Object.assign({}, this.scene);
            var column = scene.children.filter(function (p) { return p.id === columnId; })[0];
            var columnIndex = scene.children.indexOf(column);
            var newColumn = Object.assign({}, column);
            newColumn.children = utils_1.applyDrag(newColumn.children, dropResult);
            scene.children.splice(columnIndex, 1, newColumn);
            this.scene = scene;
        }
    };
    CardsComponent.prototype.getCardPayload = function (columnId) {
        var _this = this;
        return function (index) {
            return _this.scene.children.filter(function (p) { return p.id === columnId; })[0].children[index];
        };
    };
    CardsComponent.prototype.log = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log.apply(console, params);
    };
    CardsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-cards',
            template: "\n\t\t<div class=\"card-scene\">\n\t\t\t<smooth-dnd-container \n\t\t\t\t[orientation]=\"'horizontal'\" \n\t\t\t\t(drop)=\"onColumnDrop($event)\" \n\t\t\t\t[dragHandleSelector]=\"'.column-drag-handle'\"\n\t\t\t>\n\t\t\t\t<smooth-dnd-draggable *ngFor=\"let column of scene.children\">\n\t\t\t\t\t<div [ngClass]=\"column.props.className\">\n\t\t\t\t\t\t<div class=\"card-column-header\">\n\t\t\t\t\t\t\t<span class=\"column-drag-handle\">&#x2630;</span>\n\t\t\t\t\t\t\t{{column.name}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<smooth-dnd-container \n\t\t\t\t\t\t\t[groupName]=\"'col'\"\n\t\t\t\t\t\t\t(drop)=\"onCardDrop(column.id, $event)\"\n\t\t\t\t\t\t\t[getChildPayload]=\"getCardPayload(column.id)\"\n\t\t\t\t\t\t\t[dragClass]=\"'card-ghost'\"\n\t\t\t\t\t\t\t[dropClass]=\"'card-ghost-drop'\"\n\t\t\t\t\t\t\t(dragStart)=\"log('drag start', $event)\"\n\t\t\t\t\t\t\t(dragEnd)=\"log('drag end', $event)\"\t\t\n\t\t\t\t\t\t\t(dropReady)=\"log('drop ready', $event)\"\t\t\t\t\t\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let card of column.children\">\n\t\t\t\t\t\t\t\t<div [ngClass]=\"card.props.className\" [ngStyle]=\"card.props.style\">\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t{{card.data}}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t\t\t</smooth-dnd-container>\n\t\t\t\t\t</div>\n\t\t\t\t</smooth-dnd-draggable>\n\t\t\t</smooth-dnd-container>\n    </div>\n\t"
        })
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;


/***/ }),

/***/ "./src/pages/copy.ts":
/*!***************************!*\
  !*** ./src/pages/copy.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var CopyComponent = /** @class */ (function () {
    function CopyComponent() {
        this.items1 = utils_1.generateItems(15, function (i) { return ({ id: '1' + i, data: "Source Draggable - " + i }); });
        this.items2 = utils_1.generateItems(15, function (i) { return ({ id: '2' + i, data: "Draggable 2 - " + i }); });
        this.items3 = utils_1.generateItems(15, function (i) { return ({ id: '3' + i, data: "Draggable 3 - " + i }); });
        this.getChildPayload1 = this.getChildPayload1.bind(this);
        this.getChildPayload2 = this.getChildPayload2.bind(this);
        this.getChildPayload3 = this.getChildPayload3.bind(this);
    }
    CopyComponent.prototype.onDrop = function (collection, dropResult) {
        this[collection] = utils_1.applyDrag(this[collection], dropResult);
    };
    CopyComponent.prototype.getChildPayload1 = function (index) {
        return this.items1[index];
    };
    CopyComponent.prototype.getChildPayload2 = function (index) {
        return this.items2[index];
    };
    CopyComponent.prototype.getChildPayload3 = function (index) {
        return this.items3[index];
    };
    CopyComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-copy',
            template: "\n\t\t<div [ngStyle]=\"{ 'display': 'flex', 'justifyContent': 'stretch', 'marginTop': '50px', 'marginRight': '50px' }\">\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [behaviour]=\"'copy'\" [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload1\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items1\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload2\" (drop)=\"onDrop('items2', $event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items2\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload3\" (drop)=\"onDrop('items3', $event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items3\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t"
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CopyComponent);
    return CopyComponent;
}());
exports.CopyComponent = CopyComponent;


/***/ }),

/***/ "./src/pages/drag-class.ts":
/*!*********************************!*\
  !*** ./src/pages/drag-class.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var DragClassComponent = /** @class */ (function () {
    function DragClassComponent() {
        this.items = utils_1.generateItems(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    DragClassComponent.prototype.onDrop = function (dropResult) {
        this.items = utils_1.applyDrag(this.items, dropResult);
    };
    DragClassComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-drag-class',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page\">\n\t\t\t\t<smooth-dnd-container [dragClass]=\"'opacity-ghost'\" [dropClass]=\"'opacity-ghost-drop'\" (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], DragClassComponent);
    return DragClassComponent;
}());
exports.DragClassComponent = DragClassComponent;


/***/ }),

/***/ "./src/pages/drag-delay.ts":
/*!*********************************!*\
  !*** ./src/pages/drag-delay.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var DragDelayComponent = /** @class */ (function () {
    function DragDelayComponent() {
        this.items = utils_1.generateItems(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    DragDelayComponent.prototype.onDrop = function (dropResult) {
        this.items = utils_1.applyDrag(this.items, dropResult);
    };
    DragDelayComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-drag-delay',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page\">\n\t\t\t\t<smooth-dnd-container [dragBeginDelay]=\"500\" [dragClass]=\"'form-ghost'\" [dropClass]=\"'form-ghost-drop'\" (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], DragDelayComponent);
    return DragDelayComponent;
}());
exports.DragDelayComponent = DragDelayComponent;


/***/ }),

/***/ "./src/pages/drag-handle.ts":
/*!**********************************!*\
  !*** ./src/pages/drag-handle.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var DragHandleComponent = /** @class */ (function () {
    function DragHandleComponent() {
        this.items = utils_1.generateItems(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    DragHandleComponent.prototype.onDrop = function (dropResult) {
        this.items = utils_1.applyDrag(this.items, dropResult);
    };
    DragHandleComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-drag-handle',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page\">\n\t\t\t\t<smooth-dnd-container [dragHandleSelector]=\"'.column-drag-handle'\" (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t<span class=\"column-drag-handle\" style=\"float:left; padding:0 10px;\">&#x2630;</span>\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], DragHandleComponent);
    return DragHandleComponent;
}());
exports.DragHandleComponent = DragHandleComponent;


/***/ }),

/***/ "./src/pages/form.ts":
/*!***************************!*\
  !*** ./src/pages/form.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var formInitial = [
    { type: 'header' },
    { type: 'fullname', label: 'Full Name' },
    { type: 'email', label: 'E Mail' },
    { type: 'address', label: 'Address' },
    { type: 'dropdown', label: 'Options' },
    { type: 'checkbox', label: 'Checkbox Options' },
    { type: 'radio', label: 'Radio Options' },
    { type: 'submit' }
];
var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.items = utils_1.generateItems(50, function (i) { return ({ data: 'Draggable ' + i }); });
        this.form = formInitial.slice();
    }
    FormComponent.prototype.onDrop = function (dropResult) {
        this.form = utils_1.applyDrag(this.form, dropResult);
    };
    FormComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-form',
            template: "\n\t\t<div class=\"form-demo\">\n\t\t\t<div class=\"form\">\n\t\t\t\t<smooth-dnd-container \n\t\t\t\t\t(drop)=\"onDrop($event)\" \n\t\t\t\t\t[nonDragAreaSelector]=\"'.field'\"\n\t\t\t\t\t[dragClass]=\"'form-ghost'\" \n\t\t\t\t\t[dropClass]=\"'form-ghost-drop'\"\n\t\t\t\t>            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let field of form\">\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"form-line\"\n\t\t\t\t\t>\n            <div class=\"label\">\n              <span>{{field.label}}</span>\n            </div>\n\t\t\t\t\t\t<div class=\"field\" [ngSwitch]=\"field.type\">\n\t\t\t\t\t\t\t<h2 *ngSwitchCase=\"'header'\" class=\"field\">\n\t\t\t\t\t\t\t\tForm Header\n\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'fullname'\" class=\"field-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" /><input type=\"text\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'email'\" class=\"field\">\n\t\t\t\t\t\t\t\t<input type=\"email\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'address'\" class=\"field\">\n\t\t\t\t\t\t\t\t<textarea></textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'dropdown'\" class=\"field\">\n\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t<option value=\"1\">Option 1</option>\t\n\t\t\t\t\t\t\t\t\t<option value=\"2\" selected>Option 2</option>\t\n\t\t\t\t\t\t\t\t\t<option value=\"3\">Option 3</option>\t\n\t\t\t\t\t\t\t\t\t<option value=\"4\">Option 4</option>\t\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'checkbox'\" class=\"field\">\n\t\t\t\t\t\t\t\t<div><label><input type=\"checkbox\" name=\"r\" /> option 1</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"checkbox\" name=\"r\" /> option 2</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"checkbox\" name=\"r\" /> option 3</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"checkbox\" name=\"r\" /> option 4</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"checkbox\" name=\"r\" /> option 5</label></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'radio'\" class=\"field\">\n\t\t\t\t\t\t\t\t<div><label><input type=\"radio\" name=\"r\" /> option 1</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"radio\" name=\"r\" /> option 2</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"radio\" name=\"r\" /> option 3</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"radio\" name=\"r\" /> option 4</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"radio\" name=\"r\" /> option 5</label></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'submit'\" class=\"field\">\n\t\t\t\t\t\t\t\t<button class=\"form-submit-button\">Submit</button>\n\t\t\t\t\t\t\t</div>\n            </div>\n          </div>\t\t\t\t\t\t\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;


/***/ }),

/***/ "./src/pages/groups.ts":
/*!*****************************!*\
  !*** ./src/pages/groups.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var GroupsComponent = /** @class */ (function () {
    function GroupsComponent() {
        this.items1 = utils_1.generateItems(15, function (i) { return ({ id: '1' + i, data: "Draggable 1 - " + i }); });
        this.items2 = utils_1.generateItems(15, function (i) { return ({ id: '2' + i, data: "Draggable 2 - " + i }); });
        this.items3 = utils_1.generateItems(15, function (i) { return ({ id: '3' + i, data: "Draggable 3 - " + i }); });
        this.items4 = utils_1.generateItems(15, function (i) { return ({ id: '4' + i, data: "Draggable 4 - " + i }); });
        this.getChildPayload1 = this.getChildPayload1.bind(this);
        this.getChildPayload2 = this.getChildPayload2.bind(this);
        this.getChildPayload3 = this.getChildPayload3.bind(this);
        this.getChildPayload4 = this.getChildPayload4.bind(this);
    }
    GroupsComponent.prototype.onDrop = function (collection, dropResult) {
        this[collection] = utils_1.applyDrag(this[collection], dropResult);
    };
    GroupsComponent.prototype.getChildPayload1 = function (index) {
        return this.items1[index];
    };
    GroupsComponent.prototype.getChildPayload2 = function (index) {
        return this.items2[index];
    };
    GroupsComponent.prototype.getChildPayload3 = function (index) {
        return this.items3[index];
    };
    GroupsComponent.prototype.getChildPayload4 = function (index) {
        return this.items4[index];
    };
    GroupsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-groups',
            template: "\n\t\t<div [ngStyle]=\"{ 'display': 'flex', 'justifyContent': 'stretch', 'marginTop': '50px', 'marginRight': '50px' }\">\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload1\" (drop)=\"onDrop('items1', $event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items1\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload2\" (drop)=\"onDrop('items2', $event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items2\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload3\" (drop)=\"onDrop('items3', $event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items3\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload4\" (drop)=\"onDrop('items4', $event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items4\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GroupsComponent);
    return GroupsComponent;
}());
exports.GroupsComponent = GroupsComponent;


/***/ }),

/***/ "./src/pages/index.ts":
/*!****************************!*\
  !*** ./src/pages/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./simple */ "./src/pages/simple.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./simple-scroller */ "./src/pages/simple-scroller.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./simple-horizontal */ "./src/pages/simple-horizontal.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./groups */ "./src/pages/groups.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./copy */ "./src/pages/copy.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./nested */ "./src/pages/nested.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./drag-class */ "./src/pages/drag-class.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./drag-delay */ "./src/pages/drag-delay.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./drag-handle */ "./src/pages/drag-handle.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lock-axis */ "./src/pages/lock-axis.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./transition-duration */ "./src/pages/transition-duration.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./cards */ "./src/pages/cards.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./form */ "./src/pages/form.ts"), exports);
var getUrl = function (pagename) {
    return "https://github.com/kutlugsahin/ngx-smooth-dnd/tree/master/apps/demo/src/pages/" + pagename;
};
exports.default = [
    {
        title: 'Showcase',
        pages: [
            {
                title: 'Card board', page: 'cards', url: getUrl('cards.ts')
            },
            {
                title: 'Form elements', page: 'form', url: getUrl('form.ts')
            }
        ]
    }, {
        title: 'Basic Sortables',
        pages: [
            {
                title: 'Sortable with default options', page: 'simple', url: getUrl('simple.ts')
            },
            {
                title: 'Sortable inside scroller', page: 'simple-scroller', url: getUrl('simple-scroller.ts')
            }, {
                title: 'Horizontal sortable', page: 'simple-horizontal', url: getUrl('simple-horizontal.ts')
            }
        ]
    },
    {
        title: 'Groups',
        pages: [
            {
                title: 'DnD between groups', page: 'groups', url: getUrl('groups.ts')
            },
            {
                title: 'Copy draggable', page: 'copy', url: getUrl('copy.ts')
            }
        ]
    },
    {
        title: 'Nested Groups',
        pages: [
            {
                title: 'Nested vertical sortable', page: 'nested', url: getUrl('nested.ts')
            }
        ]
    },
    {
        title: 'Advanced options',
        pages: [
            {
                title: 'Lock axis', page: 'lock-axis', url: getUrl('lock-axis.ts')
            },
            {
                title: 'Drag begin delay of 500ms', page: 'drag-delay', url: getUrl('drag-delay.ts')
            },
            {
                title: 'Drag handle', page: 'drag-handle', url: getUrl('drag-handle.ts')
            },
            {
                title: 'Drag and Drop classses', page: 'drag-class', url: getUrl('drag-class.ts')
            },
            {
                title: 'Animation duration 500ms', page: 'transition-duration', url: getUrl('transition-duration.ts')
            }
        ]
    }
];


/***/ }),

/***/ "./src/pages/lock-axis.ts":
/*!********************************!*\
  !*** ./src/pages/lock-axis.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var LockAxisComponent = /** @class */ (function () {
    function LockAxisComponent() {
        this.items = utils_1.generateItems(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    LockAxisComponent.prototype.onDrop = function (dropResult) {
        this.items = utils_1.applyDrag(this.items, dropResult);
    };
    LockAxisComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-lock-axis',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page\">\n\t\t\t\t<smooth-dnd-container [lockAxis]=\"'y'\" (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], LockAxisComponent);
    return LockAxisComponent;
}());
exports.LockAxisComponent = LockAxisComponent;


/***/ }),

/***/ "./src/pages/nested.ts":
/*!*****************************!*\
  !*** ./src/pages/nested.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var NestedComponent = /** @class */ (function () {
    function NestedComponent() {
        this.items = utils_1.generateItems(30, function (i) { return ({
            id: i, type: 'draggable', data: "Container 1 Draggable - " + i
        }); });
        this.items2 = utils_1.generateItems(5, function (i) { return ({
            id: i, type: 'draggable', data: "Container 2 Draggable - " + i
        }); });
        this.items3 = utils_1.generateItems(4, function (i) { return ({
            id: i, type: 'draggable', data: "Container 3 Draggable - " + i
        }); });
        this.innerContainerStyle = {
            padding: '20px 20px',
            marginTop: '2px',
            marginBottom: '2px',
            border: '1px solid rgba(0,0,0,.125)',
            backgroundColor: '#f4f5f9aa',
            cursor: 'move'
        };
        this.items[5] = {
            id: 5, type: 'container', items: this.items2
        };
        this.items[9] = {
            id: 9, type: 'container', items: this.items3
        };
    }
    NestedComponent.prototype.onDrop = function (dropResult) {
        this.items = utils_1.applyDrag(this.items, dropResult);
    };
    NestedComponent.prototype.onInnerDrop = function (item, dropResult) {
        var newItems = this.items.slice();
        var index = newItems.indexOf(item);
        newItems[index].items = utils_1.applyDrag(newItems[index].items, dropResult);
        this.items = newItems;
    };
    NestedComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-nested',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page\">\n\t\t\t\t<smooth-dnd-container (drop)=\"onDrop($event)\">\n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div *ngIf=\"item.type == 'draggable'\" class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"item.type == 'container'\">\n\t\t\t\t\t\t\t<div [ngStyle]=\"innerContainerStyle\">\n                <h4>Sortable List</h4>\n                <div style=\"{ 'cursor': 'default' }\">\n                  <smooth-dnd-container (drop)=\"onInnerDrop(item, $event)\">\n                    <smooth-dnd-draggable *ngFor=\"let q of item.items\">\n                          <div class=\"draggable-item\">\n                            {{q.data}}\n                          </div>\n                      </smooth-dnd-draggable>\n                  </smooth-dnd-container>\n                </div>\n              </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NestedComponent);
    return NestedComponent;
}());
exports.NestedComponent = NestedComponent;


/***/ }),

/***/ "./src/pages/simple-horizontal.ts":
/*!****************************************!*\
  !*** ./src/pages/simple-horizontal.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var SimpleHorizontalComponent = /** @class */ (function () {
    function SimpleHorizontalComponent() {
        this.items = utils_1.generateItems(15, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    SimpleHorizontalComponent.prototype.onDrop = function (dropResult) {
        this.items = utils_1.applyDrag(this.items, dropResult);
    };
    SimpleHorizontalComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-simple-horizontal',
            template: "\n\t\t<div>\n\t\t\t<div [ngStyle]=\"{'margin': '50px','overflowX': 'auto'}\">\n\t\t\t\t<smooth-dnd-container [orientation]=\"'horizontal'\" (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item-horizontal\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], SimpleHorizontalComponent);
    return SimpleHorizontalComponent;
}());
exports.SimpleHorizontalComponent = SimpleHorizontalComponent;


/***/ }),

/***/ "./src/pages/simple-scroller.ts":
/*!**************************************!*\
  !*** ./src/pages/simple-scroller.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var SimpleScrollerComponent = /** @class */ (function () {
    function SimpleScrollerComponent() {
        this.items = utils_1.generateItems(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    SimpleScrollerComponent.prototype.onDrop = function (dropResult) {
        this.items = utils_1.applyDrag(this.items, dropResult);
    };
    SimpleScrollerComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-simple-scroller',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page-scroller\">\n\t\t\t\t<smooth-dnd-container (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], SimpleScrollerComponent);
    return SimpleScrollerComponent;
}());
exports.SimpleScrollerComponent = SimpleScrollerComponent;


/***/ }),

/***/ "./src/pages/simple.ts":
/*!*****************************!*\
  !*** ./src/pages/simple.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var SimpleComponent = /** @class */ (function () {
    function SimpleComponent() {
        this.items = utils_1.generateItems(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    SimpleComponent.prototype.onDrop = function (dropResult) {
        this.items = utils_1.applyDrag(this.items, dropResult);
    };
    SimpleComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-simple',
            template: "\n    <div>\n      <div class=\"simple-page\">\n        <smooth-dnd-container (drop)=\"onDrop($event)\">            \n          <smooth-dnd-draggable *ngFor=\"let item of items\">\n            <div class=\"draggable-item\">\n              {{item.data}}\n            </div>\n          </smooth-dnd-draggable>\n        </smooth-dnd-container>\n      </div>\n    </div>\n  "
        })
    ], SimpleComponent);
    return SimpleComponent;
}());
exports.SimpleComponent = SimpleComponent;


/***/ }),

/***/ "./src/pages/transition-duration.ts":
/*!******************************************!*\
  !*** ./src/pages/transition-duration.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/pages/utils.ts");
var TransitionDurationComponent = /** @class */ (function () {
    function TransitionDurationComponent() {
        this.items = utils_1.generateItems(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    TransitionDurationComponent.prototype.onDrop = function (dropResult) {
        this.items = utils_1.applyDrag(this.items, dropResult);
    };
    TransitionDurationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-transition-duration',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page\">\n\t\t\t\t<smooth-dnd-container [animationDuration]=\"500\" (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], TransitionDurationComponent);
    return TransitionDurationComponent;
}());
exports.TransitionDurationComponent = TransitionDurationComponent;


/***/ }),

/***/ "./src/pages/utils.ts":
/*!****************************!*\
  !*** ./src/pages/utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
exports.applyDrag = function (arr, dragResult) {
    var removedIndex = dragResult.removedIndex, addedIndex = dragResult.addedIndex, payload = dragResult.payload;
    if (removedIndex === null && addedIndex === null)
        return arr;
    var result = arr.slice();
    var itemToAdd = payload;
    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
    }
    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
    }
    return result;
};
exports.generateItems = function (count, creator) {
    var result = [];
    for (var i = 0; i < count; i++) {
        result.push(creator(i));
    }
    return result;
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kutlu\Desktop\SmoothDnD\ngx-smooth-dnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map