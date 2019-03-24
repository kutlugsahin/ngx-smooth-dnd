var _a;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { constants } from 'smooth-dnd';
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
export { DraggableComponent };
if (false) {
    /** @type {?} */
    DraggableComponent.prototype.wrapper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2RyYWdnYWJsZS9kcmFnZ2FibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXJDLElBQUEscUNBQVksRUFDWix5Q0FBYzs7SUFHVixlQUFlO0lBQ25CLEdBQUMsWUFBWSxJQUFHLElBQUk7SUFDcEIsR0FBQyxjQUFjLElBQUcsSUFBSTtPQUN2QjtBQUVEO0lBQUE7SUFVQSxDQUFDOzs7O0lBSEMsNENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO0lBQzNFLENBQUM7O2dCQVRGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsZ0dBQXlDO2lCQUMxQzs7OzBCQUVFLFNBQVMsU0FBQyxrQkFBa0I7O0lBSS9CLHlCQUFDO0NBQUEsQUFWRCxJQVVDO1NBTFksa0JBQWtCOzs7SUFDN0IscUNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnc21vb3RoLWRuZCc7XHJcbmNvbnN0IHtcclxuICB3cmFwcGVyQ2xhc3MsXHJcbiAgYW5pbWF0aW9uQ2xhc3NcclxufSA9IGNvbnN0YW50cztcclxuXHJcbmNvbnN0IGNvbnN0YW50Q2xhc3NlcyA9IHtcclxuICBbd3JhcHBlckNsYXNzXTogdHJ1ZSxcclxuICBbYW5pbWF0aW9uQ2xhc3NdOiB0cnVlLFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc21vb3RoLWRuZC1kcmFnZ2FibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kcmFnZ2FibGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKCdkcmFnZ2FibGVXcmFwcGVyJykgd3JhcHBlcjogRWxlbWVudFJlZjtcclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9IGNvbnN0YW50cy53cmFwcGVyQ2xhc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==