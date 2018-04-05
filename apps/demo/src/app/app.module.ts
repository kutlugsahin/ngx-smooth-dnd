import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import {NgxSmoothDnDModule} from 'ngx-smooth-dnd';

@NgModule({
  imports: [
    BrowserModule,
    NgxSmoothDnDModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
