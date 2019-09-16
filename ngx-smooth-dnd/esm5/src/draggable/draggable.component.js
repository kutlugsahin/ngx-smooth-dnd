var _a;
import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { constants } from 'smooth-dnd';
var wrapperClass = constants.wrapperClass, animationClass = constants.animationClass;
var constantClasses = (_a = {},
    _a[wrapperClass] = true,
    _a[animationClass] = true,
    _a);
var DraggableComponent = /** @class */ (function () {
    function DraggableComponent() {
    }
    DraggableComponent.prototype.ngAfterViewInit = function () {
        this.wrapper.nativeElement.parentNode.className = constants.wrapperClass;
    };
    tslib_1.__decorate([
        ViewChild('draggableWrapper', { static: true }),
        tslib_1.__metadata("design:type", ElementRef)
    ], DraggableComponent.prototype, "wrapper", void 0);
    DraggableComponent = tslib_1.__decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'smooth-dnd-draggable',
            template: "<ng-container #draggableWrapper>\r\n    <ng-content></ng-content>\r\n</ng-container>"
        })
    ], DraggableComponent);
    return DraggableComponent;
}());
export { DraggableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2RyYWdnYWJsZS9kcmFnZ2FibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXJDLElBQUEscUNBQVksRUFDWix5Q0FBYyxDQUNGO0FBRWQsSUFBTSxlQUFlO0lBQ25CLEdBQUMsWUFBWSxJQUFHLElBQUk7SUFDcEIsR0FBQyxjQUFjLElBQUcsSUFBSTtPQUN2QixDQUFDO0FBT0Y7SUFBQTtJQUtBLENBQUM7SUFIQyw0Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO0lBQzNFLENBQUM7SUFIOEM7UUFBOUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDOzBDQUFVLFVBQVU7dURBQUM7SUFEeEQsa0JBQWtCO1FBTDlCLFNBQVMsQ0FBQztZQUNULDhDQUE4QztZQUM5QyxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLGdHQUF5QztTQUMxQyxDQUFDO09BQ1csa0JBQWtCLENBSzlCO0lBQUQseUJBQUM7Q0FBQSxBQUxELElBS0M7U0FMWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICdzbW9vdGgtZG5kJztcclxuY29uc3Qge1xyXG4gIHdyYXBwZXJDbGFzcyxcclxuICBhbmltYXRpb25DbGFzc1xyXG59ID0gY29uc3RhbnRzO1xyXG5cclxuY29uc3QgY29uc3RhbnRDbGFzc2VzID0ge1xyXG4gIFt3cmFwcGVyQ2xhc3NdOiB0cnVlLFxyXG4gIFthbmltYXRpb25DbGFzc106IHRydWUsXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzbW9vdGgtZG5kLWRyYWdnYWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYWdnYWJsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ2RyYWdnYWJsZVdyYXBwZXInLCB7c3RhdGljOiB0cnVlfSkgd3JhcHBlcjogRWxlbWVudFJlZjtcclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9IGNvbnN0YW50cy53cmFwcGVyQ2xhc3M7XHJcbiAgfVxyXG59XHJcbiJdfQ==