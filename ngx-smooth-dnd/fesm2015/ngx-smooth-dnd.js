import { __decorate, __metadata } from 'tslib';
import { ViewChild, ElementRef, Component, EventEmitter, NgZone, ContentChildren, QueryList, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { constants, smoothDnD, dropHandlers } from 'smooth-dnd';
export * from 'smooth-dnd';

const { wrapperClass, animationClass } = constants;
const constantClasses = {
    [wrapperClass]: true,
    [animationClass]: true,
};
let DraggableComponent = class DraggableComponent {
    ngAfterViewInit() {
        this.wrapper.nativeElement.parentNode.className = constants.wrapperClass;
    }
};
__decorate([
    ViewChild('draggableWrapper', { static: true }),
    __metadata("design:type", ElementRef)
], DraggableComponent.prototype, "wrapper", void 0);
DraggableComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'smooth-dnd-draggable',
        template: "<ng-container #draggableWrapper>\r\n    <ng-content></ng-content>\r\n</ng-container>"
    })
], DraggableComponent);

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
smoothDnD.wrapChild = false;
let ContainerComponent = class ContainerComponent {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this.dragStart = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.drop = new EventEmitter();
        this.dropReady = new EventEmitter();
        this.dragEnter = new EventEmitter();
        this.dragLeave = new EventEmitter();
    }
    ngAfterViewInit() {
        this.container = smoothDnD(this.containerElementRef.nativeElement, this.getOptions());
        if (this.useTransformForGhost)
            this.container.useTransformForGhost = this.useTransformForGhost;
    }
    ngOnDestroy() {
        this.container.dispose();
    }
    getOptions() {
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
    getNgZone(clb) {
        this._ngZone.run(() => {
            clb();
        });
    }
};
ContainerComponent.ctorParameters = () => [
    { type: NgZone }
];
__decorate([
    ContentChildren(DraggableComponent),
    __metadata("design:type", QueryList)
], ContainerComponent.prototype, "draggables", void 0);
__decorate([
    ViewChild("container", { static: true }),
    __metadata("design:type", ElementRef)
], ContainerComponent.prototype, "containerElementRef", void 0);
__decorate([
    Input("orientation"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "orientation", void 0);
__decorate([
    Input("behaviour"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "behaviour", void 0);
__decorate([
    Input("groupName"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "groupName", void 0);
__decorate([
    Input("lockAxis"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "lockAxis", void 0);
__decorate([
    Input("dragHandleSelector"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "dragHandleSelector", void 0);
__decorate([
    Input("nonDragAreaSelector"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "nonDragAreaSelector", void 0);
__decorate([
    Input("dragBeginDelay"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "dragBeginDelay", void 0);
__decorate([
    Input("animationDuration"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "animationDuration", void 0);
__decorate([
    Input("autoScrollEnabled"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "autoScrollEnabled", void 0);
__decorate([
    Input("dragClass"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "dragClass", void 0);
__decorate([
    Input("dropClass"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "dropClass", void 0);
__decorate([
    Input("dropPlaceholder"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "dropPlaceholder", void 0);
__decorate([
    Input("removeOnDropOut"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "removeOnDropOut", void 0);
__decorate([
    Input("useTransformForGhost"),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "useTransformForGhost", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "dragStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "dragEnd", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "drop", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "dropReady", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], ContainerComponent.prototype, "getChildPayload", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], ContainerComponent.prototype, "shouldAnimateDrop", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], ContainerComponent.prototype, "shouldAcceptDrop", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "dragEnter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "dragLeave", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], ContainerComponent.prototype, "getGhostParent", void 0);
ContainerComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: "smooth-dnd-container",
        template: "<div #container>\r\n    <ng-content></ng-content>\r\n</div>"
    }),
    __metadata("design:paramtypes", [NgZone])
], ContainerComponent);

let NgxSmoothDnDModule = class NgxSmoothDnDModule {
};
NgxSmoothDnDModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [ContainerComponent, DraggableComponent],
        exports: [ContainerComponent, DraggableComponent]
    })
], NgxSmoothDnDModule);

/**
 * Generated bundle index. Do not edit.
 */

export { ContainerComponent, DraggableComponent, NgxSmoothDnDModule };
//# sourceMappingURL=ngx-smooth-dnd.js.map
