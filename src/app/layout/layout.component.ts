import { LayoutService } from './layout.service';
import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav/drawer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers:[LayoutService]
})
export class LayoutComponent implements OnInit {

  // drawer:boolean = true;

  @Input() inputData :boolean = false;

  @ViewChild('sidenav') public sidenav: MatDrawer;

  constructor(private layoutservice:LayoutService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.layoutservice.setSidenav(this.sidenav);
  }

  // toggleSideBar(event:boolean){
  //   this.drawer = event;
  // }
}
