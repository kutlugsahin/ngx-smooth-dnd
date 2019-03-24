/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { constants } from 'smooth-dnd';
const { wrapperClass, animationClass } = constants;
/** @type {?} */
const constantClasses = {
    [wrapperClass]: true,
    [animationClass]: true,
};
export class DraggableComponent {
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
if (false) {
    /** @type {?} */
    DraggableComponent.prototype.wrapper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2RyYWdnYWJsZS9kcmFnZ2FibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7TUFDakMsRUFDSixZQUFZLEVBQ1osY0FBYyxFQUNmLEdBQUcsU0FBUzs7TUFFUCxlQUFlLEdBQUc7SUFDdEIsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJO0lBQ3BCLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSTtDQUN2QjtBQU9ELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFFN0IsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUMzRSxDQUFDOzs7WUFURixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGdHQUF5QzthQUMxQzs7O3NCQUVFLFNBQVMsU0FBQyxrQkFBa0I7Ozs7SUFBN0IscUNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnc21vb3RoLWRuZCc7XHJcbmNvbnN0IHtcclxuICB3cmFwcGVyQ2xhc3MsXHJcbiAgYW5pbWF0aW9uQ2xhc3NcclxufSA9IGNvbnN0YW50cztcclxuXHJcbmNvbnN0IGNvbnN0YW50Q2xhc3NlcyA9IHtcclxuICBbd3JhcHBlckNsYXNzXTogdHJ1ZSxcclxuICBbYW5pbWF0aW9uQ2xhc3NdOiB0cnVlLFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc21vb3RoLWRuZC1kcmFnZ2FibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kcmFnZ2FibGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKCdkcmFnZ2FibGVXcmFwcGVyJykgd3JhcHBlcjogRWxlbWVudFJlZjtcclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9IGNvbnN0YW50cy53cmFwcGVyQ2xhc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==