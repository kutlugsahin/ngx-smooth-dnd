import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from './utils';

@Component({
	selector: 'app-simple-scroller',
	template: `
		<div>
			<div class="simple-page-scroller">
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
export class SimpleScrollerComponent {
	items = generateItems(50, i => ({ data: 'Draggable ' + i }))

	onDrop(dropResult) {
		this.items = applyDrag(this.items, dropResult);
	}
}
