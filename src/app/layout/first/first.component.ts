import { MemberService } from './../member.service';
import { FirstHttpRequest } from './firstHttpRequest';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MemberDialogComponent } from '../member-dialog/member-dialog.component';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  exampleDatabase: FirstHttpRequest;
  memberData: Members[] = [];

  resultsLength = 0;
  pageLength = 20;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private _httpClient: HttpClient,private memberservice: MemberService) {}

  ngOnInit(): void {
    
  }

  dpColums: string[] = ['fullname', 'username', 'email'];

  ngAfterViewInit() {
    this.exampleDatabase = new FirstHttpRequest(this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getAllUsers(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
          ).pipe(catchError(() => observableOf(null)));
        }),
        map(data => {

          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          this.resultsLength = data.pageMetadataResponse.totalElements;
          this.pageLength = data.pageMetadataResponse.currentSize;
          return data.memberList; 
        }),
      )
      .subscribe(data => (this.memberData = data));
  }

  getMemberList(page:number){
    this.memberservice.getMemberList(page).subscribe( (data:Member) => {
      data.memberList.forEach((v,i)=>{
        console.log(i, ' => ',v)
      })
    });
  }

}

export interface Member{
  memberList: Members[];
  pageMetadataResponse: {
    currentPage: number;
    currentSize: number;
    totalPage: number,
    totalElements: number
  }
}

export interface Members {
  fullName:string;
  userName:string;
  email:string;
}

export class regMember {
  fullName:string;
  userName:string;
  email:string;
  password:string;

  constructor(init?: Partial<regMember>){
    Object.assign(this, init)
  }
}

function data(data: any, arg1: (Member: any) => void) {
  throw new Error('Function not implemented.');
}
