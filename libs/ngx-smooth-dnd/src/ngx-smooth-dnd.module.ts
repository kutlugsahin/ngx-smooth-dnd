import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { DraggableComponent } from './draggable/draggable.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContainerComponent, DraggableComponent],
  exports: [ContainerComponent, DraggableComponent]
})
export class NgxSmoothDnDModule {}
