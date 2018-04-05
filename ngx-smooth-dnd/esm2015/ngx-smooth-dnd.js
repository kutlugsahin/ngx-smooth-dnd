import { Component, Input, ContentChildren, ViewChild, NgModule } from '@angular/core';
import SmoothDnD from 'smooth-dnd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DraggableComponent {
    constructor() {
        this.active = false;
    }
}
DraggableComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-smooth-dnd-draggable',
                template: `<div [hidden]="!active" class="pane">
  <ng-content></ng-content>
</div>
`,
            },] },
];
/** @nocollapse */
DraggableComponent.ctorParameters = () => [];
DraggableComponent.propDecorators = {
    "tabTitle": [{ type: Input },],
    "active": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ContainerComponent {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.container = SmoothDnD(this.containerElementRef.nativeElement, this.options);
    }
}
ContainerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-smooth-dnd-container',
                template: `<div #container>
  <div>Draggable 1</div>
  <div>Draggable 2</div>
  <div>Draggable 3</div>
  <!-- <ng-content></ng-content> -->
</div>`
            },] },
];
/** @nocollapse */
ContainerComponent.ctorParameters = () => [];
ContainerComponent.propDecorators = {
    "tabs": [{ type: ContentChildren, args: [DraggableComponent,] },],
    "containerElementRef": [{ type: ViewChild, args: ['container',] },],
    "options": [{ type: Input, args: ['options',] },],
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
