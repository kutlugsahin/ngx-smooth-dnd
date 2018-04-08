import { Component, OnInit, ViewChild } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import Pages from '../pages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = Pages;
  headerClass = {
    header: true
  }

  selectedPage = Pages[0].pages[0];

  selectPage(page) {
    this.selectedPage = page;
  }

  openCode() {
    window.open(this.selectedPage.url, '_blank');
  }
}
