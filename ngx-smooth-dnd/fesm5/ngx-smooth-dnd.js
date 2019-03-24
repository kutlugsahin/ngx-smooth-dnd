import { CommonModule } from '@angular/common';
import { Component, ViewChild, ContentChildren, Input, Output, EventEmitter, NgZone, NgModule } from '@angular/core';
import { constants, dropHandlers, smoothDnD } from 'smooth-dnd';
export { smoothDnD, constants, dropHandlers } from 'smooth-dnd';

var _a;
var wrapperClass = constants.wrapperClass, animationClass = constants.animationClass;
/** @type {?} */
var constantClasses = (_a = {},
    _a[wrapperClass] = true,
    _a[animationClass] = true,
    _a);
var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
    }
    /**
     * @return {?}
     */
    DraggableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.wrapper.nativeElement.parentNode.className = constants.wrapperClass;
    };
    DraggableComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'smooth-dnd-draggable',
                    template: "<ng-container #draggableWrapper>\r\n    <ng-content></ng-content>\r\n</ng-container>"
                }] }
    ];
    DraggableComponent.propDecorators = {
        wrapper: [{ type: ViewChild, args: ['draggableWrapper',] }]
    };
    return DraggableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
smoothDnD.wrapChild = false;
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.dragStart = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.drop = new EventEmitter();
        this.dropReady = new EventEmitter();
        this.dragEnter = new EventEmitter();
        this.dragLeave = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.container = smoothDnD(this.containerElementRef.nativeElement, this.getOptions());
    };
    /**
     * @return {?}
     */
    ContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.container.dispose();
    };
    /**
     * @private
     * @return {?}
     */
    ContainerComponent.prototype.getOptions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
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
    /**
     * @private
     * @param {?} clb
     * @return {?}
     */
    ContainerComponent.prototype.getNgZone = /**
     * @private
     * @param {?} clb
     * @return {?}
     */
    function (clb) {
        this._ngZone.run(function () {
            clb();
        });
    };
    ContainerComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: "smooth-dnd-container",
                    template: "<div #container>\r\n    <ng-content></ng-content>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    ContainerComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    ContainerComponent.propDecorators = {
        draggables: [{ type: ContentChildren, args: [DraggableComponent,] }],
        containerElementRef: [{ type: ViewChild, args: ["container",] }],
        orientation: [{ type: Input, args: ["orientation",] }],
        behaviour: [{ type: Input, args: ["behaviour",] }],
        groupName: [{ type: Input, args: ["groupName",] }],
        lockAxis: [{ type: Input, args: ["lockAxis",] }],
        dragHandleSelector: [{ type: Input, args: ["dragHandleSelector",] }],
        nonDragAreaSelector: [{ type: Input, args: ["nonDragAreaSelector",] }],
        dragBeginDelay: [{ type: Input, args: ["dragBeginDelay",] }],
        animationDuration: [{ type: Input, args: ["animationDuration",] }],
        autoScrollEnabled: [{ type: Input, args: ["autoScrollEnabled",] }],
        dragClass: [{ type: Input, args: ["dragClass",] }],
        dropClass: [{ type: Input, args: ["dropClass",] }],
        dropPlaceholder: [{ type: Input, args: ["dropPlaceholder",] }],
        removeOnDropOut: [{ type: Input, args: ["removeOnDropOut",] }],
        dragStart: [{ type: Output }],
        dragEnd: [{ type: Output }],
        drop: [{ type: Output }],
        dropReady: [{ type: Output }],
        getChildPayload: [{ type: Input }],
        shouldAnimateDrop: [{ type: Input }],
        shouldAcceptDrop: [{ type: Input }],
        dragEnter: [{ type: Output }],
        dragLeave: [{ type: Output }],
        getGhostParent: [{ type: Input }]
    };
    return ContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxSmoothDnDModule = /** @class */ (function () {
    function NgxSmoothDnDModule() {
    }
    NgxSmoothDnDModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [ContainerComponent, DraggableComponent],
                    exports: [ContainerComponent, DraggableComponent]
                },] }
    ];
    return NgxSmoothDnDModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxSmoothDnDModule, ContainerComponent, DraggableComponent };

//# sourceMappingURL=ngx-smooth-dnd.js.map