import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ContainerComponent) container: ContainerComponent;
  items: any[];
  constructor() {
    this.items = [{ data: 'asdasda' }];
  }

  addItem() {
    this.items = [...this.items, {
      data: `Draggable ${this.items.length}`
    }];
  }

  resetList() {
    setTimeout(() => {
      this.items = applyDrag(this.items, {
        removedIndex: 1,
        addedIndex: 5
      });
    }, 100);
  }

  onDrop(event) {
    console.log('drop:' + event);
    this.items = applyDrag(this.items, event);
  }

  onDragStart(event) {
    console.log('drag start:' + event);
  }

  onDragEnter(event) {
    console.log('drag enter:' + event);

  }

  onDragLeave(event) {
    console.log('drag leave:' + event);    
  }

  getChildPayload(index) {
    console.log('child payload:' + index);
  }

}
