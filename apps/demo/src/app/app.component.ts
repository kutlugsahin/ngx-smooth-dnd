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
export class AppComponent implements OnInit {
  @ViewChild(ContainerComponent) container: ContainerComponent;
  items: any[];
  constructor() {
    this.items = [{data: 'asdasda'}];
  }

  ngOnInit() {
  }


  addItem() {
    this.items = [...this.items, {
      data: `Draggable ${this.items.length}`
    }];
  }

  onDrop(event) {
    this.items = applyDrag(this.items, event);
  }

}
