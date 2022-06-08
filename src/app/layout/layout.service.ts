import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav/drawer';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private sidenav: MatDrawer;

  constructor() { }

  setSidenav(sidenav: MatDrawer) {
    this.sidenav = sidenav;
  }

  toggle(): void {
    this.sidenav.toggle();
  }
}
