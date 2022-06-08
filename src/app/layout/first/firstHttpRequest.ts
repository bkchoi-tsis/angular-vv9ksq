import {HttpClient} from '@angular/common/http';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import { Member } from './first.component';

export class FirstHttpRequest {
    static getAllUsers: any;

    constructor(private _httpClient: HttpClient) {}
  
    getAllUsers(sort: string, order: SortDirection, page: number): Observable<Member> {
        const href = 'http://localhost:8080/api/v1/users';
        const requestUrl =`${href}?page=${page+1}`
    //   const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${
    //     page + 1
    //   }`;
      return this._httpClient.get<Member>(requestUrl);
    }
  }