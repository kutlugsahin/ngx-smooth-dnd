import { QueryList, ElementRef, AfterViewInit, OnDestroy, EventEmitter, NgZone } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
export interface IDropResult {
    removedIndex: number;
    addedIndex: number;
    payload: any;
    element: Element;
}
export declare type IPayload = any;
export interface IContainerOptions {
    orientation?: string;
    behaviour?: string;
    groupName?: string;
    lockAxis?: string;
    dragHandleSelector?: string;
    nonDragAreaSelector?: string;
    dragBeginDelay?: number;
    animationDuration?: number;
    autoScrollEnabled?: boolean;
    dragClass?: string;
    dropClass?: string;
    onDragStart?: (index: number, payload: IPayload) => void;
    onDrop?: (dropResult: IDropResult) => void;
    getChildPayload?: (index: number) => {};
    shouldAnimateDrop?: (sourceContainerOptions: IContainerOptions, payload: IPayload) => boolean;
    shouldAcceptDrop?: (sourceContainerOptions: IContainerOptions, payload: IPayload) => boolean;
    onDragEnter?: () => void;
    onDragLeave?: () => void;
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
    dragStart: EventEmitter<{
        index: number;
        payload: any;
    }>;
    drop: EventEmitter<IDropResult>;
    getChildPayload: (index: number) => {};
    shouldAnimateDrop: (sourceContainerOptions: IContainerOptions, payload: IPayload) => boolean;
    shouldAcceptDrop: (sourceContainerOptions: IContainerOptions, payload: IPayload) => boolean;
    dragEnter: EventEmitter<{}>;
    dragLeave: EventEmitter<{}>;
    constructor(_ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private getOptions();
    private getNgZone(clb);
}
