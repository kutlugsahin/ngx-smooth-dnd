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
        this.container = smoothDnD(this.containerElementRef.nativeElement, this.getOptions());
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
     * @private
     * @return {?}
     */
    ContainerComponent.prototype.getOptions = /**
     * @private
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
        if (this.dropPlaceholder)
            options.dropPlaceholder = this.dropPlaceholder;
        if (this.dragStart)
            options.onDragStart = function (info) {
                _this.getNgZone(function () {
                    _this.dragStart.emit(info);
                });
            };
        if (this.dragEnd)
            options.onDragEnd = function (info) {
                _this.getNgZone(function () {
                    _this.dragEnd.emit(info);
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
        if (this.getGhostParent)
            options.getGhostParent = this.getGhostParent;
        return options;
    };
    /**
     * @private
     * @param {?} clb
     * @return {?}
     */
    ContainerComponent.prototype.getNgZone = /**
     * @private
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
                    template: "<div #container>\r\n    <ng-content></ng-content>\r\n</div>"
                }] }
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
    return ContainerComponent;
}());
export { ContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQWlCLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEwsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWdDLE1BQU0sWUFBWSxDQUFDO0FBRW5GLFNBQVMsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsT0FBTyxDQUFDO0FBQ2hFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7O0FBRTVCLHNDQUlDOzs7SUFIQyxvQ0FBa0I7O0lBQ2xCLG1DQUFhOztJQUNiLDBDQUF3Qjs7QUFHMUI7SUE4Q0UsNEJBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBckJ6QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDakQsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBQy9DLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3RDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBWTNDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBS0YsQ0FBQzs7OztJQUV4Qyw0Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFD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Q2pCLEtBQUssU0FBQyxXQUFXOzJCQUNqQixLQUFLLFNBQUMsVUFBVTtxQ0FDaEIsS0FBSyxTQUFDLG9CQUFvQjtzQ0FDMUIsS0FBSyxTQUFDLHFCQUFxQjtpQ0FDM0IsS0FBSyxTQUFDLGdCQUFnQjtvQ0FDdEIsS0FBSyxTQUFDLG1CQUFtQjtvQ0FDekIsS0FBSyxTQUFDLG1CQUFtQjs0QkFDekIsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLEtBQUssU0FBQyxXQUFXO2tDQUNqQixLQUFLLFNBQUMsaUJBQWlCO2tDQUN2QixLQUFLLFNBQUMsaUJBQWlCOzRCQUV2QixNQUFNOzBCQUNOLE1BQU07dUJBQ04sTUFBTTs0QkFDTixNQUFNO2tDQUNOLEtBQUs7b0NBQ0wsS0FBSzttQ0FLTCxLQUFLOzRCQUtMLE1BQU07NEJBQ04sTUFBTTtpQ0FFTixLQUFLOztJQWtGUix5QkFBQztDQUFBLEFBN0hELElBNkhDO1NBeEhZLGtCQUFrQjs7Ozs7O0lBQzdCLHVDQUF1Qjs7SUFDdkIsd0NBQzBDOztJQUMxQyxpREFBd0Q7O0lBRXhELHlDQUFrQzs7SUFDbEMsdUNBQThCOztJQUM5Qix1Q0FBOEI7O0lBQzlCLHNDQUE0Qjs7SUFDNUIsZ0RBQWdEOztJQUNoRCxpREFBa0Q7O0lBQ2xELDRDQUF3Qzs7SUFDeEMsK0NBQThDOztJQUM5QywrQ0FBOEM7O0lBQzlDLHVDQUE4Qjs7SUFDOUIsdUNBQThCOztJQUM5Qiw2Q0FBMEM7O0lBQzFDLDZDQUEwQzs7SUFFMUMsdUNBQTJEOztJQUMzRCxxQ0FBeUQ7O0lBQ3pELGtDQUFnRDs7SUFDaEQsdUNBQXFEOztJQUNyRCw2Q0FBZ0Q7O0lBQ2hELCtDQUlhOztJQUNiLDhDQUlhOztJQUNiLHVDQUF5Qzs7SUFDekMsdUNBQXlDOztJQUV6Qyw0Q0FDa0M7Ozs7O0lBRXRCLHFDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdnYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2RyYWdnYWJsZS9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgZHJvcEhhbmRsZXJzLCBzbW9vdGhEbkQsIERyb3BSZXN1bHQsIENvbnRhaW5lck9wdGlvbnMgfSBmcm9tICdzbW9vdGgtZG5kJztcclxuXHJcbnNtb290aERuRC5kcm9wSGFuZGxlciA9IGRyb3BIYW5kbGVycy5yZWFjdERyb3BIYW5kbGVyKCkuaGFuZGxlcjtcclxuc21vb3RoRG5ELndyYXBDaGlsZCA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmFnU3RhcnRFbmRJbmZvIHtcclxuICBpc1NvdXJjZTogYm9vbGVhbjtcclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgd2lsbEFjY2VwdERyb3A6IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogXCJzbW9vdGgtZG5kLWNvbnRhaW5lclwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY29udGFpbmVyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBjb250YWluZXI6IGFueTtcclxuICBAQ29udGVudENoaWxkcmVuKERyYWdnYWJsZUNvbXBvbmVudClcclxuICBkcmFnZ2FibGVzOiBRdWVyeUxpc3Q8RHJhZ2dhYmxlQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lckVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dChcIm9yaWVudGF0aW9uXCIpIG9yaWVudGF0aW9uO1xyXG4gIEBJbnB1dChcImJlaGF2aW91clwiKSBiZWhhdmlvdXI7XHJcbiAgQElucHV0KFwiZ3JvdXBOYW1lXCIpIGdyb3VwTmFtZTtcclxuICBASW5wdXQoXCJsb2NrQXhpc1wiKSBsb2NrQXhpcztcclxuICBASW5wdXQoXCJkcmFnSGFuZGxlU2VsZWN0b3JcIikgZHJhZ0hhbmRsZVNlbGVjdG9yO1xyXG4gIEBJbnB1dChcIm5vbkRyYWdBcmVhU2VsZWN0b3JcIikgbm9uRHJhZ0FyZWFTZWxlY3RvcjtcclxuICBASW5wdXQoXCJkcmFnQmVnaW5EZWxheVwiKSBkcmFnQmVnaW5EZWxheTtcclxuICBASW5wdXQoXCJhbmltYXRpb25EdXJhdGlvblwiKSBhbmltYXRpb25EdXJhdGlvbjtcclxuICBASW5wdXQoXCJhdXRvU2Nyb2xsRW5hYmxlZFwiKSBhdXRvU2Nyb2xsRW5hYmxlZDtcclxuICBASW5wdXQoXCJkcmFnQ2xhc3NcIikgZHJhZ0NsYXNzO1xyXG4gIEBJbnB1dChcImRyb3BDbGFzc1wiKSBkcm9wQ2xhc3M7XHJcbiAgQElucHV0KFwiZHJvcFBsYWNlaG9sZGVyXCIpIGRyb3BQbGFjZWhvbGRlcjtcclxuICBASW5wdXQoXCJyZW1vdmVPbkRyb3BPdXRcIikgcmVtb3ZlT25Ecm9wT3V0O1xyXG5cclxuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnU3RhcnRFbmRJbmZvPigpO1xyXG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnU3RhcnRFbmRJbmZvPigpO1xyXG4gIEBPdXRwdXQoKSBkcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wUmVzdWx0PigpO1xyXG4gIEBPdXRwdXQoKSBkcm9wUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BSZXN1bHQ+KCk7XHJcbiAgQElucHV0KCkgZ2V0Q2hpbGRQYXlsb2FkOiAoaW5kZXg6IG51bWJlcikgPT4ge307XHJcbiAgQElucHV0KClcclxuICBzaG91bGRBbmltYXRlRHJvcDogKFxyXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogQ29udGFpbmVyT3B0aW9ucyxcclxuICAgIHBheWxvYWQ6IGFueVxyXG4gICkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHNob3VsZEFjY2VwdERyb3A6IChcclxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IENvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBhbnlcclxuICApID0+IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIGRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldEdob3N0UGFyZW50OiAoKSA9PiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHNtb290aERuRChcclxuICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMuZ2V0T3B0aW9ucygpXHJcbiAgICApO1xyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3B0aW9ucygpOiBDb250YWluZXJPcHRpb25zIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IENvbnRhaW5lck9wdGlvbnMgPSB7fTtcclxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uKSBvcHRpb25zLm9yaWVudGF0aW9uID0gdGhpcy5vcmllbnRhdGlvbjtcclxuICAgIGlmICh0aGlzLmJlaGF2aW91cikgb3B0aW9ucy5iZWhhdmlvdXIgPSB0aGlzLmJlaGF2aW91cjtcclxuICAgIGlmICh0aGlzLmdyb3VwTmFtZSkgb3B0aW9ucy5ncm91cE5hbWUgPSB0aGlzLmdyb3VwTmFtZTtcclxuICAgIGlmICh0aGlzLmxvY2tBeGlzKSBvcHRpb25zLmxvY2tBeGlzID0gdGhpcy5sb2NrQXhpcztcclxuICAgIGlmICh0aGlzLmRyYWdIYW5kbGVTZWxlY3RvcilcclxuICAgICAgb3B0aW9ucy5kcmFnSGFuZGxlU2VsZWN0b3IgPSB0aGlzLmRyYWdIYW5kbGVTZWxlY3RvcjtcclxuICAgIGlmICh0aGlzLm5vbkRyYWdBcmVhU2VsZWN0b3IpXHJcbiAgICAgIG9wdGlvbnMubm9uRHJhZ0FyZWFTZWxlY3RvciA9IHRoaXMubm9uRHJhZ0FyZWFTZWxlY3RvcjtcclxuICAgIGlmICh0aGlzLmRyYWdCZWdpbkRlbGF5KSBvcHRpb25zLmRyYWdCZWdpbkRlbGF5ID0gdGhpcy5kcmFnQmVnaW5EZWxheTtcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkR1cmF0aW9uKVxyXG4gICAgICBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uID0gdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcclxuICAgIGlmICh0aGlzLmF1dG9TY3JvbGxFbmFibGVkKVxyXG4gICAgICBvcHRpb25zLmF1dG9TY3JvbGxFbmFibGVkID0gdGhpcy5hdXRvU2Nyb2xsRW5hYmxlZDtcclxuICAgIGlmICh0aGlzLmRyYWdDbGFzcykgb3B0aW9ucy5kcmFnQ2xhc3MgPSB0aGlzLmRyYWdDbGFzcztcclxuICAgIGlmICh0aGlzLmRyb3BDbGFzcykgb3B0aW9ucy5kcm9wQ2xhc3MgPSB0aGlzLmRyb3BDbGFzcztcclxuICAgIGlmICh0aGlzLmRyb3BQbGFjZWhvbGRlcikgb3B0aW9ucy5kcm9wUGxhY2Vob2xkZXIgPSB0aGlzLmRyb3BQbGFjZWhvbGRlcjtcclxuXHJcbiAgICBpZiAodGhpcy5kcmFnU3RhcnQpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnU3RhcnQgPSAoaW5mbzogRHJhZ1N0YXJ0RW5kSW5mbykgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoaW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0VuZClcclxuICAgICAgb3B0aW9ucy5vbkRyYWdFbmQgPSAoaW5mbzogRHJhZ1N0YXJ0RW5kSW5mbykgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KGluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmRyb3ApXHJcbiAgICAgIG9wdGlvbnMub25Ecm9wID0gKGRyb3BSZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyb3AuZW1pdChkcm9wUmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRDaGlsZFBheWxvYWQpIG9wdGlvbnMuZ2V0Q2hpbGRQYXlsb2FkID0gdGhpcy5nZXRDaGlsZFBheWxvYWQ7XHJcbiAgICBpZiAodGhpcy5zaG91bGRBbmltYXRlRHJvcClcclxuICAgICAgb3B0aW9ucy5zaG91bGRBbmltYXRlRHJvcCA9IHRoaXMuc2hvdWxkQW5pbWF0ZURyb3A7XHJcbiAgICBpZiAodGhpcy5zaG91bGRBY2NlcHREcm9wKSBvcHRpb25zLnNob3VsZEFjY2VwdERyb3AgPSB0aGlzLnNob3VsZEFjY2VwdERyb3A7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0VudGVyKVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ0VudGVyID0gKCkgPT4gdGhpcy5nZXROZ1pvbmUoKCkgPT4gdGhpcy5kcmFnRW50ZXIuZW1pdCgpKTtcclxuICAgIGlmICh0aGlzLmRyYWdMZWF2ZSlcclxuICAgICAgb3B0aW9ucy5vbkRyYWdMZWF2ZSA9ICgpID0+IHRoaXMuZ2V0Tmdab25lKCgpID0+IHRoaXMuZHJhZ0xlYXZlLmVtaXQoKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJvcFJlYWR5KVxyXG4gICAgICBvcHRpb25zLm9uRHJvcFJlYWR5ID0gKGRyb3BSZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyb3BSZWFkeS5lbWl0KGRyb3BSZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5nZXRHaG9zdFBhcmVudCkgb3B0aW9ucy5nZXRHaG9zdFBhcmVudCA9IHRoaXMuZ2V0R2hvc3RQYXJlbnQ7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5nWm9uZShjbGIpIHtcclxuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBjbGIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=