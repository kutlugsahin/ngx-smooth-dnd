import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from './utils';

@Component({
	selector: 'app-transition-duration',
	template: `
		<div>
			<div class="simple-page">
				<smooth-dnd-container [animationDuration]="500" (drop)="onDrop($event)">            
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
export class TransitionDurationComponent {
	items = generateItems(50, i => ({ data: 'Draggable ' + i }))

	onDrop(dropResult) {
		this.items = applyDrag(this.items, dropResult);
	}
}
