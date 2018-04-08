import { Component, ViewChild, ContentChildren, Input, Output, EventEmitter, NgZone, NgModule } from '@angular/core';
import SmoothDnD, { constants, dropHandlers } from 'smooth-dnd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const { wrapperClass, animationClass } = constants;
class DraggableComponent {
    constructor() {
        this.classList = `${wrapperClass} ${animationClass}`;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.wrapper.nativeElement.parentElement.className = 'smooth-dnd-draggable-wrapper';
    }
}
DraggableComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[draggable]',
                template: `<div #draggableWrapper>
    <ng-content></ng-content>
</div>`
            },] },
];
/** @nocollapse */
DraggableComponent.ctorParameters = () => [];
DraggableComponent.propDecorators = {
    "wrapper": [{ type: ViewChild, args: ['draggableWrapper',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
SmoothDnD.wrapChild = (child) => {
    return child;
};
SmoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
const { wrapperClass: wrapperClass$1, animationClass: animationClass$1 } = constants;
const wrapperConstantClasses = {
    [wrapperClass$1]: true,
    [animationClass$1]: true,
};
/**
 * @record
 */

/**
 * @record
 */

class ContainerComponent {
    /**
     * @param {?} _ngZone
     */
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this.dragStart = new EventEmitter();
        this.drop = new EventEmitter();
        this.dragEnter = new EventEmitter();
        this.dragLeave = new EventEmitter();
        this.wrapperClassList = Object.assign({}, wrapperConstantClasses);
    }
    ;
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.container = SmoothDnD(this.containerElementRef.nativeElement, this.getOptions());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.container.dispose();
    }
    /**
     * @return {?}
     */
    getOptions() {
        const /** @type {?} */ options = {};
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
            options.onDragStart = (index, payload) => {
                this.getNgZone(() => {
                    this.dragStart.emit({ index, payload });
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
        return options;
    }
    /**
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
                selector: '[container]',
                template: `<div #container>
    <ng-content></ng-content>
</div>`
            },] },
];
/** @nocollapse */
ContainerComponent.ctorParameters = () => [
    { type: NgZone, },
];
ContainerComponent.propDecorators = {
    "draggables": [{ type: ContentChildren, args: [DraggableComponent,] },],
    "containerElementRef": [{ type: ViewChild, args: ['container',] },],
    "orientation": [{ type: Input, args: ['orientation',] },],
    "behaviour": [{ type: Input, args: ['behaviour',] },],
    "groupName": [{ type: Input, args: ['groupName',] },],
    "lockAxis": [{ type: Input, args: ['lockAxis',] },],
    "dragHandleSelector": [{ type: Input, args: ['dragHandleSelector',] },],
    "nonDragAreaSelector": [{ type: Input, args: ['nonDragAreaSelector',] },],
    "dragBeginDelay": [{ type: Input, args: ['dragBeginDelay',] },],
    "animationDuration": [{ type: Input, args: ['animationDuration',] },],
    "autoScrollEnabled": [{ type: Input, args: ['autoScrollEnabled',] },],
    "dragClass": [{ type: Input, args: ['dragClass',] },],
    "dropClass": [{ type: Input, args: ['dropClass',] },],
    "dragStart": [{ type: Output },],
    "drop": [{ type: Output },],
    "getChildPayload": [{ type: Input },],
    "shouldAnimateDrop": [{ type: Input },],
    "shouldAcceptDrop": [{ type: Input },],
    "dragEnter": [{ type: Output },],
    "dragLeave": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxSmoothDnDModule {
}
NgxSmoothDnDModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ContainerComponent, DraggableComponent],
                exports: [ContainerComponent, DraggableComponent]
            },] },
];
/** @nocollapse */
NgxSmoothDnDModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { NgxSmoothDnDModule, ContainerComponent, DraggableComponent };
//# sourceMappingURL=ngx-smooth-dnd.js.map
