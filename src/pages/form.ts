import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from './utils';

const formInitial = [
	{ type: 'header' },
	{ type: 'fullname', label: 'Full Name' },
	{ type: 'email', label: 'E Mail' },
	{ type: 'address', label: 'Address' },
	{ type: 'dropdown', label: 'Options' },
	{ type: 'checkbox', label: 'Checkbox Options' },
	{ type: 'radio', label: 'Radio Options' },
	{ type: 'submit' }
]

@Component({
	selector: 'app-form',
	template: `
		<div class="form-demo">
			<div class="form">
				<smooth-dnd-container 
					(drop)="onDrop($event)" 
					[nonDragAreaSelector]="'.field'"
					[dragClass]="'form-ghost'" 
					[dropClass]="'form-ghost-drop'"
				>            
					<smooth-dnd-draggable *ngFor="let field of form">
					<div
						class="form-line"
					>
            <div class="label">
              <span>{{field.label}}</span>
            </div>
						<div class="field" [ngSwitch]="field.type">
							<h2 *ngSwitchCase="'header'" class="field">
								Form Header
							</h2>
							<div *ngSwitchCase="'fullname'" class="field-group">
								<input type="text" /><input type="text" />
							</div>
							<div *ngSwitchCase="'email'" class="field">
								<input type="email" />
							</div>
							<div *ngSwitchCase="'address'" class="field">
								<textarea></textarea>
							</div>
							<div *ngSwitchCase="'dropdown'" class="field">
								<select>
									<option value="1">Option 1</option>	
									<option value="2" selected>Option 2</option>	
									<option value="3">Option 3</option>	
									<option value="4">Option 4</option>	
								</select>
							</div>
							<div *ngSwitchCase="'checkbox'" class="field">
								<div><label><input type="checkbox" name="r" /> option 1</label></div>
								<div><label><input type="checkbox" name="r" /> option 2</label></div>
								<div><label><input type="checkbox" name="r" /> option 3</label></div>
								<div><label><input type="checkbox" name="r" /> option 4</label></div>
								<div><label><input type="checkbox" name="r" /> option 5</label></div>
							</div>
							<div *ngSwitchCase="'radio'" class="field">
								<div><label><input type="radio" name="r" /> option 1</label></div>
								<div><label><input type="radio" name="r" /> option 2</label></div>
								<div><label><input type="radio" name="r" /> option 3</label></div>
								<div><label><input type="radio" name="r" /> option 4</label></div>
								<div><label><input type="radio" name="r" /> option 5</label></div>
							</div>
							<div *ngSwitchCase="'submit'" class="field">
								<button class="form-submit-button">Submit</button>
							</div>
            </div>
          </div>						
					</smooth-dnd-draggable>
				</smooth-dnd-container>
			</div>
		</div>
	`
})
export class FormComponent {
	items = generateItems(50, i => ({ data: 'Draggable ' + i }))
	form = [...formInitial];

	onDrop(dropResult) {
		this.form = applyDrag(this.form, dropResult);
	}
}
