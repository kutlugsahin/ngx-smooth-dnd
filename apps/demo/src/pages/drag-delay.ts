import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from './utils';

@Component({
	selector: 'app-drag-delay',
	template: `
		<div>
			<div class="simple-page">
				<smooth-dnd-container [dragBeginDelay]="500" [dragClass]="'form-ghost'" [dropClass]="'form-ghost-drop'" (drop)="onDrop($event)">            
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
export class DragDelayComponent {
	items = generateItems(50, i => ({ data: 'Draggable ' + i }))

	onDrop(dropResult) {
		this.items = applyDrag(this.items, dropResult);
	}
}
