(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
tslib_1.__exportStar(__webpack_require__(/*! smooth-dnd */ "./node_modules/smooth-dnd/dist/index.js"), exports);


/***/ }),

/***/ "./libs/ngx-smooth-dnd/src/container/container.component.html":
/*!********************************************************************!*\
  !*** ./libs/ngx-smooth-dnd/src/container/container.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container>\r\n    <ng-content></ng-content>\r\n</div>"

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
var smooth_dnd_1 = __webpack_require__(/*! smooth-dnd */ "./node_modules/smooth-dnd/dist/index.js");
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
    tslib_1.__decorate([
        core_1.ContentChildren(draggable_component_1.DraggableComponent),
        tslib_1.__metadata("design:type", core_1.QueryList)
    ], ContainerComponent.prototype, "draggables", void 0);
    tslib_1.__decorate([
        core_1.ViewChild("container"),
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
            template: __webpack_require__(/*! ./container.component.html */ "./libs/ngx-smooth-dnd/src/container/container.component.html")
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.NgZone])
    ], ContainerComponent);
    return ContainerComponent;
}());
exports.ContainerComponent = ContainerComponent;


/***/ }),

/***/ "./libs/ngx-smooth-dnd/src/draggable/draggable.component.html":
/*!********************************************************************!*\
  !*** ./libs/ngx-smooth-dnd/src/draggable/draggable.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container #draggableWrapper>\r\n    <ng-content></ng-content>\r\n</ng-container>"

/***/ }),

/***/ "./libs/ngx-smooth-dnd/src/draggable/draggable.component.ts":
/*!******************************************************************!*\
  !*** ./libs/ngx-smooth-dnd/src/draggable/draggable.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _a;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var smooth_dnd_1 = __webpack_require__(/*! smooth-dnd */ "./node_modules/smooth-dnd/dist/index.js");
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
        core_1.ViewChild('draggableWrapper'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], DraggableComponent.prototype, "wrapper", void 0);
    DraggableComponent = tslib_1.__decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'smooth-dnd-draggable',
            template: __webpack_require__(/*! ./draggable.component.html */ "./libs/ngx-smooth-dnd/src/draggable/draggable.component.html")
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

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div [ngClass]=\"'app'\">\r\n\t<div [ngClass]=\"navButtonClass\" (click)=\"toggleNav()\">\r\n\t\t<span></span>\r\n\t\t<span></span>\r\n\t\t<span></span>\r\n\t\t<span></span>\r\n\t</div>\r\n\t<div [ngClass]=\"navigatorClass\">\r\n\t\t<div [ngClass]=\"'navigator-content'\">\r\n\t\t\t<div [ngClass]=\"'navigator-header'\">\r\n\t\t\t\t<h3>ngx-smooth-dnd</h3>\r\n\t\t\t\t<div [ngClass]=\"'divider'\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<div *ngFor=\"let section of pages\" [ngClass]=\"'menu-section'\">\r\n\t\t\t\t\t<h4>{{section.title}}</h4>\r\n\t\t\t\t\t<ul>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<li *ngFor=\"let page of section.pages\" [ngClass]=\"page.selected ? 'selected' : ''\" (click)=\"selectPage(page)\">{{page.title}}</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div [ngClass]=\"'content'\">\r\n\t\t<div [ngClass]=\"headerClass\">\r\n\t\t\t{{selectedPage.title}}\r\n\t\t\t<div [ngClass]=\"'source-code'\" (click)=\"openCode()\">\r\n\t\t\t\t<img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZml0PSIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ij48L3BhdGg+CiAgICA8cGF0aCBkPSJNOS40IDE2LjZMNC44IDEybDQuNi00LjZMOCA2bC02IDYgNiA2IDEuNC0xLjR6bTUuMiAwbDQuNi00LjYtNC42LTQuNkwxNiA2bDYgNi02IDYtMS40LTEuNHoiIGZpbGw9IiNGRkYiPjwvcGF0aD4KPC9zdmc+Cg==\"\r\n\t\t\t\t alt=\"\" />\r\n\t\t\t\t<span>source</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div [ngClass]=\"'demo'\">\r\n\t\t\t<app-simple *ngIf=\"selectedPage.page == 'simple'\"></app-simple>\r\n\t\t\t<app-simple-scroller *ngIf=\"selectedPage.page == 'simple-scroller'\"></app-simple-scroller>\r\n\t\t\t<app-simple-horizontal *ngIf=\"selectedPage.page == 'simple-horizontal'\"></app-simple-horizontal>\r\n\t\t\t<app-groups *ngIf=\"selectedPage.page == 'groups'\"></app-groups>\r\n\t\t\t<app-copy *ngIf=\"selectedPage.page == 'copy'\"></app-copy>\r\n\t\t\t<app-nested *ngIf=\"selectedPage.page == 'nested'\"></app-nested>\r\n\t\t\t<app-lock-axis *ngIf=\"selectedPage.page == 'lock-axis'\"></app-lock-axis>\r\n\t\t\t<app-drag-handle *ngIf=\"selectedPage.page == 'drag-handle'\"></app-drag-handle>\r\n\t\t\t<app-drag-class *ngIf=\"selectedPage.page == 'drag-class'\"></app-drag-class>\r\n\t\t\t<app-drag-delay *ngIf=\"selectedPage.page == 'drag-delay'\"></app-drag-delay>\r\n\t\t\t<app-transition-duration *ngIf=\"selectedPage.page == 'transition-duration'\"></app-transition-duration>\r\n\t\t\t<app-cards *ngIf=\"selectedPage.page == 'cards'\"></app-cards>\r\n\t\t\t<app-form *ngIf=\"selectedPage.page == 'form'\"></app-form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

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
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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

module.exports = __webpack_require__(/*! C:\Users\kutlu\Desktop\ngx-smooth-dnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map