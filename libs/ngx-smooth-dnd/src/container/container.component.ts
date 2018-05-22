import { Component, ContentChildren, QueryList, AfterContentInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
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
export interface IDropResult {
  removedIndex: number;
  addedIndex: number;
  payload: IPayload;
  element: Element;
}

export interface IDragEvent {
  isSource: boolean;
  payload: IPayload;
  willAcceptDrop: boolean;
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
  onDragStart?: (dragEvent: IDragEvent) => void;
  onDragEnd?: (dragEvent: IDragEvent) => void;
  onDrop?: (dropResult: IDropResult) => void;
  getChildPayload?: (index: number) => {};
  shouldAnimateDrop?: (
    sourceContainerOptions: IContainerOptions,
    payload: IPayload
  ) => boolean;
  shouldAcceptDrop?: (
    sourceContainerOptions: IContainerOptions,
    payload: IPayload
  ) => boolean;
  onDragEnter?: () => void;
  onDragLeave?: () => void;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "smooth-dnd-container",
  templateUrl: "./container.component.html"
})
export class ContainerComponent implements AfterViewInit, OnDestroy {
  private container: any;
  @ContentChildren(DraggableComponent)
  draggables: QueryList<DraggableComponent>;
  @ViewChild("container") containerElementRef: ElementRef;

  @Input("orientation") orientation;
  @Input("behaviour") behaviour;
  @Input("groupName") groupName;
  @Input("lockAxis") lockAxis;
  @Input("dragHandleSelector") dragHandleSelector;
  @Input("nonDragAreaSelector") nonDragAreaSelector;
  @Input("dragBeginDelay") dragBeginDelay;
  @Input("animationDuration") animationDuration;
  @Input("autoScrollEnabled") autoScrollEnabled;
  @Input("dragClass") dragClass;
  @Input("dropClass") dropClass;

  @Output() dragStart = new EventEmitter<IDragEvent>();
  @Output() dragEnd = new EventEmitter<IDragEvent>();
  @Output() drop = new EventEmitter<IDropResult>();
  @Input() getChildPayload: (index: number) => {};
  @Input()
  shouldAnimateDrop: (
    sourceContainerOptions: IContainerOptions,
    payload: IPayload
  ) => boolean;
  @Input()
  shouldAcceptDrop: (
    sourceContainerOptions: IContainerOptions,
    payload: IPayload
  ) => boolean;
  @Output() dragEnter = new EventEmitter();
  @Output() dragLeave = new EventEmitter();

  constructor(private _ngZone: NgZone) {}

  ngAfterViewInit() {
    this.container = SmoothDnD(
      this.containerElementRef.nativeElement,
      this.getOptions()
    );
  }
  ngOnDestroy(): void {
    this.container.dispose();
  }

  private getOptions(): IContainerOptions {
    const options: IContainerOptions = {};
    if (this.orientation) options.orientation = this.orientation;
    if (this.behaviour) options.behaviour = this.behaviour;
    if (this.groupName) options.groupName = this.groupName;
    if (this.lockAxis) options.lockAxis = this.lockAxis;
    if (this.dragHandleSelector)
      options.dragHandleSelector = this.dragHandleSelector;
    if (this.nonDragAreaSelector)
      options.nonDragAreaSelector = this.nonDragAreaSelector;
    if (this.dragBeginDelay) options.dragBeginDelay = this.dragBeginDelay;
    if (this.animationDuration)
      options.animationDuration = this.animationDuration;
    if (this.autoScrollEnabled)
      options.autoScrollEnabled = this.autoScrollEnabled;
    if (this.dragClass) options.dragClass = this.dragClass;
    if (this.dropClass) options.dropClass = this.dropClass;

    if (this.dragStart)
      options.onDragStart = (event: IDragEvent) => {
        this.getNgZone(() => {
          this.dragStart.emit(event);
        });
      };
    
    if (this.dragEnd)
      options.onDragEnd = (event: IDragEvent) => {
        this.getNgZone(() => {
          this.dragEnd.emit(event);
        });
      };

    if (this.drop)
      options.onDrop = (dropResult: IDropResult) => {
        this.getNgZone(() => {
          this.drop.emit(dropResult);
        });
      };

    if (this.getChildPayload) options.getChildPayload = this.getChildPayload;
    if (this.shouldAnimateDrop)
      options.shouldAnimateDrop = this.shouldAnimateDrop;
    if (this.shouldAcceptDrop) options.shouldAcceptDrop = this.shouldAcceptDrop;

    if (this.dragEnter)
      options.onDragEnter = () => this.getNgZone(() => this.dragEnter.emit());
    if (this.dragLeave)
      options.onDragLeave = () => this.getNgZone(() => this.dragLeave.emit());

    return options;
  }

  private getNgZone(clb) {
    this._ngZone.run(() => {
      clb();
    });
  }
}
