import { Component } from '@angular/core';

interface SideBarToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'User-Interface';

  screenWidth = 0;
  isSideBarCollapsed = false

  onToggleSideBar(data: SideBarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideBarCollapsed = data.collapsed
  }
}
