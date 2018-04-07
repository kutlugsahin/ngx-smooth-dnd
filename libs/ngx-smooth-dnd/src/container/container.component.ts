import { Component, ContentChildren, QueryList, AfterContentInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
import SmoothDnD, { constants, dropHandlers } from 'smooth-dnd';
import { wrappedError } from '@angular/core/src/error_handler';

SmoothDnD.wrapChild = (child) => {
  return child;
}

SmoothDnD.dropHandler =  dropHandlers.reactDropHandler().handler;

const {
  wrapperClass,
  animationClass
} = constants;

const wrapperConstantClasses = {
  [wrapperClass]: true,
  [animationClass]: true,
};
// tslint:disable:no-output-on-prefix
export interface IDropParams {
  removedIndex: number,
  addedIndex: number,
  payload: any,
  element: Element,
}

export type IPayload = any;

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
  onDrop?: (dropResult: IDropParams) => void;
  getChildPayload?: (index: number) => {};
  shouldAnimateDrop?: (sourceContainerOptions: IContainerOptions, payload: IPayload) => boolean;
  shouldAcceptDrop?: (sourceContainerOptions: IContainerOptions, payload: IPayload) => boolean;
  onDragEnter?: () => void;
  onDragLeave?: () => void;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[container]',
  templateUrl: './container.component.html'
})
export class ContainerComponent implements AfterViewInit, OnDestroy, OnChanges, AfterContentChecked {  
  private container: any;
  @ContentChildren(DraggableComponent) draggables: QueryList<DraggableComponent>;
  @ViewChild('container') containerElementRef: ElementRef;

  @Input('orientation') orientation;
  @Input('behaviour') behaviour;
  @Input('groupName') groupName;
  @Input('lockAxis') lockAxis;
  @Input('dragHandleSelector') dragHandleSelector;
  @Input('nonDragAreaSelector') nonDragAreaSelector;
  @Input('dragBeginDelay') dragBeginDelay;
  @Input('animationDuration') animationDuration;
  @Input('autoScrollEnabled') autoScrollEnabled;
  @Input('dragClass') dragClass;
  @Input('dropClass') dropClass;

  @Output() dragStart = new EventEmitter<{ index: number; payload: IPayload}>();
  @Output() drop = new EventEmitter<IDropParams>();
  @Input() getChildPayload: (index: number) => {};
  @Input() shouldAnimateDrop: (sourceContainerOptions: IContainerOptions, payload: IPayload) => boolean;
  @Input() shouldAcceptDrop: (sourceContainerOptions: IContainerOptions, payload: IPayload) => boolean;
  @Output() dragEnter = new EventEmitter();
  @Output() dragLeave = new EventEmitter();

  wrapperClassList = Object.assign({}, wrapperConstantClasses);

  ngAfterViewInit() {
    this.container = SmoothDnD(this.containerElementRef.nativeElement, this.getOptions());
  }
  ngOnDestroy(): void {
    this.container.dispose();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    throw new Error("Method not implemented.");
  }

  ngAfterContentChecked(): void {
    console.log(this.draggables.length);
  }

  private getOptions(): IContainerOptions {    
    const options: IContainerOptions = {};
    if (this.orientation) options.orientation = this.orientation;
    if (this.behaviour) options.behaviour = this.behaviour;
    if (this.groupName) options.groupName = this.groupName;
    if (this.lockAxis) options.lockAxis = this.lockAxis;
    if (this.dragHandleSelector) options.dragHandleSelector = this.dragHandleSelector;
    if (this.nonDragAreaSelector) options.nonDragAreaSelector = this.nonDragAreaSelector;
    if (this.dragBeginDelay) options.dragBeginDelay = this.dragBeginDelay;
    if (this.animationDuration) options.animationDuration = this.animationDuration;
    if (this.autoScrollEnabled) options.autoScrollEnabled = this.autoScrollEnabled;
    if (this.dragClass) options.dragClass = this.dragClass;
    if (this.dropClass) options.dropClass = this.dropClass;
    
    if (this.dragStart) options.onDragStart = (index: number, payload: IPayload) => {
      this.dragStart.emit({ index, payload });
    };

    if (this.drop) options.onDrop = (dropResult: IDropParams) => {
      this.drop.emit(dropResult);
    };

    if (this.getChildPayload) options.getChildPayload = this.getChildPayload;
    if (this.shouldAnimateDrop) options.shouldAnimateDrop = this.shouldAnimateDrop;
    if (this.shouldAcceptDrop) options.shouldAcceptDrop = this.shouldAcceptDrop;

    if (this.dragEnter) options.onDragEnter = () => this.dragEnter.emit();
    if (this.dragLeave) options.onDragLeave = () => this.dragLeave.emit();

    return options;
  }
}
