import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';
import * as pages from '../pages';


@NgModule({
  imports: [
    BrowserModule,
    NgxSmoothDnDModule
  ],
  declarations: [AppComponent,
    ...Object.keys(pages).filter(p => p !== 'default').map(p => pages[p])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
