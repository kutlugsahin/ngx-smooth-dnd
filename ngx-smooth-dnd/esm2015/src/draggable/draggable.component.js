/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { constants } from 'smooth-dnd';
const { wrapperClass, animationClass } = constants;
const /** @type {?} */ constantClasses = {
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
                template: `<ng-container #draggableWrapper>
    <ng-content></ng-content>
</ng-container>`
            },] },
];
DraggableComponent.propDecorators = {
    wrapper: [{ type: ViewChild, args: ['draggableWrapper',] }]
};
function DraggableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DraggableComponent.prototype.wrapper;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2RyYWdnYWJsZS9kcmFnZ2FibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkMsTUFBTSxFQUNKLFlBQVksRUFDWixjQUFjLEVBQ2YsR0FBRyxTQUFTLENBQUM7QUFFZCx1QkFBTSxlQUFlLEdBQUc7SUFDdEIsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJO0lBQ3BCLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSTtDQUN2QixDQUFDO0FBU0YsTUFBTTs7OztJQUVKLGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7S0FDMUU7OztZQVhGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOztnQkFFSTthQUNmOzs7c0JBRUUsU0FBUyxTQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJ3Ntb290aC1kbmQnO1xyXG5jb25zdCB7XHJcbiAgd3JhcHBlckNsYXNzLFxyXG4gIGFuaW1hdGlvbkNsYXNzXHJcbn0gPSBjb25zdGFudHM7XHJcblxyXG5jb25zdCBjb25zdGFudENsYXNzZXMgPSB7XHJcbiAgW3dyYXBwZXJDbGFzc106IHRydWUsXHJcbiAgW2FuaW1hdGlvbkNsYXNzXTogdHJ1ZSxcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3Ntb290aC1kbmQtZHJhZ2dhYmxlJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgI2RyYWdnYWJsZVdyYXBwZXI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbmctY29udGFpbmVyPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ2RyYWdnYWJsZVdyYXBwZXInKSB3cmFwcGVyOiBFbGVtZW50UmVmO1xyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuY2xhc3NOYW1lID0gY29uc3RhbnRzLndyYXBwZXJDbGFzcztcclxuICB9XHJcbn1cclxuIl19