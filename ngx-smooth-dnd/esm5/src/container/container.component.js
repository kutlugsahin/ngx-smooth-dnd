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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQWlCLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEwsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxTQUFTLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR2hFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBQyxLQUFLO0lBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUM7Q0FDZCxDQUFBO0FBRUQsU0FBUyxDQUFDLFdBQVcsR0FBSSxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUM7QUFHL0QsSUFBQSxxQ0FBWSxFQUNaLHlDQUFjLENBQ0Y7O0FBRWQsSUFBTSxzQkFBc0I7SUFDMUIsR0FBQyxZQUFZLElBQUcsSUFBSTtJQUNwQixHQUFDLGNBQWMsSUFBRyxJQUFJO1FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1RkEsNEJBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO3lCQWpCYixJQUFJLFlBQVksRUFBYzt1QkFDaEMsSUFBSSxZQUFZLEVBQWM7b0JBQ2pDLElBQUksWUFBWSxFQUFlO3lCQVkxQixJQUFJLFlBQVksRUFBRTt5QkFDbEIsSUFBSSxZQUFZLEVBQUU7S0FFRDs7OztJQUV2Qyw0Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsU0FB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QUFDLG9CQUFvQjtzQ0FDMUIsS0FBSyxTQUFDLHFCQUFxQjtpQ0FDM0IsS0FBSyxTQUFDLGdCQUFnQjtvQ0FDdEIsS0FBSyxTQUFDLG1CQUFtQjtvQ0FDekIsS0FBSyxTQUFDLG1CQUFtQjs0QkFDekIsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLEtBQUssU0FBQyxXQUFXOzRCQUVqQixNQUFNOzBCQUNOLE1BQU07dUJBQ04sTUFBTTtrQ0FDTixLQUFLO29DQUNMLEtBQUs7bUNBS0wsS0FBSzs0QkFLTCxNQUFNOzRCQUNOLE1BQU07OzZCQXhHVDs7U0F1RWEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhZ2dhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJhZ2dhYmxlL2RyYWdnYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgU21vb3RoRG5ELCB7IGNvbnN0YW50cywgZHJvcEhhbmRsZXJzIH0gZnJvbSAnc21vb3RoLWRuZCc7XHJcbmltcG9ydCB7IHdyYXBwZWRFcnJvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL2Vycm9yX2hhbmRsZXInO1xyXG5cclxuU21vb3RoRG5ELndyYXBDaGlsZCA9IChjaGlsZCkgPT4ge1xyXG4gIHJldHVybiBjaGlsZDtcclxufVxyXG5cclxuU21vb3RoRG5ELmRyb3BIYW5kbGVyID0gIGRyb3BIYW5kbGVycy5yZWFjdERyb3BIYW5kbGVyKCkuaGFuZGxlcjtcclxuXHJcbmNvbnN0IHtcclxuICB3cmFwcGVyQ2xhc3MsXHJcbiAgYW5pbWF0aW9uQ2xhc3NcclxufSA9IGNvbnN0YW50cztcclxuXHJcbmNvbnN0IHdyYXBwZXJDb25zdGFudENsYXNzZXMgPSB7XHJcbiAgW3dyYXBwZXJDbGFzc106IHRydWUsXHJcbiAgW2FuaW1hdGlvbkNsYXNzXTogdHJ1ZSxcclxufTtcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tb3V0cHV0LW9uLXByZWZpeFxyXG5leHBvcnQgaW50ZXJmYWNlIElEcm9wUmVzdWx0IHtcclxuICByZW1vdmVkSW5kZXg6IG51bWJlcjtcclxuICBhZGRlZEluZGV4OiBudW1iZXI7XHJcbiAgcGF5bG9hZDogSVBheWxvYWQ7XHJcbiAgZWxlbWVudDogRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ0V2ZW50IHtcclxuICBpc1NvdXJjZTogYm9vbGVhbjtcclxuICBwYXlsb2FkOiBJUGF5bG9hZDtcclxuICB3aWxsQWNjZXB0RHJvcDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSVBheWxvYWQgPSBhbnk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWluZXJPcHRpb25zIHtcclxuICBvcmllbnRhdGlvbj86IHN0cmluZztcclxuICBiZWhhdmlvdXI/OiBzdHJpbmc7XHJcbiAgZ3JvdXBOYW1lPzogc3RyaW5nO1xyXG4gIGxvY2tBeGlzPzogc3RyaW5nO1xyXG4gIGRyYWdIYW5kbGVTZWxlY3Rvcj86IHN0cmluZztcclxuICBub25EcmFnQXJlYVNlbGVjdG9yPzogc3RyaW5nO1xyXG4gIGRyYWdCZWdpbkRlbGF5PzogbnVtYmVyO1xyXG4gIGFuaW1hdGlvbkR1cmF0aW9uPzogbnVtYmVyO1xyXG4gIGF1dG9TY3JvbGxFbmFibGVkPzogYm9vbGVhbjtcclxuICBkcmFnQ2xhc3M/OiBzdHJpbmc7XHJcbiAgZHJvcENsYXNzPzogc3RyaW5nO1xyXG4gIG9uRHJhZ1N0YXJ0PzogKGRyYWdFdmVudDogSURyYWdFdmVudCkgPT4gdm9pZDtcclxuICBvbkRyYWdFbmQ/OiAoZHJhZ0V2ZW50OiBJRHJhZ0V2ZW50KSA9PiB2b2lkO1xyXG4gIG9uRHJvcD86IChkcm9wUmVzdWx0OiBJRHJvcFJlc3VsdCkgPT4gdm9pZDtcclxuICBnZXRDaGlsZFBheWxvYWQ/OiAoaW5kZXg6IG51bWJlcikgPT4ge307XHJcbiAgc2hvdWxkQW5pbWF0ZURyb3A/OiAoXHJcbiAgICBzb3VyY2VDb250YWluZXJPcHRpb25zOiBJQ29udGFpbmVyT3B0aW9ucyxcclxuICAgIHBheWxvYWQ6IElQYXlsb2FkXHJcbiAgKSA9PiBib29sZWFuO1xyXG4gIHNob3VsZEFjY2VwdERyb3A/OiAoXHJcbiAgICBzb3VyY2VDb250YWluZXJPcHRpb25zOiBJQ29udGFpbmVyT3B0aW9ucyxcclxuICAgIHBheWxvYWQ6IElQYXlsb2FkXHJcbiAgKSA9PiBib29sZWFuO1xyXG4gIG9uRHJhZ0VudGVyPzogKCkgPT4gdm9pZDtcclxuICBvbkRyYWdMZWF2ZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogXCJzbW9vdGgtZG5kLWNvbnRhaW5lclwiLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY29udGFpbmVyOiBhbnk7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihEcmFnZ2FibGVDb21wb25lbnQpXHJcbiAgZHJhZ2dhYmxlczogUXVlcnlMaXN0PERyYWdnYWJsZUNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXJFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoXCJvcmllbnRhdGlvblwiKSBvcmllbnRhdGlvbjtcclxuICBASW5wdXQoXCJiZWhhdmlvdXJcIikgYmVoYXZpb3VyO1xyXG4gIEBJbnB1dChcImdyb3VwTmFtZVwiKSBncm91cE5hbWU7XHJcbiAgQElucHV0KFwibG9ja0F4aXNcIikgbG9ja0F4aXM7XHJcbiAgQElucHV0KFwiZHJhZ0hhbmRsZVNlbGVjdG9yXCIpIGRyYWdIYW5kbGVTZWxlY3RvcjtcclxuICBASW5wdXQoXCJub25EcmFnQXJlYVNlbGVjdG9yXCIpIG5vbkRyYWdBcmVhU2VsZWN0b3I7XHJcbiAgQElucHV0KFwiZHJhZ0JlZ2luRGVsYXlcIikgZHJhZ0JlZ2luRGVsYXk7XHJcbiAgQElucHV0KFwiYW5pbWF0aW9uRHVyYXRpb25cIikgYW5pbWF0aW9uRHVyYXRpb247XHJcbiAgQElucHV0KFwiYXV0b1Njcm9sbEVuYWJsZWRcIikgYXV0b1Njcm9sbEVuYWJsZWQ7XHJcbiAgQElucHV0KFwiZHJhZ0NsYXNzXCIpIGRyYWdDbGFzcztcclxuICBASW5wdXQoXCJkcm9wQ2xhc3NcIikgZHJvcENsYXNzO1xyXG5cclxuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJRHJhZ0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJRHJhZ0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBkcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxJRHJvcFJlc3VsdD4oKTtcclxuICBASW5wdXQoKSBnZXRDaGlsZFBheWxvYWQ6IChpbmRleDogbnVtYmVyKSA9PiB7fTtcclxuICBASW5wdXQoKVxyXG4gIHNob3VsZEFuaW1hdGVEcm9wOiAoXHJcbiAgICBzb3VyY2VDb250YWluZXJPcHRpb25zOiBJQ29udGFpbmVyT3B0aW9ucyxcclxuICAgIHBheWxvYWQ6IElQYXlsb2FkXHJcbiAgKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2hvdWxkQWNjZXB0RHJvcDogKFxyXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogSUNvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBJUGF5bG9hZFxyXG4gICkgPT4gYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgZHJhZ0VudGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkcmFnTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IFNtb290aERuRChcclxuICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMuZ2V0T3B0aW9ucygpXHJcbiAgICApO1xyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3B0aW9ucygpOiBJQ29udGFpbmVyT3B0aW9ucyB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBJQ29udGFpbmVyT3B0aW9ucyA9IHt9O1xyXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24pIG9wdGlvbnMub3JpZW50YXRpb24gPSB0aGlzLm9yaWVudGF0aW9uO1xyXG4gICAgaWYgKHRoaXMuYmVoYXZpb3VyKSBvcHRpb25zLmJlaGF2aW91ciA9IHRoaXMuYmVoYXZpb3VyO1xyXG4gICAgaWYgKHRoaXMuZ3JvdXBOYW1lKSBvcHRpb25zLmdyb3VwTmFtZSA9IHRoaXMuZ3JvdXBOYW1lO1xyXG4gICAgaWYgKHRoaXMubG9ja0F4aXMpIG9wdGlvbnMubG9ja0F4aXMgPSB0aGlzLmxvY2tBeGlzO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0hhbmRsZVNlbGVjdG9yKVxyXG4gICAgICBvcHRpb25zLmRyYWdIYW5kbGVTZWxlY3RvciA9IHRoaXMuZHJhZ0hhbmRsZVNlbGVjdG9yO1xyXG4gICAgaWYgKHRoaXMubm9uRHJhZ0FyZWFTZWxlY3RvcilcclxuICAgICAgb3B0aW9ucy5ub25EcmFnQXJlYVNlbGVjdG9yID0gdGhpcy5ub25EcmFnQXJlYVNlbGVjdG9yO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0JlZ2luRGVsYXkpIG9wdGlvbnMuZHJhZ0JlZ2luRGVsYXkgPSB0aGlzLmRyYWdCZWdpbkRlbGF5O1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyYXRpb24pXHJcbiAgICAgIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xyXG4gICAgaWYgKHRoaXMuYXV0b1Njcm9sbEVuYWJsZWQpXHJcbiAgICAgIG9wdGlvbnMuYXV0b1Njcm9sbEVuYWJsZWQgPSB0aGlzLmF1dG9TY3JvbGxFbmFibGVkO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0NsYXNzKSBvcHRpb25zLmRyYWdDbGFzcyA9IHRoaXMuZHJhZ0NsYXNzO1xyXG4gICAgaWYgKHRoaXMuZHJvcENsYXNzKSBvcHRpb25zLmRyb3BDbGFzcyA9IHRoaXMuZHJvcENsYXNzO1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdTdGFydClcclxuICAgICAgb3B0aW9ucy5vbkRyYWdTdGFydCA9IChldmVudDogSURyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5kcmFnRW5kKVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ0VuZCA9IChldmVudDogSURyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5kcm9wKVxyXG4gICAgICBvcHRpb25zLm9uRHJvcCA9IChkcm9wUmVzdWx0OiBJRHJvcFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJvcC5lbWl0KGRyb3BSZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmdldENoaWxkUGF5bG9hZCkgb3B0aW9ucy5nZXRDaGlsZFBheWxvYWQgPSB0aGlzLmdldENoaWxkUGF5bG9hZDtcclxuICAgIGlmICh0aGlzLnNob3VsZEFuaW1hdGVEcm9wKVxyXG4gICAgICBvcHRpb25zLnNob3VsZEFuaW1hdGVEcm9wID0gdGhpcy5zaG91bGRBbmltYXRlRHJvcDtcclxuICAgIGlmICh0aGlzLnNob3VsZEFjY2VwdERyb3ApIG9wdGlvbnMuc2hvdWxkQWNjZXB0RHJvcCA9IHRoaXMuc2hvdWxkQWNjZXB0RHJvcDtcclxuXHJcbiAgICBpZiAodGhpcy5kcmFnRW50ZXIpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnRW50ZXIgPSAoKSA9PiB0aGlzLmdldE5nWm9uZSgoKSA9PiB0aGlzLmRyYWdFbnRlci5lbWl0KCkpO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0xlYXZlKVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ0xlYXZlID0gKCkgPT4gdGhpcy5nZXROZ1pvbmUoKCkgPT4gdGhpcy5kcmFnTGVhdmUuZW1pdCgpKTtcclxuXHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Tmdab25lKGNsYikge1xyXG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIGNsYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==