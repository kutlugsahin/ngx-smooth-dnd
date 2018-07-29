import { Component, ViewChild, ContentChildren, Input, Output, EventEmitter, NgZone, NgModule } from '@angular/core';
import SmoothDnD, { constants, dropHandlers } from 'smooth-dnd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
                    template: "<ng-container #draggableWrapper>\n    <ng-content></ng-content>\n</ng-container>"
                },] },
    ];
    DraggableComponent.propDecorators = {
        wrapper: [{ type: ViewChild, args: ['draggableWrapper',] }]
    };
    return DraggableComponent;
}());
var _a;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
SmoothDnD.wrapChild = function (child) {
    return child;
};
SmoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
var wrapperClass$1 = constants.wrapperClass, animationClass$1 = constants.animationClass;
/** @type {?} */
var wrapperConstantClasses = (_a$1 = {},
    _a$1[wrapperClass$1] = true,
    _a$1[animationClass$1] = true,
    _a$1);
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
var _a$1;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxSmoothDnDModule = /** @class */ (function () {
    function NgxSmoothDnDModule() {
    }
    NgxSmoothDnDModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [ContainerComponent, DraggableComponent],
                    exports: [ContainerComponent, DraggableComponent]
                },] },
    ];
    return NgxSmoothDnDModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgxSmoothDnDModule, ContainerComponent, DraggableComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNtb290aC1kbmQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1zbW9vdGgtZG5kL3NyYy9kcmFnZ2FibGUvZHJhZ2dhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNtb290aC1kbmQvc3JjL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtc21vb3RoLWRuZC9zcmMvbmd4LXNtb290aC1kbmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJ3Ntb290aC1kbmQnO1xyXG5jb25zdCB7XHJcbiAgd3JhcHBlckNsYXNzLFxyXG4gIGFuaW1hdGlvbkNsYXNzXHJcbn0gPSBjb25zdGFudHM7XHJcblxyXG5jb25zdCBjb25zdGFudENsYXNzZXMgPSB7XHJcbiAgW3dyYXBwZXJDbGFzc106IHRydWUsXHJcbiAgW2FuaW1hdGlvbkNsYXNzXTogdHJ1ZSxcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3Ntb290aC1kbmQtZHJhZ2dhYmxlJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgI2RyYWdnYWJsZVdyYXBwZXI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbmctY29udGFpbmVyPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ2RyYWdnYWJsZVdyYXBwZXInKSB3cmFwcGVyOiBFbGVtZW50UmVmO1xyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuY2xhc3NOYW1lID0gY29uc3RhbnRzLndyYXBwZXJDbGFzcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhZ2dhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJhZ2dhYmxlL2RyYWdnYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgU21vb3RoRG5ELCB7IGNvbnN0YW50cywgZHJvcEhhbmRsZXJzIH0gZnJvbSAnc21vb3RoLWRuZCc7XHJcbmltcG9ydCB7IHdyYXBwZWRFcnJvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL2Vycm9yX2hhbmRsZXInO1xyXG5cclxuU21vb3RoRG5ELndyYXBDaGlsZCA9IChjaGlsZCkgPT4ge1xyXG4gIHJldHVybiBjaGlsZDtcclxufVxyXG5cclxuU21vb3RoRG5ELmRyb3BIYW5kbGVyID0gIGRyb3BIYW5kbGVycy5yZWFjdERyb3BIYW5kbGVyKCkuaGFuZGxlcjtcclxuXHJcbmNvbnN0IHtcclxuICB3cmFwcGVyQ2xhc3MsXHJcbiAgYW5pbWF0aW9uQ2xhc3NcclxufSA9IGNvbnN0YW50cztcclxuXHJcbmNvbnN0IHdyYXBwZXJDb25zdGFudENsYXNzZXMgPSB7XHJcbiAgW3dyYXBwZXJDbGFzc106IHRydWUsXHJcbiAgW2FuaW1hdGlvbkNsYXNzXTogdHJ1ZSxcclxufTtcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tb3V0cHV0LW9uLXByZWZpeFxyXG5leHBvcnQgaW50ZXJmYWNlIElEcm9wUmVzdWx0IHtcclxuICByZW1vdmVkSW5kZXg6IG51bWJlcjtcclxuICBhZGRlZEluZGV4OiBudW1iZXI7XHJcbiAgcGF5bG9hZDogSVBheWxvYWQ7XHJcbiAgZWxlbWVudDogRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ0V2ZW50IHtcclxuICBpc1NvdXJjZTogYm9vbGVhbjtcclxuICBwYXlsb2FkOiBJUGF5bG9hZDtcclxuICB3aWxsQWNjZXB0RHJvcDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSVBheWxvYWQgPSBhbnk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWluZXJPcHRpb25zIHtcclxuICBvcmllbnRhdGlvbj86IHN0cmluZztcclxuICBiZWhhdmlvdXI/OiBzdHJpbmc7XHJcbiAgZ3JvdXBOYW1lPzogc3RyaW5nO1xyXG4gIGxvY2tBeGlzPzogc3RyaW5nO1xyXG4gIGRyYWdIYW5kbGVTZWxlY3Rvcj86IHN0cmluZztcclxuICBub25EcmFnQXJlYVNlbGVjdG9yPzogc3RyaW5nO1xyXG4gIGRyYWdCZWdpbkRlbGF5PzogbnVtYmVyO1xyXG4gIGFuaW1hdGlvbkR1cmF0aW9uPzogbnVtYmVyO1xyXG4gIGF1dG9TY3JvbGxFbmFibGVkPzogYm9vbGVhbjtcclxuICBkcmFnQ2xhc3M/OiBzdHJpbmc7XHJcbiAgZHJvcENsYXNzPzogc3RyaW5nO1xyXG4gIG9uRHJhZ1N0YXJ0PzogKGRyYWdFdmVudDogSURyYWdFdmVudCkgPT4gdm9pZDtcclxuICBvbkRyYWdFbmQ/OiAoZHJhZ0V2ZW50OiBJRHJhZ0V2ZW50KSA9PiB2b2lkO1xyXG4gIG9uRHJvcD86IChkcm9wUmVzdWx0OiBJRHJvcFJlc3VsdCkgPT4gdm9pZDtcclxuICBnZXRDaGlsZFBheWxvYWQ/OiAoaW5kZXg6IG51bWJlcikgPT4ge307XHJcbiAgc2hvdWxkQW5pbWF0ZURyb3A/OiAoXHJcbiAgICBzb3VyY2VDb250YWluZXJPcHRpb25zOiBJQ29udGFpbmVyT3B0aW9ucyxcclxuICAgIHBheWxvYWQ6IElQYXlsb2FkXHJcbiAgKSA9PiBib29sZWFuO1xyXG4gIHNob3VsZEFjY2VwdERyb3A/OiAoXHJcbiAgICBzb3VyY2VDb250YWluZXJPcHRpb25zOiBJQ29udGFpbmVyT3B0aW9ucyxcclxuICAgIHBheWxvYWQ6IElQYXlsb2FkXHJcbiAgKSA9PiBib29sZWFuO1xyXG4gIG9uRHJhZ0VudGVyPzogKCkgPT4gdm9pZDtcclxuICBvbkRyYWdMZWF2ZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogXCJzbW9vdGgtZG5kLWNvbnRhaW5lclwiLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY29udGFpbmVyOiBhbnk7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihEcmFnZ2FibGVDb21wb25lbnQpXHJcbiAgZHJhZ2dhYmxlczogUXVlcnlMaXN0PERyYWdnYWJsZUNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXJFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoXCJvcmllbnRhdGlvblwiKSBvcmllbnRhdGlvbjtcclxuICBASW5wdXQoXCJiZWhhdmlvdXJcIikgYmVoYXZpb3VyO1xyXG4gIEBJbnB1dChcImdyb3VwTmFtZVwiKSBncm91cE5hbWU7XHJcbiAgQElucHV0KFwibG9ja0F4aXNcIikgbG9ja0F4aXM7XHJcbiAgQElucHV0KFwiZHJhZ0hhbmRsZVNlbGVjdG9yXCIpIGRyYWdIYW5kbGVTZWxlY3RvcjtcclxuICBASW5wdXQoXCJub25EcmFnQXJlYVNlbGVjdG9yXCIpIG5vbkRyYWdBcmVhU2VsZWN0b3I7XHJcbiAgQElucHV0KFwiZHJhZ0JlZ2luRGVsYXlcIikgZHJhZ0JlZ2luRGVsYXk7XHJcbiAgQElucHV0KFwiYW5pbWF0aW9uRHVyYXRpb25cIikgYW5pbWF0aW9uRHVyYXRpb247XHJcbiAgQElucHV0KFwiYXV0b1Njcm9sbEVuYWJsZWRcIikgYXV0b1Njcm9sbEVuYWJsZWQ7XHJcbiAgQElucHV0KFwiZHJhZ0NsYXNzXCIpIGRyYWdDbGFzcztcclxuICBASW5wdXQoXCJkcm9wQ2xhc3NcIikgZHJvcENsYXNzO1xyXG5cclxuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJRHJhZ0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJRHJhZ0V2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBkcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxJRHJvcFJlc3VsdD4oKTtcclxuICBASW5wdXQoKSBnZXRDaGlsZFBheWxvYWQ6IChpbmRleDogbnVtYmVyKSA9PiB7fTtcclxuICBASW5wdXQoKVxyXG4gIHNob3VsZEFuaW1hdGVEcm9wOiAoXHJcbiAgICBzb3VyY2VDb250YWluZXJPcHRpb25zOiBJQ29udGFpbmVyT3B0aW9ucyxcclxuICAgIHBheWxvYWQ6IElQYXlsb2FkXHJcbiAgKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2hvdWxkQWNjZXB0RHJvcDogKFxyXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogSUNvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBJUGF5bG9hZFxyXG4gICkgPT4gYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgZHJhZ0VudGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBkcmFnTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IFNtb290aERuRChcclxuICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMuZ2V0T3B0aW9ucygpXHJcbiAgICApO1xyXG4gIH1cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0T3B0aW9ucygpOiBJQ29udGFpbmVyT3B0aW9ucyB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBJQ29udGFpbmVyT3B0aW9ucyA9IHt9O1xyXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24pIG9wdGlvbnMub3JpZW50YXRpb24gPSB0aGlzLm9yaWVudGF0aW9uO1xyXG4gICAgaWYgKHRoaXMuYmVoYXZpb3VyKSBvcHRpb25zLmJlaGF2aW91ciA9IHRoaXMuYmVoYXZpb3VyO1xyXG4gICAgaWYgKHRoaXMuZ3JvdXBOYW1lKSBvcHRpb25zLmdyb3VwTmFtZSA9IHRoaXMuZ3JvdXBOYW1lO1xyXG4gICAgaWYgKHRoaXMubG9ja0F4aXMpIG9wdGlvbnMubG9ja0F4aXMgPSB0aGlzLmxvY2tBeGlzO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0hhbmRsZVNlbGVjdG9yKVxyXG4gICAgICBvcHRpb25zLmRyYWdIYW5kbGVTZWxlY3RvciA9IHRoaXMuZHJhZ0hhbmRsZVNlbGVjdG9yO1xyXG4gICAgaWYgKHRoaXMubm9uRHJhZ0FyZWFTZWxlY3RvcilcclxuICAgICAgb3B0aW9ucy5ub25EcmFnQXJlYVNlbGVjdG9yID0gdGhpcy5ub25EcmFnQXJlYVNlbGVjdG9yO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0JlZ2luRGVsYXkpIG9wdGlvbnMuZHJhZ0JlZ2luRGVsYXkgPSB0aGlzLmRyYWdCZWdpbkRlbGF5O1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyYXRpb24pXHJcbiAgICAgIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xyXG4gICAgaWYgKHRoaXMuYXV0b1Njcm9sbEVuYWJsZWQpXHJcbiAgICAgIG9wdGlvbnMuYXV0b1Njcm9sbEVuYWJsZWQgPSB0aGlzLmF1dG9TY3JvbGxFbmFibGVkO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0NsYXNzKSBvcHRpb25zLmRyYWdDbGFzcyA9IHRoaXMuZHJhZ0NsYXNzO1xyXG4gICAgaWYgKHRoaXMuZHJvcENsYXNzKSBvcHRpb25zLmRyb3BDbGFzcyA9IHRoaXMuZHJvcENsYXNzO1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdTdGFydClcclxuICAgICAgb3B0aW9ucy5vbkRyYWdTdGFydCA9IChldmVudDogSURyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5kcmFnRW5kKVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ0VuZCA9IChldmVudDogSURyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5kcm9wKVxyXG4gICAgICBvcHRpb25zLm9uRHJvcCA9IChkcm9wUmVzdWx0OiBJRHJvcFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJvcC5lbWl0KGRyb3BSZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmdldENoaWxkUGF5bG9hZCkgb3B0aW9ucy5nZXRDaGlsZFBheWxvYWQgPSB0aGlzLmdldENoaWxkUGF5bG9hZDtcclxuICAgIGlmICh0aGlzLnNob3VsZEFuaW1hdGVEcm9wKVxyXG4gICAgICBvcHRpb25zLnNob3VsZEFuaW1hdGVEcm9wID0gdGhpcy5zaG91bGRBbmltYXRlRHJvcDtcclxuICAgIGlmICh0aGlzLnNob3VsZEFjY2VwdERyb3ApIG9wdGlvbnMuc2hvdWxkQWNjZXB0RHJvcCA9IHRoaXMuc2hvdWxkQWNjZXB0RHJvcDtcclxuXHJcbiAgICBpZiAodGhpcy5kcmFnRW50ZXIpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnRW50ZXIgPSAoKSA9PiB0aGlzLmdldE5nWm9uZSgoKSA9PiB0aGlzLmRyYWdFbnRlci5lbWl0KCkpO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0xlYXZlKVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ0xlYXZlID0gKCkgPT4gdGhpcy5nZXROZ1pvbmUoKCkgPT4gdGhpcy5kcmFnTGVhdmUuZW1pdCgpKTtcclxuXHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Tmdab25lKGNsYikge1xyXG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIGNsYigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVDb21wb25lbnQgfSBmcm9tICcuL2RyYWdnYWJsZS9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQ29udGFpbmVyQ29tcG9uZW50LCBEcmFnZ2FibGVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtDb250YWluZXJDb21wb25lbnQsIERyYWdnYWJsZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFNtb290aERuRE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsid3JhcHBlckNsYXNzIiwiYW5pbWF0aW9uQ2xhc3MiLCJfYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxBQUdFLElBQUEscUNBQVksRUFDWix5Q0FBYyxDQUNGOztBQUVkLElBQU0sZUFBZTtJQUNuQixHQUFDLFlBQVksSUFBRyxJQUFJO0lBQ3BCLEdBQUMsY0FBYyxJQUFHLElBQUk7UUFDdEI7Ozs7Ozs7SUFXQSw0Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7S0FDMUU7O2dCQVhGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLGtGQUVJO2lCQUNmOzs7MEJBRUUsU0FBUyxTQUFDLGtCQUFrQjs7NkJBcEIvQjs7Ozs7Ozs7QUNBQSxBQUtBLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBQyxLQUFLO0lBQzFCLE9BQU8sS0FBSyxDQUFDO0NBQ2QsQ0FBQTtBQUVELFNBQVMsQ0FBQyxXQUFXLEdBQUksWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsT0FBTyxDQUFDO0FBRy9ELElBQUFBLHVDQUFZLEVBQ1pDLDJDQUFjLENBQ0Y7O0FBRWQsSUFBTSxzQkFBc0I7SUFDMUJDLEtBQUNGLGNBQVksSUFBRyxJQUFJO0lBQ3BCRSxLQUFDRCxnQkFBYyxJQUFHLElBQUk7VUFDdEI7O0lBdUZBLDRCQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTt5QkFqQmIsSUFBSSxZQUFZLEVBQWM7dUJBQ2hDLElBQUksWUFBWSxFQUFjO29CQUNqQyxJQUFJLFlBQVksRUFBZTt5QkFZMUIsSUFBSSxZQUFZLEVBQUU7eUJBQ2xCLElBQUks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