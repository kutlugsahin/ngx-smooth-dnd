/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ViewChild, ElementRef, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
import { dropHandlers, smoothDnD } from 'smooth-dnd';
smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
smoothDnD.wrapChild = false;
/**
 * @record
 */
export function DragStartEndInfo() { }
if (false) {
    /** @type {?} */
    DragStartEndInfo.prototype.isSource;
    /** @type {?} */
    DragStartEndInfo.prototype.payload;
    /** @type {?} */
    DragStartEndInfo.prototype.willAcceptDrop;
}
export class ContainerComponent {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContainerComponent.prototype.container;
    /** @type {?} */
    ContainerComponent.prototype.draggables;
    /** @type {?} */
    ContainerComponent.prototype.containerElementRef;
    /** @type {?} */
    ContainerComponent.prototype.orientation;
    /** @type {?} */
    ContainerComponent.prototype.behaviour;
    /** @type {?} */
    ContainerComponent.prototype.groupName;
    /** @type {?} */
    ContainerComponent.prototype.lockAxis;
    /** @type {?} */
    ContainerComponent.prototype.dragHandleSelector;
    /** @type {?} */
    ContainerComponent.prototype.nonDragAreaSelector;
    /** @type {?} */
    ContainerComponent.prototype.dragBeginDelay;
    /** @type {?} */
    ContainerComponent.prototype.animationDuration;
    /** @type {?} */
    ContainerComponent.prototype.autoScrollEnabled;
    /** @type {?} */
    ContainerComponent.prototype.dragClass;
    /** @type {?} */
    ContainerComponent.prototype.dropClass;
    /** @type {?} */
    ContainerComponent.prototype.dropPlaceholder;
    /** @type {?} */
    ContainerComponent.prototype.removeOnDropOut;
    /** @type {?} */
    ContainerComponent.prototype.dragStart;
    /** @type {?} */
    ContainerComponent.prototype.dragEnd;
    /** @type {?} */
    ContainerComponent.prototype.drop;
    /** @type {?} */
    ContainerComponent.prototype.dropReady;
    /** @type {?} */
    ContainerComponent.prototype.getChildPayload;
    /** @type {?} */
    ContainerComponent.prototype.shouldAnimateDrop;
    /** @type {?} */
    ContainerComponent.prototype.shouldAcceptDrop;
    /** @type {?} */
    ContainerComponent.prototype.dragEnter;
    /** @type {?} */
    ContainerComponent.prototype.dragLeave;
    /** @type {?} */
    ContainerComponent.prototype.getGhostParent;
    /**
     * @type {?}
     * @private
     */
    ContainerComponent.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQWlCLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEwsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWdDLE1BQU0sWUFBWSxDQUFDO0FBRW5GLFNBQVMsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsT0FBTyxDQUFDO0FBQ2hFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7O0FBRTVCLHNDQUlDOzs7SUFIQyxvQ0FBa0I7O0lBQ2xCLG1DQUFhOztJQUNiLDBDQUF3Qjs7QUFRMUIsTUFBTSxPQUFPLGtCQUFrQjs7OztJQXlDN0IsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFyQnpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUNqRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDL0MsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDdEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFZM0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFLRixDQUFDOzs7O0lBRXhDLGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FDeEIsSUFBSSxDQUFDLG1CQUFtQixD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QUFDLGFBQWE7d0JBQ25CLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLLFNBQUMsV0FBVzt1QkFDakIsS0FBSyxTQUFDLFVBQVU7aUNBQ2hCLEtBQUssU0FBQyxvQkFBb0I7a0NBQzFCLEtBQUssU0FBQyxxQkFBcUI7NkJBQzNCLEtBQUssU0FBQyxnQkFBZ0I7Z0NBQ3RCLEtBQUssU0FBQyxtQkFBbUI7Z0NBQ3pCLEtBQUssU0FBQyxtQkFBbUI7d0JBQ3pCLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLLFNBQUMsV0FBVzs4QkFDakIsS0FBSyxTQUFDLGlCQUFpQjs4QkFDdkIsS0FBSyxTQUFDLGlCQUFpQjt3QkFFdkIsTUFBTTtzQkFDTixNQUFNO21CQUNOLE1BQU07d0JBQ04sTUFBTTs4QkFDTixLQUFLO2dDQUNMLEtBQUs7K0JBS0wsS0FBSzt3QkFLTCxNQUFNO3dCQUNOLE1BQU07NkJBRU4sS0FBSzs7Ozs7OztJQXJDTix1Q0FBdUI7O0lBQ3ZCLHdDQUMwQzs7SUFDMUMsaURBQXdEOztJQUV4RCx5Q0FBa0M7O0lBQ2xDLHVDQUE4Qjs7SUFDOUIsdUNBQThCOztJQUM5QixzQ0FBNEI7O0lBQzVCLGdEQUFnRDs7SUFDaEQsaURBQWtEOztJQUNsRCw0Q0FBd0M7O0lBQ3hDLCtDQUE4Qzs7SUFDOUMsK0NBQThDOztJQUM5Qyx1Q0FBOEI7O0lBQzlCLHVDQUE4Qjs7SUFDOUIsNkNBQTBDOztJQUMxQyw2Q0FBMEM7O0lBRTFDLHVDQUEyRDs7SUFDM0QscUNBQXlEOztJQUN6RCxrQ0FBZ0Q7O0lBQ2hELHVDQUFxRDs7SUFDckQsNkNBQWdEOztJQUNoRCwrQ0FJYTs7SUFDYiw4Q0FJYTs7SUFDYix1Q0FBeUM7O0lBQ3pDLHVDQUF5Qzs7SUFFekMsNENBQ2tDOzs7OztJQUV0QixxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9kcmFnZ2FibGUvZHJhZ2dhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGRyb3BIYW5kbGVycywgc21vb3RoRG5ELCBEcm9wUmVzdWx0LCBDb250YWluZXJPcHRpb25zIH0gZnJvbSAnc21vb3RoLWRuZCc7XHJcblxyXG5zbW9vdGhEbkQuZHJvcEhhbmRsZXIgPSBkcm9wSGFuZGxlcnMucmVhY3REcm9wSGFuZGxlcigpLmhhbmRsZXI7XHJcbnNtb290aERuRC53cmFwQ2hpbGQgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1N0YXJ0RW5kSW5mbyB7XHJcbiAgaXNTb3VyY2U6IGJvb2xlYW47XHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIHdpbGxBY2NlcHREcm9wOiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6IFwic21vb3RoLWRuZC1jb250YWluZXJcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY29udGFpbmVyOiBhbnk7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihEcmFnZ2FibGVDb21wb25lbnQpXHJcbiAgZHJhZ2dhYmxlczogUXVlcnlMaXN0PERyYWdnYWJsZUNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXJFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoXCJvcmllbnRhdGlvblwiKSBvcmllbnRhdGlvbjtcclxuICBASW5wdXQoXCJiZWhhdmlvdXJcIikgYmVoYXZpb3VyO1xyXG4gIEBJbnB1dChcImdyb3VwTmFtZVwiKSBncm91cE5hbWU7XHJcbiAgQElucHV0KFwibG9ja0F4aXNcIikgbG9ja0F4aXM7XHJcbiAgQElucHV0KFwiZHJhZ0hhbmRsZVNlbGVjdG9yXCIpIGRyYWdIYW5kbGVTZWxlY3RvcjtcclxuICBASW5wdXQoXCJub25EcmFnQXJlYVNlbGVjdG9yXCIpIG5vbkRyYWdBcmVhU2VsZWN0b3I7XHJcbiAgQElucHV0KFwiZHJhZ0JlZ2luRGVsYXlcIikgZHJhZ0JlZ2luRGVsYXk7XHJcbiAgQElucHV0KFwiYW5pbWF0aW9uRHVyYXRpb25cIikgYW5pbWF0aW9uRHVyYXRpb247XHJcbiAgQElucHV0KFwiYXV0b1Njcm9sbEVuYWJsZWRcIikgYXV0b1Njcm9sbEVuYWJsZWQ7XHJcbiAgQElucHV0KFwiZHJhZ0NsYXNzXCIpIGRyYWdDbGFzcztcclxuICBASW5wdXQoXCJkcm9wQ2xhc3NcIikgZHJvcENsYXNzO1xyXG4gIEBJbnB1dChcImRyb3BQbGFjZWhvbGRlclwiKSBkcm9wUGxhY2Vob2xkZXI7XHJcbiAgQElucHV0KFwicmVtb3ZlT25Ecm9wT3V0XCIpIHJlbW92ZU9uRHJvcE91dDtcclxuXHJcbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1N0YXJ0RW5kSW5mbz4oKTtcclxuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1N0YXJ0RW5kSW5mbz4oKTtcclxuICBAT3V0cHV0KCkgZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcFJlc3VsdD4oKTtcclxuICBAT3V0cHV0KCkgZHJvcFJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wUmVzdWx0PigpO1xyXG4gIEBJbnB1dCgpIGdldENoaWxkUGF5bG9hZDogKGluZGV4OiBudW1iZXIpID0+IHt9O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2hvdWxkQW5pbWF0ZURyb3A6IChcclxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IENvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBhbnlcclxuICApID0+IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBzaG91bGRBY2NlcHREcm9wOiAoXHJcbiAgICBzb3VyY2VDb250YWluZXJPcHRpb25zOiBDb250YWluZXJPcHRpb25zLFxyXG4gICAgcGF5bG9hZDogYW55XHJcbiAgKSA9PiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBkcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXRHaG9zdFBhcmVudDogKCkgPT4gSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBzbW9vdGhEbkQoXHJcbiAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLmdldE9wdGlvbnMoKVxyXG4gICAgKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9wdGlvbnMoKTogQ29udGFpbmVyT3B0aW9ucyB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBDb250YWluZXJPcHRpb25zID0ge307XHJcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbikgb3B0aW9ucy5vcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb247XHJcbiAgICBpZiAodGhpcy5iZWhhdmlvdXIpIG9wdGlvbnMuYmVoYXZpb3VyID0gdGhpcy5iZWhhdmlvdXI7XHJcbiAgICBpZiAodGhpcy5ncm91cE5hbWUpIG9wdGlvbnMuZ3JvdXBOYW1lID0gdGhpcy5ncm91cE5hbWU7XHJcbiAgICBpZiAodGhpcy5sb2NrQXhpcykgb3B0aW9ucy5sb2NrQXhpcyA9IHRoaXMubG9ja0F4aXM7XHJcbiAgICBpZiAodGhpcy5kcmFnSGFuZGxlU2VsZWN0b3IpXHJcbiAgICAgIG9wdGlvbnMuZHJhZ0hhbmRsZVNlbGVjdG9yID0gdGhpcy5kcmFnSGFuZGxlU2VsZWN0b3I7XHJcbiAgICBpZiAodGhpcy5ub25EcmFnQXJlYVNlbGVjdG9yKVxyXG4gICAgICBvcHRpb25zLm5vbkRyYWdBcmVhU2VsZWN0b3IgPSB0aGlzLm5vbkRyYWdBcmVhU2VsZWN0b3I7XHJcbiAgICBpZiAodGhpcy5kcmFnQmVnaW5EZWxheSkgb3B0aW9ucy5kcmFnQmVnaW5EZWxheSA9IHRoaXMuZHJhZ0JlZ2luRGVsYXk7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25EdXJhdGlvbilcclxuICAgICAgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XHJcbiAgICBpZiAodGhpcy5hdXRvU2Nyb2xsRW5hYmxlZClcclxuICAgICAgb3B0aW9ucy5hdXRvU2Nyb2xsRW5hYmxlZCA9IHRoaXMuYXV0b1Njcm9sbEVuYWJsZWQ7XHJcbiAgICBpZiAodGhpcy5kcmFnQ2xhc3MpIG9wdGlvbnMuZHJhZ0NsYXNzID0gdGhpcy5kcmFnQ2xhc3M7XHJcbiAgICBpZiAodGhpcy5kcm9wQ2xhc3MpIG9wdGlvbnMuZHJvcENsYXNzID0gdGhpcy5kcm9wQ2xhc3M7XHJcbiAgICBpZiAodGhpcy5kcm9wUGxhY2Vob2xkZXIpIG9wdGlvbnMuZHJvcFBsYWNlaG9sZGVyID0gdGhpcy5kcm9wUGxhY2Vob2xkZXI7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ1N0YXJ0KVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ1N0YXJ0ID0gKGluZm86IERyYWdTdGFydEVuZEluZm8pID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyYWdTdGFydC5lbWl0KGluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdFbmQpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnRW5kID0gKGluZm86IERyYWdTdGFydEVuZEluZm8pID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyYWdFbmQuZW1pdChpbmZvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5kcm9wKVxyXG4gICAgICBvcHRpb25zLm9uRHJvcCA9IChkcm9wUmVzdWx0OiBEcm9wUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kcm9wLmVtaXQoZHJvcFJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZ2V0Q2hpbGRQYXlsb2FkKSBvcHRpb25zLmdldENoaWxkUGF5bG9hZCA9IHRoaXMuZ2V0Q2hpbGRQYXlsb2FkO1xyXG4gICAgaWYgKHRoaXMuc2hvdWxkQW5pbWF0ZURyb3ApXHJcbiAgICAgIG9wdGlvbnMuc2hvdWxkQW5pbWF0ZURyb3AgPSB0aGlzLnNob3VsZEFuaW1hdGVEcm9wO1xyXG4gICAgaWYgKHRoaXMuc2hvdWxkQWNjZXB0RHJvcCkgb3B0aW9ucy5zaG91bGRBY2NlcHREcm9wID0gdGhpcy5zaG91bGRBY2NlcHREcm9wO1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdFbnRlcilcclxuICAgICAgb3B0aW9ucy5vbkRyYWdFbnRlciA9ICgpID0+IHRoaXMuZ2V0Tmdab25lKCgpID0+IHRoaXMuZHJhZ0VudGVyLmVtaXQoKSk7XHJcbiAgICBpZiAodGhpcy5kcmFnTGVhdmUpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnTGVhdmUgPSAoKSA9PiB0aGlzLmdldE5nWm9uZSgoKSA9PiB0aGlzLmRyYWdMZWF2ZS5lbWl0KCkpO1xyXG5cclxuICAgIGlmICh0aGlzLmRyb3BSZWFkeSlcclxuICAgICAgb3B0aW9ucy5vbkRyb3BSZWFkeSA9IChkcm9wUmVzdWx0OiBEcm9wUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kcm9wUmVhZHkuZW1pdChkcm9wUmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuZ2V0R2hvc3RQYXJlbnQpIG9wdGlvbnMuZ2V0R2hvc3RQYXJlbnQgPSB0aGlzLmdldEdob3N0UGFyZW50O1xyXG5cclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROZ1pvbmUoY2xiKSB7XHJcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgY2xiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19