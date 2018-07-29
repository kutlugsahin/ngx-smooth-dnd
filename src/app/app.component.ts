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
  isNavOpen = true;  

  navigatorClass = `navigator${this.isNavOpen ? ' open' : ' closed'}`;
  navButtonClass = `nav-button${this.isNavOpen ? ' open' : ' closed'}`;
  headerClass = `header${this.isNavOpen ? ' open' : ' closed'}`;

  selectedPage = Pages[0].pages[0];

  selectPage(page) {
    this.selectedPage = page;
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    this.navigatorClass = `navigator${this.isNavOpen ? ' open' : ' closed'}`;
    this.navButtonClass = `nav-button${this.isNavOpen ? ' open' : ' closed'}`;
    this.headerClass = `header${this.isNavOpen ? ' open' : ' closed'}`;
  }

  openCode() {
    window.open(this.selectedPage.url, '_blank');
  }
}
