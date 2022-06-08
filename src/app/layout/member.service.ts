import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { Member, regMember } from './first/first.component';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = "http://localhost:8080/api/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      // ,'Authorization': 'ddd'
    })
  };

  constructor(private http:HttpClient) { }

  getMemberList(page: number): Observable<Member>{

    let requestUrl = `${this.baseUrl}v1/users?page=${page+1}`

    return this.http.get<any>(requestUrl,this.httpOptions)
  }

  createMember(reg:regMember){

    console.log(reg)
    
    let requestUrl = `${this.baseUrl}v1/users`
    return this.http.post<regMember>(requestUrl,reg,this.httpOptions)
  }

}