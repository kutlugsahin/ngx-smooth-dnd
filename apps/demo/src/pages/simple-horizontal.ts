import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from './utils';

@Component({
	selector: 'app-simple-horizontal',
	template: `
		<div>
			<div [ngStyle]="{'margin': '50px','overflowX': 'auto'}">
				<smooth-dnd-container [orientation]="'horizontal'" (drop)="onDrop($event)">            
					<smooth-dnd-draggable *ngFor="let item of items">
						<div class="draggable-item-horizontal">
							{{item.data}}
						</div>
					</smooth-dnd-draggable>
				</smooth-dnd-container>
			</div>
		</div>
	`
})
export class SimpleHorizontalComponent{
	items = generateItems(15, i => ({ data: 'Draggable ' + i }))

	onDrop(dropResult) {
		this.items = applyDrag(this.items, dropResult);
	}
}
