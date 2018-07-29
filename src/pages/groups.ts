import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from './utils';

@Component({
	selector: 'app-groups',
	template: `
		<div [ngStyle]="{ 'display': 'flex', 'justifyContent': 'stretch', 'marginTop': '50px', 'marginRight': '50px' }">
			<div [ngStyle]="{'marginLeft': '50px', 'flex': '1'}">
				<smooth-dnd-container [groupName]="'1'" [getChildPayload]="getChildPayload1" (drop)="onDrop('items1', $event)">            
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
			<div [ngStyle]="{'marginLeft': '50px', 'flex': '1'}">
				<smooth-dnd-container [groupName]="'1'" [getChildPayload]="getChildPayload4" (drop)="onDrop('items4', $event)">            
					<smooth-dnd-draggable *ngFor="let item of items4">
						<div class="draggable-item">
							{{item.data}}
						</div>
					</smooth-dnd-draggable>
				</smooth-dnd-container>
			</div>
		</div>
	`
})
export class GroupsComponent {
	items1 = generateItems(15, (i) => ({ id: '1' + i, data: `Draggable 1 - ${i}` }));
	items2 = generateItems(15, (i) => ({ id: '2' + i, data: `Draggable 2 - ${i}` }));
	items3 = generateItems(15, (i) => ({ id: '3' + i, data: `Draggable 3 - ${i}` }));
	items4 = generateItems(15, (i) => ({ id: '4' + i, data: `Draggable 4 - ${i}` }));

	constructor() {
		this.getChildPayload1 = this.getChildPayload1.bind(this);
		this.getChildPayload2 = this.getChildPayload2.bind(this);
		this.getChildPayload3 = this.getChildPayload3.bind(this);
		this.getChildPayload4 = this.getChildPayload4.bind(this);
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
	getChildPayload4(index) {
		return this.items4[index];
	}
}
