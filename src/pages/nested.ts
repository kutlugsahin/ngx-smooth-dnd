import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from './utils';

@Component({
	selector: 'app-nested',
	template: `
		<div>
			<div class="simple-page">
				<smooth-dnd-container (drop)="onDrop($event)">
					<smooth-dnd-draggable *ngFor="let item of items">
						<div *ngIf="item.type == 'draggable'" class="draggable-item">
							{{item.data}}
						</div>
						<div *ngIf="item.type == 'container'">
							<div [ngStyle]="innerContainerStyle">
                <h4>Sortable List</h4>
                <div style="{ 'cursor': 'default' }">
                  <smooth-dnd-container (drop)="onInnerDrop(item, $event)">
                    <smooth-dnd-draggable *ngFor="let q of item.items">
                          <div class="draggable-item">
                            {{q.data}}
                          </div>
                      </smooth-dnd-draggable>
                  </smooth-dnd-container>
                </div>
              </div>
						</div>
					</smooth-dnd-draggable>
				</smooth-dnd-container>
			</div>
		</div>
	`
})
export class NestedComponent {
	items = generateItems(30, (i) => ({
		id: i, type: 'draggable', data: `Container 1 Draggable - ${i}`
	}));

	items2 = generateItems(5, (i) => ({
		id: i, type: 'draggable', data: `Container 2 Draggable - ${i}`
	}));

	items3 = generateItems(4, (i) => ({
		id: i, type: 'draggable', data: `Container 3 Draggable - ${i}`
	}));

	constructor() {
		this.items[5] = {
			id: 5, type: 'container', items: this.items2
		};

		this.items[9] = {
			id: 9, type: 'container', items: this.items3
		};
	}

	innerContainerStyle = {
		padding: '20px 20px',
		marginTop: '2px',
		marginBottom: '2px',
		border: '1px solid rgba(0,0,0,.125)',
		backgroundColor: '#f4f5f9aa',
		cursor: 'move'
	};

	onDrop(dropResult) {
		this.items = applyDrag(this.items, dropResult);
	}

	onInnerDrop(item, dropResult) {
		const newItems = [...this.items];
		const index = newItems.indexOf(item);
		newItems[index].items = applyDrag(newItems[index].items, dropResult);
		this.items = newItems;
	}
}


