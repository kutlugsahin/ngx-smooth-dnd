import { CommonModule } from '@angular/common';
import { Component, ViewChild, ContentChildren, Input, Output, EventEmitter, NgZone, NgModule } from '@angular/core';
import { constants, dropHandlers, smoothDnD } from 'smooth-dnd';
export { smoothDnD, constants, dropHandlers } from 'smooth-dnd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DraggableComponent {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.wrapper.nativeElement.parentNode.className = constants.wrapperClass;
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
smoothDnD.wrapChild = false;
class ContainerComponent {
    /**
     * @param {?} _ngZone
     */
    constructor(_ngZone) {
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
    ngAfterViewInit() {
        this.container = smoothDnD(this.containerElementRef.nativeElement, this.getOptions());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.container.dispose();
    }
    /**
     * @private
     * @return {?}
     */
    getOptions() {
        /** @type {?} */
        const options = {};
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
            options.onDragStart = (info) => {
                this.getNgZone(() => {
                    this.dragStart.emit(info);
                });
            };
        if (this.dragEnd)
            options.onDragEnd = (info) => {
                this.getNgZone(() => {
                    this.dragEnd.emit(info);
                });
            };
        if (this.drop)
            options.onDrop = (dropResult) => {
                this.getNgZone(() => {
                    this.drop.emit(dropResult);
                });
            };
        if (this.getChildPayload)
            options.getChildPayload = this.getChildPayload;
        if (this.shouldAnimateDrop)
            options.shouldAnimateDrop = this.shouldAnimateDrop;
        if (this.shouldAcceptDrop)
            options.shouldAcceptDrop = this.shouldAcceptDrop;
        if (this.dragEnter)
            options.onDragEnter = () => this.getNgZone(() => this.dragEnter.emit());
        if (this.dragLeave)
            options.onDragLeave = () => this.getNgZone(() => this.dragLeave.emit());
        if (this.dropReady)
            options.onDropReady = (dropResult) => {
                this.getNgZone(() => {
                    this.dropReady.emit(dropResult);
                });
            };
        if (this.getGhostParent)
            options.getGhostParent = this.getGhostParent;
        return options;
    }
    /**
     * @private
     * @param {?} clb
     * @return {?}
     */
    getNgZone(clb) {
        this._ngZone.run(() => {
            clb();
        });
    }
}
ContainerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: "smooth-dnd-container",
                template: "<div #container>\r\n    <ng-content></ng-content>\r\n</div>"
            }] }
];
/** @nocollapse */
ContainerComponent.ctorParameters = () => [
    { type: NgZone }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxSmoothDnDModule {
}
NgxSmoothDnDModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ContainerComponent, DraggableComponent],
                exports: [ContainerComponent, DraggableComponent]
            },] }
];

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