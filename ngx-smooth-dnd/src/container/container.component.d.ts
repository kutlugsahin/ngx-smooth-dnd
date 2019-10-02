import { QueryList, ElementRef, AfterViewInit, OnDestroy, EventEmitter, NgZone } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
import { DropResult, ContainerOptions } from 'smooth-dnd';
export interface DragStartEndInfo {
    isSource: boolean;
    payload: any;
    willAcceptDrop: boolean;
}
export declare class ContainerComponent implements AfterViewInit, OnDestroy {
    private _ngZone;
    private container;
    draggables: QueryList<DraggableComponent>;
    containerElementRef: ElementRef;
    orientation: any;
    behaviour: any;
    groupName: any;
    lockAxis: any;
    dragHandleSelector: any;
    nonDragAreaSelector: any;
    dragBeginDelay: any;
    animationDuration: any;
    autoScrollEnabled: any;
    dragClass: any;
    dropClass: any;
    dropPlaceholder: any;
    removeOnDropOut: any;
    useTransformForGhost: any;
    dragStart: EventEmitter<DragStartEndInfo>;
    dragEnd: EventEmitter<DragStartEndInfo>;
    drop: EventEmitter<DropResult>;
    dropReady: EventEmitter<DropResult>;
    getChildPayload: (index: number) => {};
    shouldAnimateDrop: (sourceContainerOptions: ContainerOptions, payload: any) => boolean;
    shouldAcceptDrop: (sourceContainerOptions: ContainerOptions, payload: any) => boolean;
    dragEnter: EventEmitter<any>;
    dragLeave: EventEmitter<any>;
    getGhostParent: () => HTMLElement;
    constructor(_ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private getOptions;
    private getNgZone;
}
