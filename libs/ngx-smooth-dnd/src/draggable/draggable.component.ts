import { Component, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
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
  selector: 'draggable',
  templateUrl: './draggable.component.html',
})
export class DraggableComponent {
  classList = Object.assign({}, constantClasses);
}
