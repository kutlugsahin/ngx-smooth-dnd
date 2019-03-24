(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('smooth-dnd')) :
    typeof define === 'function' && define.amd ? define('ngx-smooth-dnd', ['exports', '@angular/common', '@angular/core', 'smooth-dnd'], factory) :
    (factory((global['ngx-smooth-dnd'] = {}),global.ng.common,global.ng.core,global.SmoothDnD));
}(this, (function (exports,common,core,smoothDnd) { 'use strict';

    var smoothDnd__default = 'default' in smoothDnd ? smoothDnd['default'] : smoothDnd;

    var _a;
    var wrapperClass = smoothDnd.constants.wrapperClass, animationClass = smoothDnd.constants.animationClass;
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
                this.wrapper.nativeElement.parentNode.className = smoothDnd.constants.wrapperClass;
            };
        DraggableComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'smooth-dnd-draggable',
                        template: "<ng-container #draggableWrapper>\r\n    <ng-content></ng-content>\r\n</ng-container>"
                    }] }
        ];
        DraggableComponent.propDecorators = {
            wrapper: [{ type: core.ViewChild, args: ['draggableWrapper',] }]
        };
        return DraggableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    smoothDnd.smoothDnD.dropHandler = smoothDnd.dropHandlers.reactDropHandler().handler;
    smoothDnd.smoothDnD.wrapChild = false;
    var ContainerComponent = /** @class */ (function () {
        function ContainerComponent(_ngZone) {
            this._ngZone = _ngZone;
            this.dragStart = new core.EventEmitter();
            this.dragEnd = new core.EventEmitter();
            this.drop = new core.EventEmitter();
            this.dropReady = new core.EventEmitter();
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
                this.container = smoothDnd.smoothDnD(this.containerElementRef.nativeElement, this.getOptions());
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
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: "smooth-dnd-container",
                        template: "<div #container>\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
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
            dropPlaceholder: [{ type: core.Input, args: ["dropPlaceholder",] }],
            removeOnDropOut: [{ type: core.Input, args: ["removeOnDropOut",] }],
            dragStart: [{ type: core.Output }],
            dragEnd: [{ type: core.Output }],
            drop: [{ type: core.Output }],
            dropReady: [{ type: core.Output }],
            getChildPayload: [{ type: core.Input }],
            shouldAnimateDrop: [{ type: core.Input }],
            shouldAcceptDrop: [{ type: core.Input }],
            dragEnter: [{ type: core.Output }],
            dragLeave: [{ type: core.Output }],
            getGhostParent: [{ type: core.Input }]
        };
        return ContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSmoothDnDModule = /** @class */ (function () {
        function NgxSmoothDnDModule() {
        }
        NgxSmoothDnDModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [ContainerComponent, DraggableComponent],
                        exports: [ContainerComponent, DraggableComponent]
                    },] }
        ];
        return NgxSmoothDnDModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.smoothDnD = smoothDnd.smoothDnD;
    exports.constants = smoothDnd.constants;
    exports.dropHandlers = smoothDnd.dropHandlers;
    exports.NgxSmoothDnDModule = NgxSmoothDnDModule;
    exports.ContainerComponent = ContainerComponent;
    exports.DraggableComponent = DraggableComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-smooth-dnd.umd.js.map