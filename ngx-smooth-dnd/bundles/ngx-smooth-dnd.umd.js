(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('smooth-dnd'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-smooth-dnd', ['exports', '@angular/core', 'smooth-dnd', '@angular/common'], factory) :
    (factory((global['ngx-smooth-dnd'] = {}),global.ng.core,global.SmoothDnD,global.ng.common));
}(this, (function (exports,core,SmoothDnD,common) { 'use strict';

    var SmoothDnD__default = 'default' in SmoothDnD ? SmoothDnD['default'] : SmoothDnD;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var wrapperClass = SmoothDnD.constants.wrapperClass, animationClass = SmoothDnD.constants.animationClass;
    /** @type {?} */
    var constantClasses = (_a = {},
        _a[wrapperClass] = true,
        _a[animationClass] = true,
        _a);
    var DraggableComponent = (function () {
        function DraggableComponent() {
        }
        /**
         * @return {?}
         */
        DraggableComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.wrapper.nativeElement.parentNode.className = SmoothDnD.constants.wrapperClass;
            };
        DraggableComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'smooth-dnd-draggable',
                        template: "<ng-container #draggableWrapper>\n    <ng-content></ng-content>\n</ng-container>"
                    },] },
        ];
        DraggableComponent.propDecorators = {
            wrapper: [{ type: core.ViewChild, args: ['draggableWrapper',] }]
        };
        return DraggableComponent;
    }());
    var _a;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    SmoothDnD__default.wrapChild = function (child) {
        return child;
    };
    SmoothDnD__default.dropHandler = SmoothDnD.dropHandlers.reactDropHandler().handler;
    var wrapperClass$1 = SmoothDnD.constants.wrapperClass, animationClass$1 = SmoothDnD.constants.animationClass;
    /** @type {?} */
    var wrapperConstantClasses = (_a$1 = {},
        _a$1[wrapperClass$1] = true,
        _a$1[animationClass$1] = true,
        _a$1);
    var ContainerComponent = (function () {
        function ContainerComponent(_ngZone) {
            this._ngZone = _ngZone;
            this.dragStart = new core.EventEmitter();
            this.dragEnd = new core.EventEmitter();
            this.drop = new core.EventEmitter();
            this.dragEnter = new core.EventEmitter();
            this.dragLeave = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        ContainerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.container = SmoothDnD__default(this.containerElementRef.nativeElement, this.getOptions());
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
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: "smooth-dnd-container",
                        template: "<div #container>\n    <ng-content></ng-content>\n</div>"
                    },] },
        ];
        /** @nocollapse */
        ContainerComponent.ctorParameters = function () {
            return [
                { type: core.NgZone }
            ];
        };
        ContainerComponent.propDecorators = {
            draggables: [{ type: core.ContentChildren, args: [DraggableComponent,] }],
            containerElementRef: [{ type: core.ViewChild, args: ["container",] }],
            orientation: [{ type: core.Input, args: ["orientation",] }],
            behaviour: [{ type: core.Input, args: ["behaviour",] }],
            groupName: [{ type: core.Input, args: ["groupName",] }],
            lockAxis: [{ type: core.Input, args: ["lockAxis",] }],
            dragHandleSelector: [{ type: core.Input, args: ["dragHandleSelector",] }],
            nonDragAreaSelector: [{ type: core.Input, args: ["nonDragAreaSelector",] }],
            dragBeginDelay: [{ type: core.Input, args: ["dragBeginDelay",] }],
            animationDuration: [{ type: core.Input, args: ["animationDuration",] }],
            autoScrollEnabled: [{ type: core.Input, args: ["autoScrollEnabled",] }],
            dragClass: [{ type: core.Input, args: ["dragClass",] }],
            dropClass: [{ type: core.Input, args: ["dropClass",] }],
            dragStart: [{ type: core.Output }],
            dragEnd: [{ type: core.Output }],
            drop: [{ type: core.Output }],
            getChildPayload: [{ type: core.Input }],
            shouldAnimateDrop: [{ type: core.Input }],
            shouldAcceptDrop: [{ type: core.Input }],
            dragEnter: [{ type: core.Output }],
            dragLeave: [{ type: core.Output }]
        };
        return ContainerComponent;
    }());
    var _a$1;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxSmoothDnDModule = (function () {
        function NgxSmoothDnDModule() {
        }
        NgxSmoothDnDModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.NgxSmoothDnDModule = NgxSmoothDnDModule;
    exports.ContainerComponent = ContainerComponent;
    exports.DraggableComponent = DraggableComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNtb290aC1kbmQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtc21vb3RoLWRuZC9zcmMvZHJhZ2dhYmxlL2RyYWdnYWJsZS5jb21wb25lbnQudHMiLCJuZzovL25neC1zbW9vdGgtZG5kL3NyYy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXNtb290aC1kbmQvc3JjL25neC1zbW9vdGgtZG5kLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICdzbW9vdGgtZG5kJztcclxuY29uc3Qge1xyXG4gIHdyYXBwZXJDbGFzcyxcclxuICBhbmltYXRpb25DbGFzc1xyXG59ID0gY29uc3RhbnRzO1xyXG5cclxuY29uc3QgY29uc3RhbnRDbGFzc2VzID0ge1xyXG4gIFt3cmFwcGVyQ2xhc3NdOiB0cnVlLFxyXG4gIFthbmltYXRpb25DbGFzc106IHRydWUsXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzbW9vdGgtZG5kLWRyYWdnYWJsZScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICNkcmFnZ2FibGVXcmFwcGVyPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLWNvbnRhaW5lcj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKCdkcmFnZ2FibGVXcmFwcGVyJykgd3JhcHBlcjogRWxlbWVudFJlZjtcclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTmFtZSA9IGNvbnN0YW50cy53cmFwcGVyQ2xhc3M7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdnYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2RyYWdnYWJsZS9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IFNtb290aERuRCwgeyBjb25zdGFudHMsIGRyb3BIYW5kbGVycyB9IGZyb20gJ3Ntb290aC1kbmQnO1xyXG5pbXBvcnQgeyB3cmFwcGVkRXJyb3IgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9lcnJvcl9oYW5kbGVyJztcclxuXHJcblNtb290aERuRC53cmFwQ2hpbGQgPSAoY2hpbGQpID0+IHtcclxuICByZXR1cm4gY2hpbGQ7XHJcbn1cclxuXHJcblNtb290aERuRC5kcm9wSGFuZGxlciA9ICBkcm9wSGFuZGxlcnMucmVhY3REcm9wSGFuZGxlcigpLmhhbmRsZXI7XHJcblxyXG5jb25zdCB7XHJcbiAgd3JhcHBlckNsYXNzLFxyXG4gIGFuaW1hdGlvbkNsYXNzXHJcbn0gPSBjb25zdGFudHM7XHJcblxyXG5jb25zdCB3cmFwcGVyQ29uc3RhbnRDbGFzc2VzID0ge1xyXG4gIFt3cmFwcGVyQ2xhc3NdOiB0cnVlLFxyXG4gIFthbmltYXRpb25DbGFzc106IHRydWUsXHJcbn07XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLW91dHB1dC1vbi1wcmVmaXhcclxuZXhwb3J0IGludGVyZmFjZSBJRHJvcFJlc3VsdCB7XHJcbiAgcmVtb3ZlZEluZGV4OiBudW1iZXI7XHJcbiAgYWRkZWRJbmRleDogbnVtYmVyO1xyXG4gIHBheWxvYWQ6IElQYXlsb2FkO1xyXG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdFdmVudCB7XHJcbiAgaXNTb3VyY2U6IGJvb2xlYW47XHJcbiAgcGF5bG9hZDogSVBheWxvYWQ7XHJcbiAgd2lsbEFjY2VwdERyb3A6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElQYXlsb2FkID0gYW55O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFpbmVyT3B0aW9ucyB7XHJcbiAgb3JpZW50YXRpb24/OiBzdHJpbmc7XHJcbiAgYmVoYXZpb3VyPzogc3RyaW5nO1xyXG4gIGdyb3VwTmFtZT86IHN0cmluZztcclxuICBsb2NrQXhpcz86IHN0cmluZztcclxuICBkcmFnSGFuZGxlU2VsZWN0b3I/OiBzdHJpbmc7XHJcbiAgbm9uRHJhZ0FyZWFTZWxlY3Rvcj86IHN0cmluZztcclxuICBkcmFnQmVnaW5EZWxheT86IG51bWJlcjtcclxuICBhbmltYXRpb25EdXJhdGlvbj86IG51bWJlcjtcclxuICBhdXRvU2Nyb2xsRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgZHJhZ0NsYXNzPzogc3RyaW5nO1xyXG4gIGRyb3BDbGFzcz86IHN0cmluZztcclxuICBvbkRyYWdTdGFydD86IChkcmFnRXZlbnQ6IElEcmFnRXZlbnQpID0+IHZvaWQ7XHJcbiAgb25EcmFnRW5kPzogKGRyYWdFdmVudDogSURyYWdFdmVudCkgPT4gdm9pZDtcclxuICBvbkRyb3A/OiAoZHJvcFJlc3VsdDogSURyb3BSZXN1bHQpID0+IHZvaWQ7XHJcbiAgZ2V0Q2hpbGRQYXlsb2FkPzogKGluZGV4OiBudW1iZXIpID0+IHt9O1xyXG4gIHNob3VsZEFuaW1hdGVEcm9wPzogKFxyXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogSUNvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBJUGF5bG9hZFxyXG4gICkgPT4gYm9vbGVhbjtcclxuICBzaG91bGRBY2NlcHREcm9wPzogKFxyXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogSUNvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBJUGF5bG9hZFxyXG4gICkgPT4gYm9vbGVhbjtcclxuICBvbkRyYWdFbnRlcj86ICgpID0+IHZvaWQ7XHJcbiAgb25EcmFnTGVhdmU/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6IFwic21vb3RoLWRuZC1jb250YWluZXJcIixcclxuICB0ZW1wbGF0ZTogYDxkaXYgI2NvbnRhaW5lcj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGNvbnRhaW5lcjogYW55O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oRHJhZ2dhYmxlQ29tcG9uZW50KVxyXG4gIGRyYWdnYWJsZXM6IFF1ZXJ5TGlzdDxEcmFnZ2FibGVDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KFwib3JpZW50YXRpb25cIikgb3JpZW50YXRpb247XHJcbiAgQElucHV0KFwiYmVoYXZpb3VyXCIpIGJlaGF2aW91cjtcclxuICBASW5wdXQoXCJncm91cE5hbWVcIikgZ3JvdXBOYW1lO1xyXG4gIEBJbnB1dChcImxvY2tBeGlzXCIpIGxvY2tBeGlzO1xyXG4gIEBJbnB1dChcImRyYWdIYW5kbGVTZWxlY3RvclwiKSBkcmFnSGFuZGxlU2VsZWN0b3I7XHJcbiAgQElucHV0KFwibm9uRHJhZ0FyZWFTZWxlY3RvclwiKSBub25EcmFnQXJlYVNlbGVjdG9yO1xyXG4gIEBJbnB1dChcImRyYWdCZWdpbkRlbGF5XCIpIGRyYWdCZWdpbkRlbGF5O1xyXG4gIEBJbnB1dChcImFuaW1hdGlvbkR1cmF0aW9uXCIpIGFuaW1hdGlvbkR1cmF0aW9uO1xyXG4gIEBJbnB1dChcImF1dG9TY3JvbGxFbmFibGVkXCIpIGF1dG9TY3JvbGxFbmFibGVkO1xyXG4gIEBJbnB1dChcImRyYWdDbGFzc1wiKSBkcmFnQ2xhc3M7XHJcbiAgQElucHV0KFwiZHJvcENsYXNzXCIpIGRyb3BDbGFzcztcclxuXHJcbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8SURyYWdFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8SURyYWdFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8SURyb3BSZXN1bHQ+KCk7XHJcbiAgQElucHV0KCkgZ2V0Q2hpbGRQYXlsb2FkOiAoaW5kZXg6IG51bWJlcikgPT4ge307XHJcbiAgQElucHV0KClcclxuICBzaG91bGRBbmltYXRlRHJvcDogKFxyXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogSUNvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBJUGF5bG9hZFxyXG4gICkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIHNob3VsZEFjY2VwdERyb3A6IChcclxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IElDb250YWluZXJPcHRpb25zLFxyXG4gICAgcGF5bG9hZDogSVBheWxvYWRcclxuICApID0+IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIGRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBTbW9vdGhEbkQoXHJcbiAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLmdldE9wdGlvbnMoKVxyXG4gICAgKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9wdGlvbnMoKTogSUNvbnRhaW5lck9wdGlvbnMge1xyXG4gICAgY29uc3Qgb3B0aW9uczogSUNvbnRhaW5lck9wdGlvbnMgPSB7fTtcclxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uKSBvcHRpb25zLm9yaWVudGF0aW9uID0gdGhpcy5vcmllbnRhdGlvbjtcclxuICAgIGlmICh0aGlzLmJlaGF2aW91cikgb3B0aW9ucy5iZWhhdmlvdXIgPSB0aGlzLmJlaGF2aW91cjtcclxuICAgIGlmICh0aGlzLmdyb3VwTmFtZSkgb3B0aW9ucy5ncm91cE5hbWUgPSB0aGlzLmdyb3VwTmFtZTtcclxuICAgIGlmICh0aGlzLmxvY2tBeGlzKSBvcHRpb25zLmxvY2tBeGlzID0gdGhpcy5sb2NrQXhpcztcclxuICAgIGlmICh0aGlzLmRyYWdIYW5kbGVTZWxlY3RvcilcclxuICAgICAgb3B0aW9ucy5kcmFnSGFuZGxlU2VsZWN0b3IgPSB0aGlzLmRyYWdIYW5kbGVTZWxlY3RvcjtcclxuICAgIGlmICh0aGlzLm5vbkRyYWdBcmVhU2VsZWN0b3IpXHJcbiAgICAgIG9wdGlvbnMubm9uRHJhZ0FyZWFTZWxlY3RvciA9IHRoaXMubm9uRHJhZ0FyZWFTZWxlY3RvcjtcclxuICAgIGlmICh0aGlzLmRyYWdCZWdpbkRlbGF5KSBvcHRpb25zLmRyYWdCZWdpbkRlbGF5ID0gdGhpcy5kcmFnQmVnaW5EZWxheTtcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkR1cmF0aW9uKVxyXG4gICAgICBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uID0gdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcclxuICAgIGlmICh0aGlzLmF1dG9TY3JvbGxFbmFibGVkKVxyXG4gICAgICBvcHRpb25zLmF1dG9TY3JvbGxFbmFibGVkID0gdGhpcy5hdXRvU2Nyb2xsRW5hYmxlZDtcclxuICAgIGlmICh0aGlzLmRyYWdDbGFzcykgb3B0aW9ucy5kcmFnQ2xhc3MgPSB0aGlzLmRyYWdDbGFzcztcclxuICAgIGlmICh0aGlzLmRyb3BDbGFzcykgb3B0aW9ucy5kcm9wQ2xhc3MgPSB0aGlzLmRyb3BDbGFzcztcclxuXHJcbiAgICBpZiAodGhpcy5kcmFnU3RhcnQpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnU3RhcnQgPSAoZXZlbnQ6IElEcmFnRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyYWdTdGFydC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuZHJhZ0VuZClcclxuICAgICAgb3B0aW9ucy5vbkRyYWdFbmQgPSAoZXZlbnQ6IElEcmFnRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyYWdFbmQuZW1pdChldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZHJvcClcclxuICAgICAgb3B0aW9ucy5vbkRyb3AgPSAoZHJvcFJlc3VsdDogSURyb3BSZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRyb3AuZW1pdChkcm9wUmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRDaGlsZFBheWxvYWQpIG9wdGlvbnMuZ2V0Q2hpbGRQYXlsb2FkID0gdGhpcy5nZXRDaGlsZFBheWxvYWQ7XHJcbiAgICBpZiAodGhpcy5zaG91bGRBbmltYXRlRHJvcClcclxuICAgICAgb3B0aW9ucy5zaG91bGRBbmltYXRlRHJvcCA9IHRoaXMuc2hvdWxkQW5pbWF0ZURyb3A7XHJcbiAgICBpZiAodGhpcy5zaG91bGRBY2NlcHREcm9wKSBvcHRpb25zLnNob3VsZEFjY2VwdERyb3AgPSB0aGlzLnNob3VsZEFjY2VwdERyb3A7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0VudGVyKVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ0VudGVyID0gKCkgPT4gdGhpcy5nZXROZ1pvbmUoKCkgPT4gdGhpcy5kcmFnRW50ZXIuZW1pdCgpKTtcclxuICAgIGlmICh0aGlzLmRyYWdMZWF2ZSlcclxuICAgICAgb3B0aW9ucy5vbkRyYWdMZWF2ZSA9ICgpID0+IHRoaXMuZ2V0Tmdab25lKCgpID0+IHRoaXMuZHJhZ0xlYXZlLmVtaXQoKSk7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5nWm9uZShjbGIpIHtcclxuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBjbGIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHJhZ2dhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kcmFnZ2FibGUvZHJhZ2dhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0NvbnRhaW5lckNvbXBvbmVudCwgRHJhZ2dhYmxlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQ29udGFpbmVyQ29tcG9uZW50LCBEcmFnZ2FibGVDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hTbW9vdGhEbkRNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsIkNvbXBvbmVudCIsIlZpZXdDaGlsZCIsIlNtb290aERuRCIsImRyb3BIYW5kbGVycyIsIndyYXBwZXJDbGFzcyIsImFuaW1hdGlvbkNsYXNzIiwiX2EiLCJFdmVudEVtaXR0ZXIiLCJOZ1pvbmUiLCJDb250ZW50Q2hpbGRyZW4iLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUdFLElBQUEsK0NBQVksRUFDWixtREFBYyxDQUNGOztJQUVkLElBQU0sZUFBZTtRQUNuQixHQUFDLFlBQVksSUFBRyxJQUFJO1FBQ3BCLEdBQUMsY0FBYyxJQUFHLElBQUk7WUFDdEI7Ozs7Ozs7UUFXQSw0Q0FBZTs7O1lBQWY7Z0JBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBR0EsbUJBQVMsQ0FBQyxZQUFZLENBQUM7YUFDMUU7O29CQVhGQyxjQUFTLFNBQUM7O3dCQUVULFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFFBQVEsRUFBRSxrRkFFSTtxQkFDZjs7OzhCQUVFQyxjQUFTLFNBQUMsa0JBQWtCOztpQ0FwQi9COzs7Ozs7OztBQ0FBLEFBS0FDLHNCQUFTLENBQUMsU0FBUyxHQUFHLFVBQUMsS0FBSztRQUMxQixPQUFPLEtBQUssQ0FBQztLQUNkLENBQUE7QUFFREEsc0JBQVMsQ0FBQyxXQUFXLEdBQUlDLHNCQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFHL0QsSUFBQUMsaURBQVksRUFDWkMscURBQWMsQ0FDRjs7SUFFZCxJQUFNLHNCQUFzQjtRQUMxQkMsS0FBQ0YsY0FBWSxJQUFHLElBQUk7UUFDcEJFLEtBQUNE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