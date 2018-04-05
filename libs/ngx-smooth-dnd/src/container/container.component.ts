import { Component, ContentChildren, QueryList, AfterContentInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
import SmoothDnD, { constants } from 'smooth-dnd';

// tslint:disable:no-output-on-prefix

export interface IDropResult {
  removedIndex: number,
  addedIndex: number,
  payload: any,
  element: Element,
}

export interface IContainerOptions {
  orientation?: string;
  onDrop?: (removedIndex: number, addedIndex: number, payload: any, element: Element) => void
}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-smooth-dnd-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent implements AfterViewInit, OnDestroy {
  private container: any;
  @ContentChildren(DraggableComponent) draggables: QueryList<DraggableComponent>;
  @ViewChild('container') containerElementRef: ElementRef;

  @Input('orientation') orientation;
  @Output() onDrop = new EventEmitter<IDropResult>();

  ngAfterViewInit() {
    this.container = SmoothDnD(this.containerElementRef.nativeElement, this.getOptions());
  }
  ngOnDestroy(): void {
    this.container.dispose();
  }

  private getOptions() {
    const options: IContainerOptions = {};
    if (this.orientation) options.orientation = this.orientation;
    
    if (this.onDrop) options.onDrop = (removedIndex: number, addedIndex: number, payload?: any, element?: Element) => {
      this.onDrop.emit({
        removedIndex, addedIndex, payload, element
      });
    };
  }
}
