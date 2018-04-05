import { Component, ContentChildren, ViewChild, Input, Output, EventEmitter, NgModule } from '@angular/core';
import SmoothDnD, { constants } from 'smooth-dnd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const { wrapperClass, animationClass } = constants;
const constantClasses = {
    [wrapperClass]: true,
    [animationClass]: true,
};
class DraggableComponent {
    constructor() {
        this.classList = Object.assign({}, constantClasses);
    }
}
DraggableComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-smooth-dnd-draggable',
                template: `<div [ngClass]="classList">
  <ng-content></ng-content>
</div>
`,
            },] },
];
/** @nocollapse */
DraggableComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

class ContainerComponent {
    constructor() {
        this.onDrop = new EventEmitter();
    }
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
        if (this.onDrop)
            options.onDrop = (removedIndex, addedIndex, payload, element) => {
                this.onDrop.emit({
                    removedIndex, addedIndex, payload, element
                });
            };
    }
}
ContainerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-smooth-dnd-container',
                template: `<div #container [ngClass]="classList">
  <ng-content></ng-content>
</div>`
            },] },
];
/** @nocollapse */
ContainerComponent.ctorParameters = () => [];
ContainerComponent.propDecorators = {
    "draggables": [{ type: ContentChildren, args: [DraggableComponent,] },],
    "containerElementRef": [{ type: ViewChild, args: ['container',] },],
    "orientation": [{ type: Input, args: ['orientation',] },],
    "onDrop": [{ type: Output },],
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
