import { QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
export declare class ContainerComponent implements AfterViewInit {
    tabs: QueryList<DraggableComponent>;
    containerElementRef: ElementRef;
    options: any;
    private container;
    ngAfterViewInit(): void;
}
