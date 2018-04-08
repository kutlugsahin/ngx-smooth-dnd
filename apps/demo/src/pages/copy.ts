import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from './utils';

@Component({
	selector: 'app-copy',
	template: `
		<div [ngStyle]="{ 'display': 'flex', 'justifyContent': 'stretch', 'marginTop': '50px', 'marginRight': '50px' }">
			<div [ngStyle]="{'marginLeft': '50px', 'flex': '1'}">
				<smooth-dnd-container [behaviour]="'copy'" [groupName]="'1'" [getChildPayload]="getChildPayload1">            
					<smooth-dnd-draggable *ngFor="let item of items1">
						<div class="draggable-item">
							{{item.data}}
						</div>
					</smooth-dnd-draggable>
				</smooth-dnd-container>
			</div>
			<div [ngStyle]="{'marginLeft': '50px', 'flex': '1'}">
				<smooth-dnd-container [groupName]="'1'" [getChildPayload]="getChildPayload2" (drop)="onDrop('items2', $event)">            
					<smooth-dnd-draggable *ngFor="let item of items2">
						<div class="draggable-item">
							{{item.data}}
						</div>
					</smooth-dnd-draggable>
				</smooth-dnd-container>
			</div>
			<div [ngStyle]="{'marginLeft': '50px', 'flex': '1'}">
				<smooth-dnd-container [groupName]="'1'" [getChildPayload]="getChildPayload3" (drop)="onDrop('items3', $event)">            
					<smooth-dnd-draggable *ngFor="let item of items3">
						<div class="draggable-item">
							{{item.data}}
						</div>
					</smooth-dnd-draggable>
				</smooth-dnd-container>
			</div>			
		</div>
	`
})
export class CopyComponent {
	items1 = generateItems(15, (i) => ({ id: '1' + i, data: `Source Draggable - ${i}` }));
	items2 = generateItems(15, (i) => ({ id: '2' + i, data: `Draggable 2 - ${i}` }));
	items3 = generateItems(15, (i) => ({ id: '3' + i, data: `Draggable 3 - ${i}` }));

	constructor() {
		this.getChildPayload1 = this.getChildPayload1.bind(this);
		this.getChildPayload2 = this.getChildPayload2.bind(this);
		this.getChildPayload3 = this.getChildPayload3.bind(this);
	}

	onDrop(collection, dropResult) {
		this[collection] = applyDrag(this[collection], dropResult);
	}

	getChildPayload1(index) {
		return this.items1[index];
	}
	getChildPayload2(index) {
		return this.items2[index];
	}
	getChildPayload3(index) {
		return this.items3[index];
	}
}
