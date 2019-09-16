import * as tslib_1 from "tslib";
import { Component, ContentChildren, QueryList, AfterContentInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
import { dropHandlers, smoothDnD } from 'smooth-dnd';
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
tslib_1.__decorate([
    ContentChildren(DraggableComponent),
    tslib_1.__metadata("design:type", QueryList)
], ContainerComponent.prototype, "draggables", void 0);
tslib_1.__decorate([
    ViewChild("container", { static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], ContainerComponent.prototype, "containerElementRef", void 0);
tslib_1.__decorate([
    Input("orientation"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "orientation", void 0);
tslib_1.__decorate([
    Input("behaviour"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "behaviour", void 0);
tslib_1.__decorate([
    Input("groupName"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "groupName", void 0);
tslib_1.__decorate([
    Input("lockAxis"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "lockAxis", void 0);
tslib_1.__decorate([
    Input("dragHandleSelector"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragHandleSelector", void 0);
tslib_1.__decorate([
    Input("nonDragAreaSelector"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "nonDragAreaSelector", void 0);
tslib_1.__decorate([
    Input("dragBeginDelay"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragBeginDelay", void 0);
tslib_1.__decorate([
    Input("animationDuration"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "animationDuration", void 0);
tslib_1.__decorate([
    Input("autoScrollEnabled"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "autoScrollEnabled", void 0);
tslib_1.__decorate([
    Input("dragClass"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragClass", void 0);
tslib_1.__decorate([
    Input("dropClass"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dropClass", void 0);
tslib_1.__decorate([
    Input("dropPlaceholder"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dropPlaceholder", void 0);
tslib_1.__decorate([
    Input("removeOnDropOut"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "removeOnDropOut", void 0);
tslib_1.__decorate([
    Input("useTransformForGhost"),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "useTransformForGhost", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragStart", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragEnd", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "drop", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dropReady", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], ContainerComponent.prototype, "getChildPayload", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], ContainerComponent.prototype, "shouldAnimateDrop", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], ContainerComponent.prototype, "shouldAcceptDrop", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragEnter", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], ContainerComponent.prototype, "dragLeave", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], ContainerComponent.prototype, "getGhostParent", void 0);
ContainerComponent = tslib_1.__decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: "smooth-dnd-container",
        template: "<div #container>\r\n    <ng-content></ng-content>\r\n</div>"
    }),
    tslib_1.__metadata("design:paramtypes", [NgZone])
], ContainerComponent);
export { ContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEwsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWdDLE1BQU0sWUFBWSxDQUFDO0FBRW5GLFNBQVMsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsT0FBTyxDQUFDO0FBQ2hFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBYTVCLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBMEM3QixZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQXJCekIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBQ2pELFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUMvQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN0QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQVkzQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUtGLENBQUM7SUFFeEMsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUN0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O3FEQUFnQztBQUd6QztJQURDLEtBQUssRUFBRTs7MERBQzBCO0FBeEN2QixrQkFBa0I7SUFMOUIsU0FBUyxDQUFDO1FBQ1QsOENBQThDO1FBQzlDLFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsdUVBQXlDO0tBQzFDLENBQUM7NkNBMkM2QixNQUFNO0dBMUN4QixrQkFBa0IsQ0EySDlCO1NBM0hZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWdnYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2RyYWdnYWJsZS9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgZHJvcEhhbmRsZXJzLCBzbW9vdGhEbkQsIERyb3BSZXN1bHQsIENvbnRhaW5lck9wdGlvbnMgfSBmcm9tICdzbW9vdGgtZG5kJztcclxuXHJcbnNtb290aERuRC5kcm9wSGFuZGxlciA9IGRyb3BIYW5kbGVycy5yZWFjdERyb3BIYW5kbGVyKCkuaGFuZGxlcjtcclxuc21vb3RoRG5ELndyYXBDaGlsZCA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmFnU3RhcnRFbmRJbmZvIHtcclxuICBpc1NvdXJjZTogYm9vbGVhbjtcclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgd2lsbEFjY2VwdERyb3A6IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogXCJzbW9vdGgtZG5kLWNvbnRhaW5lclwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vY29udGFpbmVyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBjb250YWluZXI6IGFueTtcclxuICBAQ29udGVudENoaWxkcmVuKERyYWdnYWJsZUNvbXBvbmVudClcclxuICBkcmFnZ2FibGVzOiBRdWVyeUxpc3Q8RHJhZ2dhYmxlQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIsIHtzdGF0aWM6IHRydWV9KSBjb250YWluZXJFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoXCJvcmllbnRhdGlvblwiKSBvcmllbnRhdGlvbjtcclxuICBASW5wdXQoXCJiZWhhdmlvdXJcIikgYmVoYXZpb3VyO1xyXG4gIEBJbnB1dChcImdyb3VwTmFtZVwiKSBncm91cE5hbWU7XHJcbiAgQElucHV0KFwibG9ja0F4aXNcIikgbG9ja0F4aXM7XHJcbiAgQElucHV0KFwiZHJhZ0hhbmRsZVNlbGVjdG9yXCIpIGRyYWdIYW5kbGVTZWxlY3RvcjtcclxuICBASW5wdXQoXCJub25EcmFnQXJlYVNlbGVjdG9yXCIpIG5vbkRyYWdBcmVhU2VsZWN0b3I7XHJcbiAgQElucHV0KFwiZHJhZ0JlZ2luRGVsYXlcIikgZHJhZ0JlZ2luRGVsYXk7XHJcbiAgQElucHV0KFwiYW5pbWF0aW9uRHVyYXRpb25cIikgYW5pbWF0aW9uRHVyYXRpb247XHJcbiAgQElucHV0KFwiYXV0b1Njcm9sbEVuYWJsZWRcIikgYXV0b1Njcm9sbEVuYWJsZWQ7XHJcbiAgQElucHV0KFwiZHJhZ0NsYXNzXCIpIGRyYWdDbGFzcztcclxuICBASW5wdXQoXCJkcm9wQ2xhc3NcIikgZHJvcENsYXNzO1xyXG4gIEBJbnB1dChcImRyb3BQbGFjZWhvbGRlclwiKSBkcm9wUGxhY2Vob2xkZXI7XHJcbiAgQElucHV0KFwicmVtb3ZlT25Ecm9wT3V0XCIpIHJlbW92ZU9uRHJvcE91dDtcclxuICBASW5wdXQoXCJ1c2VUcmFuc2Zvcm1Gb3JHaG9zdFwiKSB1c2VUcmFuc2Zvcm1Gb3JHaG9zdDtcclxuXHJcbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1N0YXJ0RW5kSW5mbz4oKTtcclxuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1N0YXJ0RW5kSW5mbz4oKTtcclxuICBAT3V0cHV0KCkgZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcFJlc3VsdD4oKTtcclxuICBAT3V0cHV0KCkgZHJvcFJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wUmVzdWx0PigpO1xyXG4gIEBJbnB1dCgpIGdldENoaWxkUGF5bG9hZDogKGluZGV4OiBudW1iZXIpID0+IHt9O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2hvdWxkQW5pbWF0ZURyb3A6IChcclxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IENvbnRhaW5lck9wdGlvbnMsXHJcbiAgICBwYXlsb2FkOiBhbnlcclxuICApID0+IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBzaG91bGRBY2NlcHREcm9wOiAoXHJcbiAgICBzb3VyY2VDb250YWluZXJPcHRpb25zOiBDb250YWluZXJPcHRpb25zLFxyXG4gICAgcGF5bG9hZDogYW55XHJcbiAgKSA9PiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBkcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXRHaG9zdFBhcmVudDogKCkgPT4gSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBzbW9vdGhEbkQoXHJcbiAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLmdldE9wdGlvbnMoKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZih0aGlzLnVzZVRyYW5zZm9ybUZvckdob3N0KSB0aGlzLmNvbnRhaW5lci51c2VUcmFuc2Zvcm1Gb3JHaG9zdCA9IHRoaXMudXNlVHJhbnNmb3JtRm9yR2hvc3Q7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250YWluZXIuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPcHRpb25zKCk6IENvbnRhaW5lck9wdGlvbnMge1xyXG4gICAgY29uc3Qgb3B0aW9uczogQ29udGFpbmVyT3B0aW9ucyA9IHt9O1xyXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24pIG9wdGlvbnMub3JpZW50YXRpb24gPSB0aGlzLm9yaWVudGF0aW9uO1xyXG4gICAgaWYgKHRoaXMuYmVoYXZpb3VyKSBvcHRpb25zLmJlaGF2aW91ciA9IHRoaXMuYmVoYXZpb3VyO1xyXG4gICAgaWYgKHRoaXMuZ3JvdXBOYW1lKSBvcHRpb25zLmdyb3VwTmFtZSA9IHRoaXMuZ3JvdXBOYW1lO1xyXG4gICAgaWYgKHRoaXMubG9ja0F4aXMpIG9wdGlvbnMubG9ja0F4aXMgPSB0aGlzLmxvY2tBeGlzO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0hhbmRsZVNlbGVjdG9yKVxyXG4gICAgICBvcHRpb25zLmRyYWdIYW5kbGVTZWxlY3RvciA9IHRoaXMuZHJhZ0hhbmRsZVNlbGVjdG9yO1xyXG4gICAgaWYgKHRoaXMubm9uRHJhZ0FyZWFTZWxlY3RvcilcclxuICAgICAgb3B0aW9ucy5ub25EcmFnQXJlYVNlbGVjdG9yID0gdGhpcy5ub25EcmFnQXJlYVNlbGVjdG9yO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0JlZ2luRGVsYXkpIG9wdGlvbnMuZHJhZ0JlZ2luRGVsYXkgPSB0aGlzLmRyYWdCZWdpbkRlbGF5O1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyYXRpb24pXHJcbiAgICAgIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xyXG4gICAgaWYgKHRoaXMuYXV0b1Njcm9sbEVuYWJsZWQpXHJcbiAgICAgIG9wdGlvbnMuYXV0b1Njcm9sbEVuYWJsZWQgPSB0aGlzLmF1dG9TY3JvbGxFbmFibGVkO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0NsYXNzKSBvcHRpb25zLmRyYWdDbGFzcyA9IHRoaXMuZHJhZ0NsYXNzO1xyXG4gICAgaWYgKHRoaXMuZHJvcENsYXNzKSBvcHRpb25zLmRyb3BDbGFzcyA9IHRoaXMuZHJvcENsYXNzO1xyXG4gICAgaWYgKHRoaXMuZHJvcFBsYWNlaG9sZGVyKSBvcHRpb25zLmRyb3BQbGFjZWhvbGRlciA9IHRoaXMuZHJvcFBsYWNlaG9sZGVyO1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdTdGFydClcclxuICAgICAgb3B0aW9ucy5vbkRyYWdTdGFydCA9IChpbmZvOiBEcmFnU3RhcnRFbmRJbmZvKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kcmFnU3RhcnQuZW1pdChpbmZvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5kcmFnRW5kKVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ0VuZCA9IChpbmZvOiBEcmFnU3RhcnRFbmRJbmZvKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kcmFnRW5kLmVtaXQoaW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZHJvcClcclxuICAgICAgb3B0aW9ucy5vbkRyb3AgPSAoZHJvcFJlc3VsdDogRHJvcFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJvcC5lbWl0KGRyb3BSZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmdldENoaWxkUGF5bG9hZCkgb3B0aW9ucy5nZXRDaGlsZFBheWxvYWQgPSB0aGlzLmdldENoaWxkUGF5bG9hZDtcclxuICAgIGlmICh0aGlzLnNob3VsZEFuaW1hdGVEcm9wKVxyXG4gICAgICBvcHRpb25zLnNob3VsZEFuaW1hdGVEcm9wID0gdGhpcy5zaG91bGRBbmltYXRlRHJvcDtcclxuICAgIGlmICh0aGlzLnNob3VsZEFjY2VwdERyb3ApIG9wdGlvbnMuc2hvdWxkQWNjZXB0RHJvcCA9IHRoaXMuc2hvdWxkQWNjZXB0RHJvcDtcclxuXHJcbiAgICBpZiAodGhpcy5kcmFnRW50ZXIpXHJcbiAgICAgIG9wdGlvbnMub25EcmFnRW50ZXIgPSAoKSA9PiB0aGlzLmdldE5nWm9uZSgoKSA9PiB0aGlzLmRyYWdFbnRlci5lbWl0KCkpO1xyXG4gICAgaWYgKHRoaXMuZHJhZ0xlYXZlKVxyXG4gICAgICBvcHRpb25zLm9uRHJhZ0xlYXZlID0gKCkgPT4gdGhpcy5nZXROZ1pvbmUoKCkgPT4gdGhpcy5kcmFnTGVhdmUuZW1pdCgpKTtcclxuXHJcbiAgICBpZiAodGhpcy5kcm9wUmVhZHkpXHJcbiAgICAgIG9wdGlvbnMub25Ecm9wUmVhZHkgPSAoZHJvcFJlc3VsdDogRHJvcFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZHJvcFJlYWR5LmVtaXQoZHJvcFJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZ2V0R2hvc3RQYXJlbnQpIG9wdGlvbnMuZ2V0R2hvc3RQYXJlbnQgPSB0aGlzLmdldEdob3N0UGFyZW50O1xyXG5cclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROZ1pvbmUoY2xiKSB7XHJcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgY2xiKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19