webpackJsonp(["main"],{

/***/ "../../../../../apps/demo/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../apps/demo/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../apps/demo/src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../apps/demo/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div [ngClass]=\"'app'\">\r\n\t<div [ngClass]=\"navButtonClass\" (click)=\"toggleNav()\">\r\n\t\t<span></span>\r\n\t\t<span></span>\r\n\t\t<span></span>\r\n\t\t<span></span>\r\n\t</div>\r\n\t<div [ngClass]=\"navigatorClass\">\r\n\t\t<div [ngClass]=\"'navigator-content'\">\r\n\t\t\t<div [ngClass]=\"'navigator-header'\">\r\n\t\t\t\t<h3>ngx-smooth-dnd</h3>\r\n\t\t\t\t<div [ngClass]=\"'divider'\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<div *ngFor=\"let section of pages\" [ngClass]=\"'menu-section'\">\r\n\t\t\t\t\t<h4>{{section.title}}</h4>\r\n\t\t\t\t\t<ul>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li *ngFor=\"let page of section.pages\" [ngClass]=\"page.selected ? 'selected' : ''\" (click)=\"selectPage(page)\">{{page.title}}</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div [ngClass]=\"'content'\">\r\n\t\t<div [ngClass]=\"headerClass\">\r\n\t\t\t{{selectedPage.title}}\r\n\t\t\t<div [ngClass]=\"'source-code'\" (click)=\"openCode()\">\r\n\t\t\t\t<img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZml0PSIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ij48L3BhdGg+CiAgICA8cGF0aCBkPSJNOS40IDE2LjZMNC44IDEybDQuNi00LjZMOCA2bC02IDYgNiA2IDEuNC0xLjR6bTUuMiAwbDQuNi00LjYtNC42LTQuNkwxNiA2bDYgNi02IDYtMS40LTEuNHoiIGZpbGw9IiNGRkYiPjwvcGF0aD4KPC9zdmc+Cg==\"\r\n\t\t\t\t alt=\"\" />\r\n\t\t\t\t<span>source</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div [ngClass]=\"'demo'\">\r\n\t\t\t<app-simple *ngIf=\"selectedPage.page == 'simple'\"></app-simple>\r\n\t\t\t<app-simple-scroller *ngIf=\"selectedPage.page == 'simple-scroller'\"></app-simple-scroller>\r\n\t\t\t<app-simple-horizontal *ngIf=\"selectedPage.page == 'simple-horizontal'\"></app-simple-horizontal>\r\n\t\t\t<app-groups *ngIf=\"selectedPage.page == 'groups'\"></app-groups>\r\n\t\t\t<app-copy *ngIf=\"selectedPage.page == 'copy'\"></app-copy>\r\n\t\t\t<app-nested *ngIf=\"selectedPage.page == 'nested'\"></app-nested>\r\n\t\t\t<app-lock-axis *ngIf=\"selectedPage.page == 'lock-axis'\"></app-lock-axis>\r\n\t\t\t<app-drag-handle *ngIf=\"selectedPage.page == 'drag-handle'\"></app-drag-handle>\r\n\t\t\t<app-drag-class *ngIf=\"selectedPage.page == 'drag-class'\"></app-drag-class>\r\n\t\t\t<app-drag-delay *ngIf=\"selectedPage.page == 'drag-delay'\"></app-drag-delay>\r\n\t\t\t<app-transition-duration *ngIf=\"selectedPage.page == 'transition-duration'\"></app-transition-duration>\r\n\t\t\t<app-cards *ngIf=\"selectedPage.page == 'cards'\"></app-cards>\r\n\t\t\t<app-form *ngIf=\"selectedPage.page == 'form'\"></app-form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../apps/demo/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages__ = __webpack_require__("../../../../../apps/demo/src/pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pages = __WEBPACK_IMPORTED_MODULE_1__pages__["default"];
        this.headerClass = {
            header: true
        };
        this.selectedPage = __WEBPACK_IMPORTED_MODULE_1__pages__["default"][0].pages[0];
    }
    AppComponent.prototype.selectPage = function (page) {
        this.selectedPage = page;
    };
    AppComponent.prototype.openCode = function () {
        window.open(this.selectedPage.url, '_blank');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../apps/demo/src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../apps/demo/src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../apps/demo/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_smooth_dnd__ = __webpack_require__("../../../../../libs/ngx-smooth-dnd/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__("../../../../../apps/demo/src/pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_smooth_dnd__["a" /* NgxSmoothDnDModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]].concat(Object.keys(__WEBPACK_IMPORTED_MODULE_4__pages__).filter(function (p) { return p !== 'default'; }).map(function (p) { return __WEBPACK_IMPORTED_MODULE_4__pages__[p]; })),
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../apps/demo/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../apps/demo/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../apps/demo/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../apps/demo/src/pages/cards.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
            children: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(4, function (i) { return ({
                id: "column" + i,
                type: 'container',
                name: columnNames[i],
                props: {
                    orientation: 'vertical',
                    className: 'card-container'
                },
                children: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(+(Math.random() * 10).toFixed() + 5, function (j) { return ({
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
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    CardsComponent.prototype.onColumnDrop = function (dropResult) {
        var scene = Object.assign({}, this.scene);
        scene.children = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(scene.children, dropResult);
        this.scene = scene;
    };
    CardsComponent.prototype.onCardDrop = function (columnId, dropResult) {
        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            var scene = Object.assign({}, this.scene);
            var column = scene.children.filter(function (p) { return p.id === columnId; })[0];
            var columnIndex = scene.children.indexOf(column);
            var newColumn = Object.assign({}, column);
            newColumn.children = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(newColumn.children, dropResult);
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
    CardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-cards',
            template: "\n\t\t<div class=\"card-scene\">\n\t\t\t<smooth-dnd-container \n\t\t\t\t[orientation]=\"'horizontal'\" \n\t\t\t\t(drop)=\"onColumnDrop($event)\" \n\t\t\t\t[dragHandleSelector]=\"'.column-drag-handle'\"\n\t\t\t>\n\t\t\t\t<smooth-dnd-draggable *ngFor=\"let column of scene.children\">\n\t\t\t\t\t<div [ngClass]=\"column.props.className\">\n\t\t\t\t\t\t<div class=\"card-column-header\">\n\t\t\t\t\t\t\t<span class=\"column-drag-handle\">&#x2630;</span>\n\t\t\t\t\t\t\t{{column.name}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<smooth-dnd-container \n\t\t\t\t\t\t\t[groupName]=\"'col'\"\n\t\t\t\t\t\t\t(drop)=\"onCardDrop(column.id, $event)\"\n\t\t\t\t\t\t\t[getChildPayload]=\"getCardPayload(column.id)\"\n\t\t\t\t\t\t\t[dragClass]=\"'card-ghost'\"\n\t\t\t\t\t\t\t[dropClass]=\"'card-ghost-drop'\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let card of column.children\">\n\t\t\t\t\t\t\t\t<div [ngClass]=\"card.props.className\" [ngStyle]=\"card.props.style\">\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t{{card.data}}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t\t\t</smooth-dnd-container>\n\t\t\t\t\t</div>\n\t\t\t\t</smooth-dnd-draggable>\n\t\t\t</smooth-dnd-container>\n    </div>\n\t"
        })
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/copy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CopyComponent = /** @class */ (function () {
    function CopyComponent() {
        this.items1 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(15, function (i) { return ({ id: '1' + i, data: "Source Draggable - " + i }); });
        this.items2 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(15, function (i) { return ({ id: '2' + i, data: "Draggable 2 - " + i }); });
        this.items3 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(15, function (i) { return ({ id: '3' + i, data: "Draggable 3 - " + i }); });
        this.getChildPayload1 = this.getChildPayload1.bind(this);
        this.getChildPayload2 = this.getChildPayload2.bind(this);
        this.getChildPayload3 = this.getChildPayload3.bind(this);
    }
    CopyComponent.prototype.onDrop = function (collection, dropResult) {
        this[collection] = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(this[collection], dropResult);
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
    CopyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-copy',
            template: "\n\t\t<div [ngStyle]=\"{ 'display': 'flex', 'justifyContent': 'stretch', 'marginTop': '50px', 'marginRight': '50px' }\">\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [behaviour]=\"'copy'\" [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload1\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items1\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload2\" (drop)=\"onDrop('items2', $event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items2\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload3\" (drop)=\"onDrop('items3', $event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items3\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [])
    ], CopyComponent);
    return CopyComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/drag-class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragClassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DragClassComponent = /** @class */ (function () {
    function DragClassComponent() {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    DragClassComponent.prototype.onDrop = function (dropResult) {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(this.items, dropResult);
    };
    DragClassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-drag-class',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page\">\n\t\t\t\t<smooth-dnd-container [dragClass]=\"'opacity-ghost'\" [dropClass]=\"'opacity-ghost-drop'\" (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], DragClassComponent);
    return DragClassComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/drag-delay.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDelayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DragDelayComponent = /** @class */ (function () {
    function DragDelayComponent() {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    DragDelayComponent.prototype.onDrop = function (dropResult) {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(this.items, dropResult);
    };
    DragDelayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-drag-delay',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page\">\n\t\t\t\t<smooth-dnd-container [dragBeginDelay]=\"500\" [dragClass]=\"'form-ghost'\" [dropClass]=\"'form-ghost-drop'\" (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], DragDelayComponent);
    return DragDelayComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/drag-handle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragHandleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DragHandleComponent = /** @class */ (function () {
    function DragHandleComponent() {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    DragHandleComponent.prototype.onDrop = function (dropResult) {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(this.items, dropResult);
    };
    DragHandleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-drag-handle',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page\">\n\t\t\t\t<smooth-dnd-container [dragHandleSelector]=\"'.column-drag-handle'\" (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t<span class=\"column-drag-handle\" style=\"float:left; padding:0 10px;\">&#x2630;</span>\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], DragHandleComponent);
    return DragHandleComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(50, function (i) { return ({ data: 'Draggable ' + i }); });
        this.form = formInitial.slice();
    }
    FormComponent.prototype.onDrop = function (dropResult) {
        this.form = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(this.form, dropResult);
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-form',
            template: "\n\t\t<div class=\"form-demo\">\n\t\t\t<div class=\"form\">\n\t\t\t\t<smooth-dnd-container \n\t\t\t\t\t(drop)=\"onDrop($event)\" \n\t\t\t\t\t[nonDragAreaSelector]=\"'.field'\"\n\t\t\t\t\t[dragClass]=\"'form-ghost'\" \n\t\t\t\t\t[dropClass]=\"'form-ghost-drop'\"\n\t\t\t\t>            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let field of form\">\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass=\"form-line\"\n\t\t\t\t\t>\n            <div class=\"label\">\n              <span>{{field.label}}</span>\n            </div>\n\t\t\t\t\t\t<div class=\"field\" [ngSwitch]=\"field.type\">\n\t\t\t\t\t\t\t<h2 *ngSwitchCase=\"'header'\" class=\"field\">\n\t\t\t\t\t\t\t\tForm Header\n\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'fullname'\" class=\"field-group\">\n\t\t\t\t\t\t\t\t<input type=\"text\" /><input type=\"text\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'email'\" class=\"field\">\n\t\t\t\t\t\t\t\t<input type=\"email\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'address'\" class=\"field\">\n\t\t\t\t\t\t\t\t<textarea></textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'dropdown'\" class=\"field\">\n\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t<option value=\"1\">Option 1</option>\t\n\t\t\t\t\t\t\t\t\t<option value=\"2\" selected>Option 2</option>\t\n\t\t\t\t\t\t\t\t\t<option value=\"3\">Option 3</option>\t\n\t\t\t\t\t\t\t\t\t<option value=\"4\">Option 4</option>\t\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'checkbox'\" class=\"field\">\n\t\t\t\t\t\t\t\t<div><label><input type=\"checkbox\" name=\"r\" /> option 1</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"checkbox\" name=\"r\" /> option 2</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"checkbox\" name=\"r\" /> option 3</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"checkbox\" name=\"r\" /> option 4</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"checkbox\" name=\"r\" /> option 5</label></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'radio'\" class=\"field\">\n\t\t\t\t\t\t\t\t<div><label><input type=\"radio\" name=\"r\" /> option 1</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"radio\" name=\"r\" /> option 2</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"radio\" name=\"r\" /> option 3</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"radio\" name=\"r\" /> option 4</label></div>\n\t\t\t\t\t\t\t\t<div><label><input type=\"radio\" name=\"r\" /> option 5</label></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"'submit'\" class=\"field\">\n\t\t\t\t\t\t\t\t<button class=\"form-submit-button\">Submit</button>\n\t\t\t\t\t\t\t</div>\n            </div>\n          </div>\t\t\t\t\t\t\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/groups.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupsComponent = /** @class */ (function () {
    function GroupsComponent() {
        this.items1 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(15, function (i) { return ({ id: '1' + i, data: "Draggable 1 - " + i }); });
        this.items2 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(15, function (i) { return ({ id: '2' + i, data: "Draggable 2 - " + i }); });
        this.items3 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(15, function (i) { return ({ id: '3' + i, data: "Draggable 3 - " + i }); });
        this.items4 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(15, function (i) { return ({ id: '4' + i, data: "Draggable 4 - " + i }); });
        this.getChildPayload1 = this.getChildPayload1.bind(this);
        this.getChildPayload2 = this.getChildPayload2.bind(this);
        this.getChildPayload3 = this.getChildPayload3.bind(this);
        this.getChildPayload4 = this.getChildPayload4.bind(this);
    }
    GroupsComponent.prototype.onDrop = function (collection, dropResult) {
        this[collection] = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(this[collection], dropResult);
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
    GroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-groups',
            template: "\n\t\t<div [ngStyle]=\"{ 'display': 'flex', 'justifyContent': 'stretch', 'marginTop': '50px', 'marginRight': '50px' }\">\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload1\" (drop)=\"onDrop('items1', $event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items1\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload2\" (drop)=\"onDrop('items2', $event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items2\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload3\" (drop)=\"onDrop('items3', $event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items3\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t\t<div [ngStyle]=\"{'marginLeft': '50px', 'flex': '1'}\">\n\t\t\t\t<smooth-dnd-container [groupName]=\"'1'\" [getChildPayload]=\"getChildPayload4\" (drop)=\"onDrop('items4', $event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items4\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simple__ = __webpack_require__("../../../../../apps/demo/src/pages/simple.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SimpleComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__simple__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simple_scroller__ = __webpack_require__("../../../../../apps/demo/src/pages/simple-scroller.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SimpleScrollerComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__simple_scroller__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_horizontal__ = __webpack_require__("../../../../../apps/demo/src/pages/simple-horizontal.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SimpleHorizontalComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__simple_horizontal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups__ = __webpack_require__("../../../../../apps/demo/src/pages/groups.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__groups__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__copy__ = __webpack_require__("../../../../../apps/demo/src/pages/copy.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CopyComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__copy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nested__ = __webpack_require__("../../../../../apps/demo/src/pages/nested.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NestedComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__nested__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drag_class__ = __webpack_require__("../../../../../apps/demo/src/pages/drag-class.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragClassComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__drag_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__drag_delay__ = __webpack_require__("../../../../../apps/demo/src/pages/drag-delay.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragDelayComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__drag_delay__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drag_handle__ = __webpack_require__("../../../../../apps/demo/src/pages/drag-handle.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragHandleComponent", function() { return __WEBPACK_IMPORTED_MODULE_8__drag_handle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lock_axis__ = __webpack_require__("../../../../../apps/demo/src/pages/lock-axis.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LockAxisComponent", function() { return __WEBPACK_IMPORTED_MODULE_9__lock_axis__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__transition_duration__ = __webpack_require__("../../../../../apps/demo/src/pages/transition-duration.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TransitionDurationComponent", function() { return __WEBPACK_IMPORTED_MODULE_10__transition_duration__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cards__ = __webpack_require__("../../../../../apps/demo/src/pages/cards.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return __WEBPACK_IMPORTED_MODULE_11__cards__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__form__ = __webpack_require__("../../../../../apps/demo/src/pages/form.ts");
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return __WEBPACK_IMPORTED_MODULE_12__form__["a"]; });













var getUrl = function (pagename) {
    return "https://github.com/kutlugsahin/ngx-smooth-dnd/tree/master/apps/demo/src/pages/" + pagename;
};
/* harmony default export */ __webpack_exports__["default"] = ([
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
]);


/***/ }),

/***/ "../../../../../apps/demo/src/pages/lock-axis.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockAxisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LockAxisComponent = /** @class */ (function () {
    function LockAxisComponent() {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    LockAxisComponent.prototype.onDrop = function (dropResult) {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(this.items, dropResult);
    };
    LockAxisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-lock-axis',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page\">\n\t\t\t\t<smooth-dnd-container [lockAxis]=\"'y'\" (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], LockAxisComponent);
    return LockAxisComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/nested.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NestedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NestedComponent = /** @class */ (function () {
    function NestedComponent() {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(30, function (i) { return ({
            id: i, type: 'draggable', data: "Container 1 Draggable - " + i
        }); });
        this.items2 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(5, function (i) { return ({
            id: i, type: 'draggable', data: "Container 2 Draggable - " + i
        }); });
        this.items3 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(4, function (i) { return ({
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
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(this.items, dropResult);
    };
    NestedComponent.prototype.onInnerDrop = function (item, dropResult) {
        var newItems = this.items.slice();
        var index = newItems.indexOf(item);
        newItems[index].items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(newItems[index].items, dropResult);
        this.items = newItems;
    };
    NestedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-nested',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page\">\n\t\t\t\t<smooth-dnd-container (drop)=\"onDrop($event)\">\n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div *ngIf=\"item.type == 'draggable'\" class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"item.type == 'container'\">\n\t\t\t\t\t\t\t<div [ngStyle]=\"innerContainerStyle\">\n                <h4>Sortable List</h4>\n                <div style=\"{ 'cursor': 'default' }\">\n                  <smooth-dnd-container (drop)=\"onInnerDrop(item, $event)\">\n                    <smooth-dnd-draggable *ngFor=\"let q of item.items\">\n                          <div class=\"draggable-item\">\n                            {{q.data}}\n                          </div>\n                      </smooth-dnd-draggable>\n                  </smooth-dnd-container>\n                </div>\n              </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [])
    ], NestedComponent);
    return NestedComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/simple-horizontal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleHorizontalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SimpleHorizontalComponent = /** @class */ (function () {
    function SimpleHorizontalComponent() {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(15, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    SimpleHorizontalComponent.prototype.onDrop = function (dropResult) {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(this.items, dropResult);
    };
    SimpleHorizontalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-simple-horizontal',
            template: "\n\t\t<div>\n\t\t\t<div [ngStyle]=\"{'margin': '50px','overflowX': 'auto'}\">\n\t\t\t\t<smooth-dnd-container [orientation]=\"'horizontal'\" (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item-horizontal\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], SimpleHorizontalComponent);
    return SimpleHorizontalComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/simple-scroller.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleScrollerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SimpleScrollerComponent = /** @class */ (function () {
    function SimpleScrollerComponent() {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    SimpleScrollerComponent.prototype.onDrop = function (dropResult) {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(this.items, dropResult);
    };
    SimpleScrollerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-simple-scroller',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page-scroller\">\n\t\t\t\t<smooth-dnd-container (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], SimpleScrollerComponent);
    return SimpleScrollerComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/simple.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SimpleComponent = /** @class */ (function () {
    function SimpleComponent() {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    SimpleComponent.prototype.onDrop = function (_a) {
        var removedIndex = _a.removedIndex;
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(this.items, { removedIndex: removedIndex });
    };
    SimpleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-simple',
            template: "\n    <div>\n      <div class=\"simple-page\">\n        <smooth-dnd-container (drop)=\"onDrop($event)\">            \n          <smooth-dnd-draggable *ngFor=\"let item of items\">\n            <div class=\"draggable-item\">\n              {{item.data}}\n            </div>\n          </smooth-dnd-draggable>\n        </smooth-dnd-container>\n      </div>\n    </div>\n  "
        })
    ], SimpleComponent);
    return SimpleComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/transition-duration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransitionDurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("../../../../../apps/demo/src/pages/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TransitionDurationComponent = /** @class */ (function () {
    function TransitionDurationComponent() {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* generateItems */])(50, function (i) { return ({ data: 'Draggable ' + i }); });
    }
    TransitionDurationComponent.prototype.onDrop = function (dropResult) {
        this.items = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* applyDrag */])(this.items, dropResult);
    };
    TransitionDurationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-transition-duration',
            template: "\n\t\t<div>\n\t\t\t<div class=\"simple-page\">\n\t\t\t\t<smooth-dnd-container [animationDuration]=\"500\" (drop)=\"onDrop($event)\">            \n\t\t\t\t\t<smooth-dnd-draggable *ngFor=\"let item of items\">\n\t\t\t\t\t\t<div class=\"draggable-item\">\n\t\t\t\t\t\t\t{{item.data}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</smooth-dnd-draggable>\n\t\t\t\t</smooth-dnd-container>\n\t\t\t</div>\n\t\t</div>\n\t"
        })
    ], TransitionDurationComponent);
    return TransitionDurationComponent;
}());



/***/ }),

/***/ "../../../../../apps/demo/src/pages/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateItems; });
var applyDrag = function (arr, dragResult) {
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
var generateItems = function (count, creator) {
    var result = [];
    for (var i = 0; i < count; i++) {
        result.push(creator(i));
    }
    return result;
};


/***/ }),

/***/ "../../../../../libs/ngx-smooth-dnd/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__("../../../../../libs/ngx-smooth-dnd/public_api.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["a"]; });



/***/ }),

/***/ "../../../../../libs/ngx-smooth-dnd/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ngx_smooth_dnd_module__ = __webpack_require__("../../../../../libs/ngx-smooth-dnd/src/ngx-smooth-dnd.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_ngx_smooth_dnd_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_container_container_component__ = __webpack_require__("../../../../../libs/ngx-smooth-dnd/src/container/container.component.ts");
/* unused harmony reexport ContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_draggable_draggable_component__ = __webpack_require__("../../../../../libs/ngx-smooth-dnd/src/draggable/draggable.component.ts");
/* unused harmony reexport DraggableComponent */





/***/ }),

/***/ "../../../../../libs/ngx-smooth-dnd/src/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div #container>\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "../../../../../libs/ngx-smooth-dnd/src/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggable_draggable_component__ = __webpack_require__("../../../../../libs/ngx-smooth-dnd/src/draggable/draggable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_smooth_dnd__ = __webpack_require__("../../../../smooth-dnd/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_smooth_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_smooth_dnd__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



__WEBPACK_IMPORTED_MODULE_2_smooth_dnd___default.a.wrapChild = function (child) {
    return child;
};
__WEBPACK_IMPORTED_MODULE_2_smooth_dnd___default.a.dropHandler = __WEBPACK_IMPORTED_MODULE_2_smooth_dnd__["dropHandlers"].reactDropHandler().handler;
var wrapperClass = __WEBPACK_IMPORTED_MODULE_2_smooth_dnd__["constants"].wrapperClass, animationClass = __WEBPACK_IMPORTED_MODULE_2_smooth_dnd__["constants"].animationClass;
var wrapperConstantClasses = (_a = {},
    _a[wrapperClass] = true,
    _a[animationClass] = true,
    _a);
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        this.drop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        this.dragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        this.dragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
    }
    ;
    ContainerComponent.prototype.ngAfterViewInit = function () {
        this.container = __WEBPACK_IMPORTED_MODULE_2_smooth_dnd___default()(this.containerElementRef.nativeElement, this.getOptions());
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
        if (this.dragStart)
            options.onDragStart = function (index, payload) {
                _this.getNgZone(function () {
                    _this.dragStart.emit({ index: index, payload: payload });
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
        return options;
    };
    ContainerComponent.prototype.getNgZone = function (clb) {
        this._ngZone.run(function () {
            clb();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__draggable_draggable_component__["a" /* DraggableComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* QueryList */])
    ], ContainerComponent.prototype, "draggables", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
    ], ContainerComponent.prototype, "containerElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('orientation'),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "orientation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('behaviour'),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "behaviour", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('groupName'),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "groupName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('lockAxis'),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "lockAxis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('dragHandleSelector'),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragHandleSelector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('nonDragAreaSelector'),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "nonDragAreaSelector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('dragBeginDelay'),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragBeginDelay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('animationDuration'),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "animationDuration", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('autoScrollEnabled'),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "autoScrollEnabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('dragClass'),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('dropClass'),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "dropClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "drop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Function)
    ], ContainerComponent.prototype, "getChildPayload", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Function)
    ], ContainerComponent.prototype, "shouldAnimateDrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Function)
    ], ContainerComponent.prototype, "shouldAcceptDrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragEnter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "dragLeave", void 0);
    ContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'smooth-dnd-container',
            template: __webpack_require__("../../../../../libs/ngx-smooth-dnd/src/container/container.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */]])
    ], ContainerComponent);
    return ContainerComponent;
}());

var _a;


/***/ }),

/***/ "../../../../../libs/ngx-smooth-dnd/src/draggable/draggable.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container #draggableWrapper>\r\n    <ng-content></ng-content>\r\n</ng-container>"

/***/ }),

