import { QueryList, ElementRef, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
export interface IDropResult {
    removedIndex: number;
    addedIndex: number;
    payload: any;
    element: Element;
}
export interface IContainerOptions {
    orientation?: string;
    onDrop?: (removedIndex: number, addedIndex: number, payload: any, element: Element) => void;
}
export declare class ContainerComponent implements AfterViewInit, OnDestroy {
    private container;
    draggables: QueryList<DraggableComponent>;
    containerElementRef: ElementRef;
    orientation: any;
    onDrop: EventEmitter<IDropResult>;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private getOptions();
}
