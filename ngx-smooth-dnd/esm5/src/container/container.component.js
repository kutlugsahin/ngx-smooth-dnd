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
/** @type {?} */
var wrapperConstantClasses = (_a = {},
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
    /** @type {?|undefined} */
    IContainerOptions.prototype.onDropReady;
}
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(_ngZone) {
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
        /** @type {?} */
        var options = {};
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
        if (this.dropReady)
            options.onDropReady = function (dropResult) {
                _this.getNgZone(function () {
                    _this.dropReady.emit(dropResult);
                });
            };
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
        dropReady: [{ type: Output }],
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
    ContainerComponent.prototype._ngZone;
}
var _a;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQWlCLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEwsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR2hFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBQyxLQUFLO0lBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUM7Q0FDZCxDQUFBO0FBRUQsU0FBUyxDQUFDLFdBQVcsR0FBSSxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUM7QUFHL0QsSUFBQSxxQ0FBWSxFQUNaLHlDQUFjLENBQ0Y7O0FBRWQsSUFBTSxzQkFBc0I7SUFDMUIsR0FBQyxZQUFZLElBQUcsSUFBSTtJQUNwQixHQUFDLGNBQWMsSUFBRyxJQUFJO1FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlGQSw0QkFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7eUJBbEJiLElBQUksWUFBWSxFQUFjO3VCQUNoQyxJQUFJLFlBQVksRUFBYztvQkFDakMsSUFBSSxZQUFZLEVBQWU7eUJBQzFCLElBQUksWUFBWSxFQUFlO3lCQVkvQixJQUFJLFlBQVksRUFBRTt5QkFDbEIsSUFBSSxZQUFZLEVBQUU7S0FFRDs7OztJQUV2Qyw0Q0FBZTs7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QUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLHlEQUVMO2lCQUNOOzs7O2dCQXZFdUosTUFBTTs7OzZCQTBFM0osZUFBZSxTQUFDLGtCQUFrQjtzQ0FFbEMsU0FBUyxTQUFDLFdBQVc7OEJBRXJCLEtBQUssU0FBQyxhQUFhOzRCQUNuQixLQUFLLFNBQUMsV0FBVzs0QkFDakIsS0FBSyxTQUFDLFdBQVc7MkJBQ2pCLEtBQUssU0FBQyxVQUFVO3FDQUNoQixLQUFLLFNBQUMsb0JBQW9CO3NDQUMxQixLQUFLLFNBQUMscUJBQXFCO2lDQUMzQixLQUFLLFNBQUMsZ0JBQWdCO29DQUN0QixLQUFLLFNBQUMsbUJBQW1CO29DQUN6QixLQUFLLFNBQUMsbUJBQW1COzRCQUN6QixLQUFLLFNBQUMsV0FBVzs0QkFDakIsS0FBSyxTQUFDLFdBQVc7NEJBRWpCLE1BQU07MEJBQ04sTUFBTTt1QkFDTixNQUFNOzRCQUNOLE1BQU07a0NBQ04sS0FBSztvQ0FDTCxLQUFLO21DQUtMLEtBQUs7NEJBS0wsTUFBTTs0QkFDTixNQUFNOzs2QkExR1Q7O1NBd0VhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdnYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2RyYWdnYWJsZS9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IFNtb290aERuRCwgeyBjb25zdGFudHMsIGRyb3BIYW5kbGVycyB9IGZyb20gJ3Ntb290aC1kbmQnO1xyXG5pbXBvcnQgeyB3cmFwcGVkRXJyb3IgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9lcnJvcl9oYW5kbGVyJztcclxuXHJcblNtb290aERuRC53cmFwQ2hpbGQgPSAoY2hpbGQpID0+IHtcclxuICByZXR1cm4gY2hpbGQ7XHJcbn1cclxuXHJcblNtb290aERuRC5kcm9wSGFuZGxlciA9ICBkcm9wSGFuZGxlcnMucmVhY3REcm9wSGFuZGxlcigpLmhhbmRsZXI7XHJcblxyXG5jb25zdCB7XHJcbiAgd3JhcHBlckNsYXNzLFxyXG4gIGFuaW1hdGlvbkNsYXNzXHJcbn0gPSBjb25zdGFudHM7XHJcblxyXG5jb25zdCB3cmFwcGVyQ29uc3RhbnRDbGFzc2VzID0ge1xyXG4gIFt3cmFwcGVyQ2xhc3NdOiB0cnVlLFxyXG4gIFthbmltYXRpb25DbGFzc106IHRydWUsXHJcbn07XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLW91dHB1dC1vbi1wcmVmaXhcclxuZXhwb3J0IGludGVyZmFjZSBJRHJvcFJlc3VsdCB7XHJcbiAgcmVtb3ZlZEluZGV4OiBudW1iZXI7XHJcbiAgYWRkZWRJbmRleDogbnVtYmVyO1xyXG4gIHBheWxvYWQ6IElQYXlsb2FkO1xyXG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdFdmVudCB7XHJcbiAgaXNTb3VyY2U6IGJvb2xlYW47XHJcbiAgcGF5bG9hZDogSVBheWxvYWQ7XHJcbiAgd2lsbEFjY2VwdERyb3A6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElQYXlsb2FkID0gYW55O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFpbmVyT3B0aW9ucyB7XHJcbiAgb3JpZW50YXRpb24/OiBzdHJpbmc7XHJcbiAgYmVoYXZpb3VyPzogc3RyaW5nO1xyXG4gIGdyb3VwTmFtZT86IHN0cmluZztcclxuICBsb2NrQXhpcz86IHN0cmluZztcclxuICBkcmFnSGFuZGxlU2VsZWN0b3I/OiBzdHJpbmc7XHJcbiAgbm9uRHJhZ0FyZWFTZWxlY3Rvcj86IHN0cmluZztcclxuICBkcmFnQmVnaW5EZWxheT86IG51bWJlcjtcclxuICBhbmltYXRpb25EdXJhdGlvbj86IG51bWJlcjtcclxuICBhdXRvU2Nyb2xsRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgZHJhZ0NsYXNzPzogc3RyaW5nO1xyXG4gIGRyb3BDbGFzcz86IHN0cmluZztcclxuICBvbkRyYWdTdGFydD86IChkcmFnRXZlbnQ6IElEcmFnRXZlbnQpID0+IHZvaWQ7XHJcbiAgb25EcmFnRW5kPzogKGRyYWdFdmVudDogSURyYWdFdmVudCkgPT4gdm9pZDtcclxuICBvbkRyb3A/OiAoZHJvcFJlc3VsdDogSURyb3BSZXN1bHQpID0+IHZvaWQ7XHJcbiAgZ2V0Q2hpbGRQYXlsb2FkPzogKGluZGV4OiBudW1iZXIpID0+IHt9O1xyXG4gIHNob3VsZEFuaW1hdGVEcm9wPzogKFxyXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogSUNvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBJUGF5bG9hZFxyXG4gICkgPT4gYm9vbGVhbjtcclxuICBzaG91bGRBY2NlcHREcm9wPzogKFxyXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogSUNvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBJUGF5bG9hZFxyXG4gICkgPT4gYm9vbGVhbjtcclxuICBvbkRyYWdFbnRlcj86ICgpID0+IHZvaWQ7XHJcbiAgb25EcmFnTGVhdmU/OiAoKSA9PiB2b2lkO1xyXG4gIG9uRHJvcFJlYWR5PzogKGRyb3BSZXN1bHQ6IElEcm9wUmVzdWx0KSA9PiB2b2lkO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6IFwic21vb3RoLWRuZC1jb250YWluZXJcIixcclxuICB0ZW1wbGF0ZTogYDxkaXYgI2NvbnRhaW5lcj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGNvbnRhaW5lcjogYW55O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oRHJhZ2dhYmxlQ29tcG9uZW50KVxyXG4gIGRyYWdnYWJsZXM6IFF1ZXJ5TGlzdDxEcmFnZ2FibGVDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KFwib3JpZW50YXRpb25cIikgb3JpZW50YXRpb247XHJcbiAgQElucHV0KFwiYmVoYXZpb3VyXCIpIGJlaGF2aW91cjtcclxuICBASW5wdXQoXCJncm91cE5hbWVcIikgZ3JvdXBOYW1lO1xyXG4gIEBJbnB1dChcImxvY2tBeGlzXCIpIGxvY2tBeGlzO1xyXG4gIEBJbnB1dChcImRyYWdIYW5kbGVTZWxlY3RvclwiKSBkcmFnSGFuZGxlU2VsZWN0b3I7XHJcbiAgQElucHV0KFwibm9uRHJhZ0FyZWFTZWxlY3RvclwiKSBub25EcmFnQXJlYVNlbGVjdG9yO1xyXG4gIEBJbnB1dChcImRyYWdCZWdpbkRlbGF5XCIpIGRyYWdCZWdpbkRlbGF5O1xyXG4gIEBJbnB1dChcImFuaW1hdGlvbkR1cmF0aW9uXCIpIGFuaW1hdGlvbkR1cmF0aW9uO1xyXG4gIEBJbnB1dChcImF1dG9TY3JvbGxFbmFibGVkXCIpIGF1dG9TY3JvbGxFbmFibGVkO1xyXG4gIEBJbnB1dChcImRyYWdDbGFzc1wiKSBkcmFnQ2xhc3M7XHJcbiAgQElucHV0KFwiZHJvcENsYXNzXCIpIGRyb3BDbGFzcztcclxuXHJcbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8SURyYWdFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8SURyYWdFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8SURyb3BSZXN1bHQ+KCk7XHJcbiAgQE91dHB1dCgpIGRyb3BSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8SURyb3BSZXN1bHQ+KCk7XHJcbiAgQElucHV0KCkgZ2V0Q2hpbGRQYXlsb2FkOiAoaW5kZXg6IG51bWJlcikgPT4ge307XHJcbiAgQElucHV0KClcclxuICBzaG91bGRBbmltYXRlRHJvcDogKFxyXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogSUNvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBJUGF5bG9hZFxyXG4gICkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHNob3VsZEFjY2VwdERyb3A6IChcclxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IElDb250YWluZXJPcHRpb25zLFxyXG4gICAgcGF5bG9hZDogSVBheWxvYWRcclxuICApID0+IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIGRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBTbW9vdGhEbkQoXHJcbiAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLmdldE9wdGlvbnMoKVxyXG4gICAgKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9wdGlvbnMoKTogSUNvbnRhaW5lck9wdGlvbnMge1xyXG4gICAgY29uc3Qgb3B0aW9uczogSUNvbnRhaW5lck9wdGlvbnMgPSB7fTtcclxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uKSBvcHRpb25zLm9yaWVudGF0aW9uID0gdGhpcy5vcmllbnRhdGlvbjtcclxuICAgIGlmICh0aGlzLmJlaGF2aW91cikgb3B0aW9ucy5iZWhhdmlvdXIgPSB0aGlzLmJlaGF2aW91cjtcclxuICAgIGlmICh0aGlzLmdyb3VwTmFtZSkgb3B0aW9ucy5ncm91cE5hbWUgPSB0aGlzLmdyb3VwTmFtZTtcclxuICAgIGlmICh0aGlzLmxvY2tBeGlzKSBvcHRpb25zLmxvY2tBeGlzID0gdGhpcy5sb2NrQXhpcztcclxuICAgIGlmICh0aGlzLmRyYWdIYW5kbGVTZWxlY3RvcilcclxuICAgICAgb3B0aW9ucy5kcmFnSGFuZGxlU2VsZWN0b3IgPSB0aGlzLmRyYWdIYW5kbGVTZWxlY3RvcjtcclxuICAgIGlmICh0aGlzLm5vbkRyYWdBcmVhU2VsZWN0b3IpXHJcbiAgICAgIG9wdGlvbnMubm9uRHJhZ0FyZWFTZWxlY3RvciA9IHRoaXMubm9uRHJhZ0FyZWFTZWxlY3RvcjtcclxuICAgIGlmICh0aGlzLmRyYWdCZWdpbkRlbGF5KSBvcHRpb25zLmRyYWdCZWdpbkRlbGF5ID0gdGhpcy5kcmFnQmVnaW5EZWxheTtcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkR1cmF0aW9uKVxyXG4gICAgICBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uID0gdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcclxuICAgIGlmICh0aGlzLmF1dG9TY3JvbGxFbmFibGVkKVxyXG4gICAgICBvcHRpb25zLmF1dG9TY3JvbGxFbmFibGVkID0gdGhpcy5hdXRvU2Nyb2xsRW5hYmxlZDtcclxuICAgIGlmICh0aGlzLmRyYWdDbGFzcykgb3B0aW9ucy5kcmFnQ2xhc3MgPSB0aGlzLmRyYWdDbGFzcztcclxuICAgIGlmICh0aGlzLmRyb3BDbGFzcykgb3B0aW9ucy5kcm9wQ2xhc3MgPSB0aGlzLmRyb3BDbGFzcztcclxuXHJcbiAgICBpZiAodGhpcy5kcmFnU3RhcnQpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnU3RhcnQgPSAoZXZlbnQ6IElEcmFnRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyYWdTdGFydC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuZHJhZ0VuZClcclxuICAgICAgb3B0aW9ucy5vbkRyYWdFbmQgPSAoZXZlbnQ6IElEcmFnRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyYWdFbmQuZW1pdChldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZHJvcClcclxuICAgICAgb3B0aW9ucy5vbkRyb3AgPSAoZHJvcFJlc3VsdDogSURyb3BSZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyb3AuZW1pdChkcm9wUmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRDaGlsZFBheWxvYWQpIG9wdGlvbnMuZ2V0Q2hpbGRQYXlsb2FkID0gdGhpcy5nZXRDaGlsZFBheWxvYWQ7XHJcbiAgICBpZiAodGhpcy5zaG91bGRBbmltYXRlRHJvcClcclxuICAgICAgb3B0aW9ucy5zaG91bGRBbmltYXRlRHJvcCA9IHRoaXMuc2hvdWxkQW5pbWF0ZURyb3A7XHJcbiAgICBpZiAodGhpcy5zaG91bGRBY2NlcHREcm9wKSBvcHRpb25zLnNob3VsZEFjY2VwdERyb3AgPSB0aGlzLnNob3VsZEFjY2VwdERyb3A7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0VudGVyKVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ0VudGVyID0gKCkgPT4gdGhpcy5nZXROZ1pvbmUoKCkgPT4gdGhpcy5kcmFnRW50ZXIuZW1pdCgpKTtcclxuICAgIGlmICh0aGlzLmRyYWdMZWF2ZSlcclxuICAgICAgb3B0aW9ucy5vbkRyYWdMZWF2ZSA9ICgpID0+IHRoaXMuZ2V0Tmdab25lKCgpID0+IHRoaXMuZHJhZ0xlYXZlLmVtaXQoKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJvcFJlYWR5KVxyXG4gICAgICBvcHRpb25zLm9uRHJvcFJlYWR5ID0gKGRyb3BSZXN1bHQ6IElEcm9wUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kcm9wUmVhZHkuZW1pdChkcm9wUmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Tmdab25lKGNsYikge1xyXG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIGNsYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==