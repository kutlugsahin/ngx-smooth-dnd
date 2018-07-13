/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, QueryList, ViewChild, ElementRef, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
import SmoothDnD, { constants, dropHandlers } from 'smooth-dnd';
SmoothDnD.wrapChild = function (child) {
    return child;
};
SmoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
var wrapperClass = constants.wrapperClass, animationClass = constants.animationClass;
var /** @type {?} */ wrapperConstantClasses = (_a = {},
    _a[wrapperClass] = true,
    _a[animationClass] = true,
    _a);
/**
 * @record
 */
export function IDropResult() { }
function IDropResult_tsickle_Closure_declarations() {
    /** @type {?} */
    IDropResult.prototype.removedIndex;
    /** @type {?} */
    IDropResult.prototype.addedIndex;
    /** @type {?} */
    IDropResult.prototype.payload;
    /** @type {?} */
    IDropResult.prototype.element;
}
/**
 * @record
 */
export function IDragEvent() { }
function IDragEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    IDragEvent.prototype.isSource;
    /** @type {?} */
    IDragEvent.prototype.payload;
    /** @type {?} */
    IDragEvent.prototype.willAcceptDrop;
}
/**
 * @record
 */
export function IContainerOptions() { }
function IContainerOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    IContainerOptions.prototype.orientation;
    /** @type {?|undefined} */
    IContainerOptions.prototype.behaviour;
    /** @type {?|undefined} */
    IContainerOptions.prototype.groupName;
    /** @type {?|undefined} */
    IContainerOptions.prototype.lockAxis;
    /** @type {?|undefined} */
    IContainerOptions.prototype.dragHandleSelector;
    /** @type {?|undefined} */
    IContainerOptions.prototype.nonDragAreaSelector;
    /** @type {?|undefined} */
    IContainerOptions.prototype.dragBeginDelay;
    /** @type {?|undefined} */
    IContainerOptions.prototype.animationDuration;
    /** @type {?|undefined} */
    IContainerOptions.prototype.autoScrollEnabled;
    /** @type {?|undefined} */
    IContainerOptions.prototype.dragClass;
    /** @type {?|undefined} */
    IContainerOptions.prototype.dropClass;
    /** @type {?|undefined} */
    IContainerOptions.prototype.onDragStart;
    /** @type {?|undefined} */
    IContainerOptions.prototype.onDragEnd;
    /** @type {?|undefined} */
    IContainerOptions.prototype.onDrop;
    /** @type {?|undefined} */
    IContainerOptions.prototype.getChildPayload;
    /** @type {?|undefined} */
    IContainerOptions.prototype.shouldAnimateDrop;
    /** @type {?|undefined} */
    IContainerOptions.prototype.shouldAcceptDrop;
    /** @type {?|undefined} */
    IContainerOptions.prototype.onDragEnter;
    /** @type {?|undefined} */
    IContainerOptions.prototype.onDragLeave;
}
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.dragStart = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.drop = new EventEmitter();
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
        this.container = SmoothDnD(this.containerElementRef.nativeElement, this.getOptions());
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
     * @return {?}
     */
    ContainerComponent.prototype.getOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ options = {};
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
            options.onDragStart = function (event) {
                _this.getNgZone(function () {
                    _this.dragStart.emit(event);
                });
            };
        if (this.dragEnd)
            options.onDragEnd = function (event) {
                _this.getNgZone(function () {
                    _this.dragEnd.emit(event);
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
        return options;
    };
    /**
     * @param {?} clb
     * @return {?}
     */
    ContainerComponent.prototype.getNgZone = /**
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
                    template: "<div #container>\n    <ng-content></ng-content>\n</div>"
                },] },
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
        dragStart: [{ type: Output }],
        dragEnd: [{ type: Output }],
        drop: [{ type: Output }],
        getChildPayload: [{ type: Input }],
        shouldAnimateDrop: [{ type: Input }],
        shouldAcceptDrop: [{ type: Input }],
        dragEnter: [{ type: Output }],
        dragLeave: [{ type: Output }]
    };
    return ContainerComponent;
}());
export { ContainerComponent };
function ContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
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
    ContainerComponent.prototype.dragStart;
    /** @type {?} */
    ContainerComponent.prototype.dragEnd;
    /** @type {?} */
    ContainerComponent.prototype.drop;
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
    ContainerComponent.prototype._ngZone;
}
var _a;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQWlCLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEwsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR2hFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBQyxLQUFLO0lBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUM7Q0FDZCxDQUFBO0FBRUQsU0FBUyxDQUFDLFdBQVcsR0FBSSxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUM7QUFHL0QsSUFBQSxxQ0FBWSxFQUNaLHlDQUFjLENBQ0Y7QUFFZCxxQkFBTSxzQkFBc0I7SUFDMUIsR0FBQyxZQUFZLElBQUcsSUFBSTtJQUNwQixHQUFDLGNBQWMsSUFBRyxJQUFJO09BQ3ZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVGQSw0QkFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7eUJBakJiLElBQUksWUFBWSxFQUFjO3VCQUNoQyxJQUFJLFlBQVksRUFBYztvQkFDakMsSUFBSSxZQUFZLEVBQWU7eUJBWTFCLElBQUksWUFBWSxFQUFFO3lCQUNsQixJQUFJLFlBQVksRUFBRTtLQUVEOzs7O0lBRXZDLDRDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FB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QUFLLFNBQUMsb0JBQW9CO3NDQUMxQixLQUFLLFNBQUMscUJBQXFCO2lDQUMzQixLQUFLLFNBQUMsZ0JBQWdCO29DQUN0QixLQUFLLFNBQUMsbUJBQW1CO29DQUN6QixLQUFLLFNBQUMsbUJBQW1COzRCQUN6QixLQUFLLFNBQUMsV0FBVzs0QkFDakIsS0FBSyxTQUFDLFdBQVc7NEJBRWpCLE1BQU07MEJBQ04sTUFBTTt1QkFDTixNQUFNO2tDQUNOLEtBQUs7b0NBQ0wsS0FBSzttQ0FLTCxLQUFLOzRCQUtMLE1BQU07NEJBQ04sTUFBTTs7NkJBeEdUOztTQXVFYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9kcmFnZ2FibGUvZHJhZ2dhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCBTbW9vdGhEbkQsIHsgY29uc3RhbnRzLCBkcm9wSGFuZGxlcnMgfSBmcm9tICdzbW9vdGgtZG5kJztcclxuaW1wb3J0IHsgd3JhcHBlZEVycm9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvZXJyb3JfaGFuZGxlcic7XHJcblxyXG5TbW9vdGhEbkQud3JhcENoaWxkID0gKGNoaWxkKSA9PiB7XHJcbiAgcmV0dXJuIGNoaWxkO1xyXG59XHJcblxyXG5TbW9vdGhEbkQuZHJvcEhhbmRsZXIgPSAgZHJvcEhhbmRsZXJzLnJlYWN0RHJvcEhhbmRsZXIoKS5oYW5kbGVyO1xyXG5cclxuY29uc3Qge1xyXG4gIHdyYXBwZXJDbGFzcyxcclxuICBhbmltYXRpb25DbGFzc1xyXG59ID0gY29uc3RhbnRzO1xyXG5cclxuY29uc3Qgd3JhcHBlckNvbnN0YW50Q2xhc3NlcyA9IHtcclxuICBbd3JhcHBlckNsYXNzXTogdHJ1ZSxcclxuICBbYW5pbWF0aW9uQ2xhc3NdOiB0cnVlLFxyXG59O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1vdXRwdXQtb24tcHJlZml4XHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyb3BSZXN1bHQge1xyXG4gIHJlbW92ZWRJbmRleDogbnVtYmVyO1xyXG4gIGFkZGVkSW5kZXg6IG51bWJlcjtcclxuICBwYXlsb2FkOiBJUGF5bG9hZDtcclxuICBlbGVtZW50OiBFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEcmFnRXZlbnQge1xyXG4gIGlzU291cmNlOiBib29sZWFuO1xyXG4gIHBheWxvYWQ6IElQYXlsb2FkO1xyXG4gIHdpbGxBY2NlcHREcm9wOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJUGF5bG9hZCA9IGFueTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhaW5lck9wdGlvbnMge1xyXG4gIG9yaWVudGF0aW9uPzogc3RyaW5nO1xyXG4gIGJlaGF2aW91cj86IHN0cmluZztcclxuICBncm91cE5hbWU/OiBzdHJpbmc7XHJcbiAgbG9ja0F4aXM/OiBzdHJpbmc7XHJcbiAgZHJhZ0hhbmRsZVNlbGVjdG9yPzogc3RyaW5nO1xyXG4gIG5vbkRyYWdBcmVhU2VsZWN0b3I/OiBzdHJpbmc7XHJcbiAgZHJhZ0JlZ2luRGVsYXk/OiBudW1iZXI7XHJcbiAgYW5pbWF0aW9uRHVyYXRpb24/OiBudW1iZXI7XHJcbiAgYXV0b1Njcm9sbEVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIGRyYWdDbGFzcz86IHN0cmluZztcclxuICBkcm9wQ2xhc3M/OiBzdHJpbmc7XHJcbiAgb25EcmFnU3RhcnQ/OiAoZHJhZ0V2ZW50OiBJRHJhZ0V2ZW50KSA9PiB2b2lkO1xyXG4gIG9uRHJhZ0VuZD86IChkcmFnRXZlbnQ6IElEcmFnRXZlbnQpID0+IHZvaWQ7XHJcbiAgb25Ecm9wPzogKGRyb3BSZXN1bHQ6IElEcm9wUmVzdWx0KSA9PiB2b2lkO1xyXG4gIGdldENoaWxkUGF5bG9hZD86IChpbmRleDogbnVtYmVyKSA9PiB7fTtcclxuICBzaG91bGRBbmltYXRlRHJvcD86IChcclxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IElDb250YWluZXJPcHRpb25zLFxyXG4gICAgcGF5bG9hZDogSVBheWxvYWRcclxuICApID0+IGJvb2xlYW47XHJcbiAgc2hvdWxkQWNjZXB0RHJvcD86IChcclxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IElDb250YWluZXJPcHRpb25zLFxyXG4gICAgcGF5bG9hZDogSVBheWxvYWRcclxuICApID0+IGJvb2xlYW47XHJcbiAgb25EcmFnRW50ZXI/OiAoKSA9PiB2b2lkO1xyXG4gIG9uRHJhZ0xlYXZlPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiBcInNtb290aC1kbmQtY29udGFpbmVyXCIsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICNjb250YWluZXI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBjb250YWluZXI6IGFueTtcclxuICBAQ29udGVudENoaWxkcmVuKERyYWdnYWJsZUNvbXBvbmVudClcclxuICBkcmFnZ2FibGVzOiBRdWVyeUxpc3Q8RHJhZ2dhYmxlQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lckVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dChcIm9yaWVudGF0aW9uXCIpIG9yaWVudGF0aW9uO1xyXG4gIEBJbnB1dChcImJlaGF2aW91clwiKSBiZWhhdmlvdXI7XHJcbiAgQElucHV0KFwiZ3JvdXBOYW1lXCIpIGdyb3VwTmFtZTtcclxuICBASW5wdXQoXCJsb2NrQXhpc1wiKSBsb2NrQXhpcztcclxuICBASW5wdXQoXCJkcmFnSGFuZGxlU2VsZWN0b3JcIikgZHJhZ0hhbmRsZVNlbGVjdG9yO1xyXG4gIEBJbnB1dChcIm5vbkRyYWdBcmVhU2VsZWN0b3JcIikgbm9uRHJhZ0FyZWFTZWxlY3RvcjtcclxuICBASW5wdXQoXCJkcmFnQmVnaW5EZWxheVwiKSBkcmFnQmVnaW5EZWxheTtcclxuICBASW5wdXQoXCJhbmltYXRpb25EdXJhdGlvblwiKSBhbmltYXRpb25EdXJhdGlvbjtcclxuICBASW5wdXQoXCJhdXRvU2Nyb2xsRW5hYmxlZFwiKSBhdXRvU2Nyb2xsRW5hYmxlZDtcclxuICBASW5wdXQoXCJkcmFnQ2xhc3NcIikgZHJhZ0NsYXNzO1xyXG4gIEBJbnB1dChcImRyb3BDbGFzc1wiKSBkcm9wQ2xhc3M7XHJcblxyXG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPElEcmFnRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPElEcmFnRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPElEcm9wUmVzdWx0PigpO1xyXG4gIEBJbnB1dCgpIGdldENoaWxkUGF5bG9hZDogKGluZGV4OiBudW1iZXIpID0+IHt9O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2hvdWxkQW5pbWF0ZURyb3A6IChcclxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IElDb250YWluZXJPcHRpb25zLFxyXG4gICAgcGF5bG9hZDogSVBheWxvYWRcclxuICApID0+IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBzaG91bGRBY2NlcHREcm9wOiAoXHJcbiAgICBzb3VyY2VDb250YWluZXJPcHRpb25zOiBJQ29udGFpbmVyT3B0aW9ucyxcclxuICAgIHBheWxvYWQ6IElQYXlsb2FkXHJcbiAgKSA9PiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBkcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gU21vb3RoRG5EKFxyXG4gICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgdGhpcy5nZXRPcHRpb25zKClcclxuICAgICk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250YWluZXIuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPcHRpb25zKCk6IElDb250YWluZXJPcHRpb25zIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IElDb250YWluZXJPcHRpb25zID0ge307XHJcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbikgb3B0aW9ucy5vcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb247XHJcbiAgICBpZiAodGhpcy5iZWhhdmlvdXIpIG9wdGlvbnMuYmVoYXZpb3VyID0gdGhpcy5iZWhhdmlvdXI7XHJcbiAgICBpZiAodGhpcy5ncm91cE5hbWUpIG9wdGlvbnMuZ3JvdXBOYW1lID0gdGhpcy5ncm91cE5hbWU7XHJcbiAgICBpZiAodGhpcy5sb2NrQXhpcykgb3B0aW9ucy5sb2NrQXhpcyA9IHRoaXMubG9ja0F4aXM7XHJcbiAgICBpZiAodGhpcy5kcmFnSGFuZGxlU2VsZWN0b3IpXHJcbiAgICAgIG9wdGlvbnMuZHJhZ0hhbmRsZVNlbGVjdG9yID0gdGhpcy5kcmFnSGFuZGxlU2VsZWN0b3I7XHJcbiAgICBpZiAodGhpcy5ub25EcmFnQXJlYVNlbGVjdG9yKVxyXG4gICAgICBvcHRpb25zLm5vbkRyYWdBcmVhU2VsZWN0b3IgPSB0aGlzLm5vbkRyYWdBcmVhU2VsZWN0b3I7XHJcbiAgICBpZiAodGhpcy5kcmFnQmVnaW5EZWxheSkgb3B0aW9ucy5kcmFnQmVnaW5EZWxheSA9IHRoaXMuZHJhZ0JlZ2luRGVsYXk7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25EdXJhdGlvbilcclxuICAgICAgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XHJcbiAgICBpZiAodGhpcy5hdXRvU2Nyb2xsRW5hYmxlZClcclxuICAgICAgb3B0aW9ucy5hdXRvU2Nyb2xsRW5hYmxlZCA9IHRoaXMuYXV0b1Njcm9sbEVuYWJsZWQ7XHJcbiAgICBpZiAodGhpcy5kcmFnQ2xhc3MpIG9wdGlvbnMuZHJhZ0NsYXNzID0gdGhpcy5kcmFnQ2xhc3M7XHJcbiAgICBpZiAodGhpcy5kcm9wQ2xhc3MpIG9wdGlvbnMuZHJvcENsYXNzID0gdGhpcy5kcm9wQ2xhc3M7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ1N0YXJ0KVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ1N0YXJ0ID0gKGV2ZW50OiBJRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kcmFnU3RhcnQuZW1pdChldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmRyYWdFbmQpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnRW5kID0gKGV2ZW50OiBJRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kcmFnRW5kLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmRyb3ApXHJcbiAgICAgIG9wdGlvbnMub25Ecm9wID0gKGRyb3BSZXN1bHQ6IElEcm9wUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kcm9wLmVtaXQoZHJvcFJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZ2V0Q2hpbGRQYXlsb2FkKSBvcHRpb25zLmdldENoaWxkUGF5bG9hZCA9IHRoaXMuZ2V0Q2hpbGRQYXlsb2FkO1xyXG4gICAgaWYgKHRoaXMuc2hvdWxkQW5pbWF0ZURyb3ApXHJcbiAgICAgIG9wdGlvbnMuc2hvdWxkQW5pbWF0ZURyb3AgPSB0aGlzLnNob3VsZEFuaW1hdGVEcm9wO1xyXG4gICAgaWYgKHRoaXMuc2hvdWxkQWNjZXB0RHJvcCkgb3B0aW9ucy5zaG91bGRBY2NlcHREcm9wID0gdGhpcy5zaG91bGRBY2NlcHREcm9wO1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdFbnRlcilcclxuICAgICAgb3B0aW9ucy5vbkRyYWdFbnRlciA9ICgpID0+IHRoaXMuZ2V0Tmdab25lKCgpID0+IHRoaXMuZHJhZ0VudGVyLmVtaXQoKSk7XHJcbiAgICBpZiAodGhpcy5kcmFnTGVhdmUpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnTGVhdmUgPSAoKSA9PiB0aGlzLmdldE5nWm9uZSgoKSA9PiB0aGlzLmRyYWdMZWF2ZS5lbWl0KCkpO1xyXG5cclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROZ1pvbmUoY2xiKSB7XHJcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgY2xiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19