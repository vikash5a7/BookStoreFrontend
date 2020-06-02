import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { HttpserviceService } from './httpservice.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient,private httpService:HttpserviceService) { }

  private adminUrl = environment.adminUrl;
  private approveBook = environment.approveBook;
  private rejectBook = environment.rejectBook;
  private unVerifiedBooks = environment.unVerifiedBooks;
  private rejectedBooks = environment.rejectedBooks;
  private approvedBooks = environment.approvedBooks;
  private token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6MX0.0rHyLThGA_06cwyfLSZpIGV90ZVbNKiejUB671MRnetaeFeOpivTFe9yOrQBC_3QtNWHHjEAnasHi-ADPnR7OQ";

  private subject = new Subject<any>();
  public get autoRefresh() {
    return this.subject;
  }

  private httpOptions={
    headers: new HttpHeaders ({'content-type':'application/json' ,token: this.token})
    };



    getUnverifiedBooks(){

      return this.httpService.get(this.adminUrl+this.unVerifiedBooks,this.httpOptions);
    }

    getRejectedBooks(){

      return this.httpService.get(this.adminUrl+this.rejectedBooks,this.httpOptions);
    }

    getApprovedBooks(){

      return this.httpService.get(this.adminUrl+this.approvedBooks,this.httpOptions);
    }

    approveBooks(noteId:number):Observable<any>{

      return this.httpService.put(this.adminUrl+this.approveBook+noteId,"",this.httpOptions).pipe(tap(()=>{ this.subject.next();}));
    }

    rejectBooks(noteId:number):Observable<any>{

      return this.httpService.put(this.adminUrl+this.rejectBook+noteId,"",this.httpOptions).pipe(tap(()=>{ this.subject.next();}));
    }
}
