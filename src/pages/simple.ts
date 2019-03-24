import { Component } from '@angular/core';
import { ContainerComponent, DraggableComponent, DropResult } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from './utils';

@Component({
  selector: 'app-simple',
  template: `
    <div>
      <div class="simple-page">
        <smooth-dnd-container (drop)="onDrop($event)">            
          <smooth-dnd-draggable *ngFor="let item of items">
            <div class="draggable-item">
              {{item.data}}
            </div>
          </smooth-dnd-draggable>
        </smooth-dnd-container>
      </div>
    </div>
  `
})
export class SimpleComponent {
  items = generateItems(50, i => ({ data: 'Draggable ' + i }))
  onDrop(dropResult: DropResult) {
    this.items = applyDrag(this.items, dropResult);
  }
}
