import { Component, ViewChild, ContentChildren, Input, Output, EventEmitter, NgZone, NgModule } from '@angular/core';
import SmoothDnD, { constants, dropHandlers } from 'smooth-dnd';
import { CommonModule } from '@angular/common';

var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
    }
    DraggableComponent.prototype.ngAfterViewInit = function () {
        this.wrapper.nativeElement.parentNode.className = constants.wrapperClass;
    };
    return DraggableComponent;
}());
DraggableComponent.decorators = [
    { type: Component, args: [{
                selector: 'smooth-dnd-draggable',
                template: "<ng-container #draggableWrapper>\n    <ng-content></ng-content>\n</ng-container>"
            },] },
];
DraggableComponent.ctorParameters = function () { return []; };
DraggableComponent.propDecorators = {
    "wrapper": [{ type: ViewChild, args: ['draggableWrapper',] },],
};
SmoothDnD.wrapChild = function (child) {
    return child;
};
SmoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.dragStart = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.drop = new EventEmitter();
        this.dragEnter = new EventEmitter();
        this.dragLeave = new EventEmitter();
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
            options.onDragStart = function (event) {
                _this.getNgZone(function () {
                    _this.dragStart.emit(event);
                });
            };
        if (this.dragEnd)
            options.onDragEnd = function (event) {
                _this.getNgZone(function () {
                    _this.dragEnd.emit(event);
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
    { type: Component, args: [{
                selector: "smooth-dnd-container",
                template: "<div #container>\n    <ng-content></ng-content>\n</div>"
            },] },
];
ContainerComponent.ctorParameters = function () { return [
    { type: NgZone, },
]; };
ContainerComponent.propDecorators = {
    "draggables": [{ type: ContentChildren, args: [DraggableComponent,] },],
    "containerElementRef": [{ type: ViewChild, args: ["container",] },],
    "orientation": [{ type: Input, args: ["orientation",] },],
    "behaviour": [{ type: Input, args: ["behaviour",] },],
    "groupName": [{ type: Input, args: ["groupName",] },],
    "lockAxis": [{ type: Input, args: ["lockAxis",] },],
    "dragHandleSelector": [{ type: Input, args: ["dragHandleSelector",] },],
    "nonDragAreaSelector": [{ type: Input, args: ["nonDragAreaSelector",] },],
    "dragBeginDelay": [{ type: Input, args: ["dragBeginDelay",] },],
    "animationDuration": [{ type: Input, args: ["animationDuration",] },],
    "autoScrollEnabled": [{ type: Input, args: ["autoScrollEnabled",] },],
    "dragClass": [{ type: Input, args: ["dragClass",] },],
    "dropClass": [{ type: Input, args: ["dropClass",] },],
    "dragStart": [{ type: Output },],
    "dragEnd": [{ type: Output },],
    "drop": [{ type: Output },],
    "getChildPayload": [{ type: Input },],
    "shouldAnimateDrop": [{ type: Input },],
    "shouldAcceptDrop": [{ type: Input },],
    "dragEnter": [{ type: Output },],
    "dragLeave": [{ type: Output },],
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
