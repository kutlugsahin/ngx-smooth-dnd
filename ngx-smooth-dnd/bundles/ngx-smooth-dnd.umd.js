(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('smooth-dnd'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('ngx-smooth-dnd', ['exports', '@angular/core', 'smooth-dnd', '@angular/common'], factory) :
	(factory((global['ngx-smooth-dnd'] = {}),global.ng.core,global.SmoothDnD,global.ng.common));
}(this, (function (exports,core,SmoothDnD,common) { 'use strict';

var SmoothDnD__default = 'default' in SmoothDnD ? SmoothDnD['default'] : SmoothDnD;

var wrapperClass = SmoothDnD.constants.wrapperClass;
var animationClass = SmoothDnD.constants.animationClass;
var constantClasses = (_a = {}, _a[wrapperClass] = true, _a[animationClass] = true, _a);
var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
        this.classList = Object.assign({}, constantClasses);
    }
    return DraggableComponent;
}());
DraggableComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-smooth-dnd-draggable',
                template: "<div [ngClass]=\"classList\">\n  <ng-content></ng-content>\n</div>\n",
            },] },
];
DraggableComponent.ctorParameters = function () { return []; };
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
        this.onDrop = new core.EventEmitter();
    }
    ContainerComponent.prototype.ngAfterViewInit = function () {
        this.container = SmoothDnD__default(this.containerElementRef.nativeElement, this.getOptions());
    };
    ContainerComponent.prototype.ngOnDestroy = function () {
        this.container.dispose();
    };
    ContainerComponent.prototype.getOptions = function () {
        var _this = this;
        var options = {};
        if (this.orientation)
            options.orientation = this.orientation;
        if (this.onDrop)
            options.onDrop = function (removedIndex, addedIndex, payload, element) {
                _this.onDrop.emit({
                    removedIndex: removedIndex, addedIndex: addedIndex, payload: payload, element: element
                });
            };
    };
    return ContainerComponent;
}());
ContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-smooth-dnd-container',
                template: "<div #container [ngClass]=\"classList\">\n  <ng-content></ng-content>\n</div>"
            },] },
];
ContainerComponent.ctorParameters = function () { return []; };
ContainerComponent.propDecorators = {
    "draggables": [{ type: core.ContentChildren, args: [DraggableComponent,] },],
    "containerElementRef": [{ type: core.ViewChild, args: ['container',] },],
    "orientation": [{ type: core.Input, args: ['orientation',] },],
    "onDrop": [{ type: core.Output },],
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
var _a;

exports.NgxSmoothDnDModule = NgxSmoothDnDModule;
exports.ContainerComponent = ContainerComponent;
exports.DraggableComponent = DraggableComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-smooth-dnd.umd.js.map
