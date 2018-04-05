(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('smooth-dnd'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('ngx-smooth-dnd', ['exports', '@angular/core', 'smooth-dnd', '@angular/common'], factory) :
	(factory((global['ngx-smooth-dnd'] = {}),global.ng.core,global.SmoothDnD,global.ng.common));
}(this, (function (exports,core,SmoothDnD,common) { 'use strict';

SmoothDnD = SmoothDnD && SmoothDnD.hasOwnProperty('default') ? SmoothDnD['default'] : SmoothDnD;

var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
        this.active = false;
    }
    return DraggableComponent;
}());
DraggableComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-smooth-dnd-draggable',
                template: "<div [hidden]=\"!active\" class=\"pane\">\n  <ng-content></ng-content>\n</div>\n",
            },] },
];
DraggableComponent.ctorParameters = function () { return []; };
DraggableComponent.propDecorators = {
    "tabTitle": [{ type: core.Input },],
    "active": [{ type: core.Input },],
};
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngAfterViewInit = function () {
        this.container = SmoothDnD(this.containerElementRef.nativeElement, this.options);
    };
    return ContainerComponent;
}());
ContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-smooth-dnd-container',
                template: "<div #container>\n  <div>Draggable 1</div>\n  <div>Draggable 2</div>\n  <div>Draggable 3</div>\n  <!-- <ng-content></ng-content> -->\n</div>"
            },] },
];
ContainerComponent.ctorParameters = function () { return []; };
ContainerComponent.propDecorators = {
    "tabs": [{ type: core.ContentChildren, args: [DraggableComponent,] },],
    "containerElementRef": [{ type: core.ViewChild, args: ['container',] },],
    "options": [{ type: core.Input, args: ['options',] },],
};
var NgxSmoothDnDModule = /** @class */ (function () {
    function NgxSmoothDnDModule() {
    }
    return NgxSmoothDnDModule;
}());
NgxSmoothDnDModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [ContainerComponent, DraggableComponent],
                exports: [ContainerComponent, DraggableComponent]
            },] },
];
NgxSmoothDnDModule.ctorParameters = function () { return []; };

exports.NgxSmoothDnDModule = NgxSmoothDnDModule;
exports.ContainerComponent = ContainerComponent;
exports.DraggableComponent = DraggableComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-smooth-dnd.umd.js.map
