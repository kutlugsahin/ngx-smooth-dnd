import { Component, ContentChildren, ViewChild, Input, Output, EventEmitter, NgModule } from '@angular/core';
import SmoothDnD, { constants } from 'smooth-dnd';
import { CommonModule } from '@angular/common';

var wrapperClass = constants.wrapperClass;
var animationClass = constants.animationClass;
var constantClasses = (_a = {}, _a[wrapperClass] = true, _a[animationClass] = true, _a);
var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
        this.classList = Object.assign({}, constantClasses);
    }
    return DraggableComponent;
}());
DraggableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-smooth-dnd-draggable',
                template: "<div [ngClass]=\"classList\">\n  <ng-content></ng-content>\n</div>\n",
            },] },
];
DraggableComponent.ctorParameters = function () { return []; };
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
        this.onDrop = new EventEmitter();
    }
    ContainerComponent.prototype.ngAfterViewInit = function () {
        this.container = SmoothDnD(this.containerElementRef.nativeElement, this.getOptions());
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
    { type: Component, args: [{
                selector: 'ngx-smooth-dnd-container',
                template: "<div #container [ngClass]=\"classList\">\n  <ng-content></ng-content>\n</div>"
            },] },
];
ContainerComponent.ctorParameters = function () { return []; };
ContainerComponent.propDecorators = {
    "draggables": [{ type: ContentChildren, args: [DraggableComponent,] },],
    "containerElementRef": [{ type: ViewChild, args: ['container',] },],
    "orientation": [{ type: Input, args: ['orientation',] },],
    "onDrop": [{ type: Output },],
};
var NgxSmoothDnDModule = /** @class */ (function () {
    function NgxSmoothDnDModule() {
    }
    return NgxSmoothDnDModule;
}());
NgxSmoothDnDModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ContainerComponent, DraggableComponent],
                exports: [ContainerComponent, DraggableComponent]
            },] },
];
NgxSmoothDnDModule.ctorParameters = function () { return []; };
var _a;

export { NgxSmoothDnDModule, ContainerComponent, DraggableComponent };
//# sourceMappingURL=ngx-smooth-dnd.js.map
