import { Component, Input, OnChanges, SimpleChanges, Output, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { constants } from 'smooth-dnd';
const {
  wrapperClass,
  animationClass
} = constants;

const constantClasses = {
  [wrapperClass]: true,
  [animationClass]: true,
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[draggable]',
  templateUrl: './draggable.component.html'
})
export class DraggableComponent implements AfterViewInit {
  @ViewChild('draggableWrapper') wrapper: ElementRef;
  classList = `${wrapperClass} ${animationClass}`

  ngAfterViewInit() {
    this.wrapper.nativeElement.parentElement.className = 'smooth-dnd-draggable-wrapper';
  }
}
