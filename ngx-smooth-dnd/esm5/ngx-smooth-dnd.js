import { Component, Input, ContentChildren, ViewChild, NgModule } from '@angular/core';
import SmoothDnD from 'smooth-dnd';
import { CommonModule } from '@angular/common';

var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
        this.active = false;
    }
    return DraggableComponent;
}());
DraggableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-smooth-dnd-draggable',
                template: "<div [hidden]=\"!active\" class=\"pane\">\n  <ng-content></ng-content>\n</div>\n",
            },] },
];
DraggableComponent.ctorParameters = function () { return []; };
DraggableComponent.propDecorators = {
    "tabTitle": [{ type: Input },],
    "active": [{ type: Input },],
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
    { type: Component, args: [{
                selector: 'ngx-smooth-dnd-container',
                template: "<div #container>\n  <div>Draggable 1</div>\n  <div>Draggable 2</div>\n  <div>Draggable 3</div>\n  <!-- <ng-content></ng-content> -->\n</div>"
            },] },
];
ContainerComponent.ctorParameters = function () { return []; };
ContainerComponent.propDecorators = {
    "tabs": [{ type: ContentChildren, args: [DraggableComponent,] },],
    "containerElementRef": [{ type: ViewChild, args: ['container',] },],
    "options": [{ type: Input, args: ['options',] },],
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

export { NgxSmoothDnDModule, ContainerComponent, DraggableComponent };
//# sourceMappingURL=ngx-smooth-dnd.js.map
