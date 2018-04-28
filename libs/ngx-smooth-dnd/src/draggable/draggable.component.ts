import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
  selector: 'smooth-dnd-draggable',
  templateUrl: './draggable.component.html'
})
export class DraggableComponent implements AfterViewInit {
  @ViewChild('draggableWrapper') wrapper: ElementRef;
  ngAfterViewInit() {
    this.wrapper.nativeElement.parentNode.className = constants.wrapperClass;
  }
}
