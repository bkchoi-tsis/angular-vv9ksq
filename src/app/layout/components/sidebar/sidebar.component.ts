import { LayoutService } from './../../layout.service';
import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav/drawer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() inputData :boolean = false;

  @ViewChild('sidenav') public sidenav: MatDrawer;

  // isShowing: boolean =false;

  menuList: string[] = ['Side Menu1', 'Side Menu2', 'Side Menu3', 'Side Menu4', 'Side Menu5'];

  constructor(private layoutservice:LayoutService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.layoutservice.setSidenav(this.sidenav);
  }

  // ngOnChanges(changes: SimpleChanges){

  //   if(!changes["inputData"].isFirstChange()){
  //     // this.isShowing = !changes["inputData"].currentValue;

  //   }

  // }

}
