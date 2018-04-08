(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('smooth-dnd'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('ngx-smooth-dnd', ['exports', '@angular/core', 'smooth-dnd', '@angular/common'], factory) :
	(factory((global['ngx-smooth-dnd'] = {}),global.ng.core,global.SmoothDnD,global.ng.common));
}(this, (function (exports,core,SmoothDnD,common) { 'use strict';

var SmoothDnD__default = 'default' in SmoothDnD ? SmoothDnD['default'] : SmoothDnD;

var wrapperClass = SmoothDnD.constants.wrapperClass;
var animationClass = SmoothDnD.constants.animationClass;
var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
        this.classList = wrapperClass + " " + animationClass;
    }
    DraggableComponent.prototype.ngAfterViewInit = function () {
        this.wrapper.nativeElement.parentElement.className = 'smooth-dnd-draggable-wrapper';
    };
    return DraggableComponent;
}());
DraggableComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[draggable]',
                template: "<div #draggableWrapper>\n    <ng-content></ng-content>\n</div>"
            },] },
];
DraggableComponent.ctorParameters = function () { return []; };
DraggableComponent.propDecorators = {
    "wrapper": [{ type: core.ViewChild, args: ['draggableWrapper',] },],
};
SmoothDnD__default.wrapChild = function (child) {
    return child;
};
SmoothDnD__default.dropHandler = SmoothDnD.dropHandlers.reactDropHandler().handler;
var wrapperClass$1 = SmoothDnD.constants.wrapperClass;
var animationClass$1 = SmoothDnD.constants.animationClass;
var wrapperConstantClasses = (_a = {}, _a[wrapperClass$1] = true, _a[animationClass$1] = true, _a);
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.dragStart = new core.EventEmitter();
        this.drop = new core.EventEmitter();
        this.dragEnter = new core.EventEmitter();
        this.dragLeave = new core.EventEmitter();
        this.wrapperClassList = Object.assign({}, wrapperConstantClasses);
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
    return ContainerComponent;
}());
ContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[container]',
                template: "<div #container>\n    <ng-content></ng-content>\n</div>"
            },] },
];
ContainerComponent.ctorParameters = function () { return [
    { type: core.NgZone, },
]; };
ContainerComponent.propDecorators = {
    "draggables": [{ type: core.ContentChildren, args: [DraggableComponent,] },],
    "containerElementRef": [{ type: core.ViewChild, args: ['container',] },],
    "orientation": [{ type: core.Input, args: ['orientation',] },],
    "behaviour": [{ type: core.Input, args: ['behaviour',] },],
    "groupName": [{ type: core.Input, args: ['groupName',] },],
    "lockAxis": [{ type: core.Input, args: ['lockAxis',] },],
    "dragHandleSelector": [{ type: core.Input, args: ['dragHandleSelector',] },],
    "nonDragAreaSelector": [{ type: core.Input, args: ['nonDragAreaSelector',] },],
    "dragBeginDelay": [{ type: core.Input, args: ['dragBeginDelay',] },],
    "animationDuration": [{ type: core.Input, args: ['animationDuration',] },],
    "autoScrollEnabled": [{ type: core.Input, args: ['autoScrollEnabled',] },],
    "dragClass": [{ type: core.Input, args: ['dragClass',] },],
    "dropClass": [{ type: core.Input, args: ['dropClass',] },],
    "dragStart": [{ type: core.Output },],
    "drop": [{ type: core.Output },],
    "getChildPayload": [{ type: core.Input },],
    "shouldAnimateDrop": [{ type: core.Input },],
    "shouldAcceptDrop": [{ type: core.Input },],
    "dragEnter": [{ type: core.Output },],
    "dragLeave": [{ type: core.Output },],
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
