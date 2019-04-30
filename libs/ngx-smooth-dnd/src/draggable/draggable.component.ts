import {Component, ViewChild, ElementRef, AfterViewInit, Renderer2} from '@angular/core';
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
  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
  ) {
  }
  ngAfterViewInit() {
    this.renderer.addClass(this.elRef.nativeElement, constants.wrapperClass);
  }
}
