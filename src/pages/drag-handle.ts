import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from './utils';

@Component({
	selector: 'app-drag-handle',
	template: `
		<div>
			<div class="simple-page">
				<smooth-dnd-container [dragHandleSelector]="'.column-drag-handle'" (drop)="onDrop($event)">            
					<smooth-dnd-draggable *ngFor="let item of items">
						<div class="draggable-item">
						<span class="column-drag-handle" style="float:left; padding:0 10px;">&#x2630;</span>
							{{item.data}}
						</div>
					</smooth-dnd-draggable>
				</smooth-dnd-container>
			</div>
		</div>
	`
})
export class DragHandleComponent {
	items = generateItems(50, i => ({ data: 'Draggable ' + i }))

	onDrop(dropResult) {
		this.items = applyDrag(this.items, dropResult);
	}
}
