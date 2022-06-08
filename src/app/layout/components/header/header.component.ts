import { LayoutService } from './../../layout.service';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MemberDialogComponent } from '../../member-dialog/member-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Output() toggleSideBarEvent = new EventEmitter<boolean>();

  // menuState: boolean = true;
  title: string ="My App";

  constructor(private layoutservice:LayoutService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    // this.menuState = !this.menuState;
    // this.toggleSideBarEvent.emit(this.menuState);

    this.layoutservice.toggle();

  }

  openDialog(): void {
  
    const dialogRef = this.dialog.open(MemberDialogComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result
    });
  }

}
