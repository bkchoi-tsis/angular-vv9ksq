import { LayoutService } from './layout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers:[LayoutService]
})
export class LayoutComponent implements OnInit {

  // drawer:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  // toggleSideBar(event:boolean){
  //   this.drawer = event;
  // }
}
