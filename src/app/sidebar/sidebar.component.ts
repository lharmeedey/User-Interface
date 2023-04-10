import { style } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideBarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() {}
  @Output() onToggleSidebar: EventEmitter<SideBarToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0
  navData = navbarData;

  // @HoistListener('window:resize', {$event})
  // onResize(event: any){
  //   this.screenWidth = window.innerWidth;
  //   if(this.screenWidth <= 768){
  //     this.collapsed = false;
  //     this.onToggleSidebar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  //   }
  // }

  ngOnInit(): void{
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidebar.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  // closeSidenav(): void {
  //   this.collapsed = false;
  // }

}