/***/ "../../../../../libs/ngx-smooth-dnd/src/draggable/draggable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_smooth_dnd__ = __webpack_require__("../../../../smooth-dnd/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_smooth_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_smooth_dnd__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var wrapperClass = __WEBPACK_IMPORTED_MODULE_1_smooth_dnd__["constants"].wrapperClass, animationClass = __WEBPACK_IMPORTED_MODULE_1_smooth_dnd__["constants"].animationClass;
var constantClasses = (_a = {},
    _a[wrapperClass] = true,
    _a[animationClass] = true,
    _a);
var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
        this.classList = wrapperClass + " " + animationClass;
    }
    DraggableComponent.prototype.ngAfterViewInit = function () {
        this.wrapper.nativeElement.parentElement.className = __WEBPACK_IMPORTED_MODULE_1_smooth_dnd__["constants"].wrapperClass;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('draggableWrapper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
    ], DraggableComponent.prototype, "wrapper", void 0);
    DraggableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'smooth-dnd-draggable',
            template: __webpack_require__("../../../../../libs/ngx-smooth-dnd/src/draggable/draggable.component.html")
        })
    ], DraggableComponent);
    return DraggableComponent;
}());

var _a;


/***/ }),

/***/ "../../../../../libs/ngx-smooth-dnd/src/ngx-smooth-dnd.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxSmoothDnDModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__container_container_component__ = __webpack_require__("../../../../../libs/ngx-smooth-dnd/src/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draggable_draggable_component__ = __webpack_require__("../../../../../libs/ngx-smooth-dnd/src/draggable/draggable.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NgxSmoothDnDModule = /** @class */ (function () {
    function NgxSmoothDnDModule() {
    }
    NgxSmoothDnDModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__container_container_component__["a" /* ContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__draggable_draggable_component__["a" /* DraggableComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__container_container_component__["a" /* ContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__draggable_draggable_component__["a" /* DraggableComponent */]]
        })
    ], NgxSmoothDnDModule);
    return NgxSmoothDnDModule;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../apps/demo/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map