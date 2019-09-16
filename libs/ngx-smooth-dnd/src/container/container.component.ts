import { Component, ContentChildren, QueryList, AfterContentInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
import { dropHandlers, smoothDnD, DropResult, ContainerOptions } from 'smooth-dnd';

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
smoothDnD.wrapChild = false;

export interface DragStartEndInfo {
  isSource: boolean;
  payload: any;
  willAcceptDrop: boolean;
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
  @ViewChild("container", {static: true}) containerElementRef: ElementRef;

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
  @Input("dropPlaceholder") dropPlaceholder;
  @Input("removeOnDropOut") removeOnDropOut;
  @Input("useTransformForGhost") useTransformForGhost;

  @Output() dragStart = new EventEmitter<DragStartEndInfo>();
  @Output() dragEnd = new EventEmitter<DragStartEndInfo>();
  @Output() drop = new EventEmitter<DropResult>();
  @Output() dropReady = new EventEmitter<DropResult>();
  @Input() getChildPayload: (index: number) => {};
  @Input()
  shouldAnimateDrop: (
    sourceContainerOptions: ContainerOptions,
    payload: any
  ) => boolean;
  @Input()
  shouldAcceptDrop: (
    sourceContainerOptions: ContainerOptions,
    payload: any
  ) => boolean;
  @Output() dragEnter = new EventEmitter();
  @Output() dragLeave = new EventEmitter();

  @Input()
  getGhostParent: () => HTMLElement;

  constructor(private _ngZone: NgZone) { }

  ngAfterViewInit() {
    this.container = smoothDnD(
      this.containerElementRef.nativeElement,
      this.getOptions()
    );

    if(this.useTransformForGhost) this.container.useTransformForGhost = this.useTransformForGhost;
  }
  ngOnDestroy(): void {
    this.container.dispose();
  }

  private getOptions(): ContainerOptions {
    const options: ContainerOptions = {};
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
    if (this.dropPlaceholder) options.dropPlaceholder = this.dropPlaceholder;

    if (this.dragStart)
      options.onDragStart = (info: DragStartEndInfo) => {
        this.getNgZone(() => {
          this.dragStart.emit(info);
        });
      };

    if (this.dragEnd)
      options.onDragEnd = (info: DragStartEndInfo) => {
        this.getNgZone(() => {
          this.dragEnd.emit(info);
        });
      };

    if (this.drop)
      options.onDrop = (dropResult: DropResult) => {
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

    if (this.dropReady)
      options.onDropReady = (dropResult: DropResult) => {
        this.getNgZone(() => {
          this.dropReady.emit(dropResult);
        });
      };

    if (this.getGhostParent) options.getGhostParent = this.getGhostParent;

    return options;
  }

  private getNgZone(clb) {
    this._ngZone.run(() => {
      clb();
    });
  }
}
