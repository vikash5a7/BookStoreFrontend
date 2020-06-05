import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  get autoRefresh$() {
    return this._autoRefresh$;
  }
  constructor(private http: HttpClient, ) { }
  private searchBookData = new Subject<any>();
  private baseUrl = environment.BASE_URL;
  private notesList = new Subject<any>();
  // tslint:disable-next-line: variable-name
  private _autoRefresh$ = new Subject();

  private token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6Mn0.8o-ywlTbsfkgpwm-S7SZA-G8GvqQdcWIsQ7Qt8VSRMUx_NaF8pdG7mrfJB6lTAlZG1B-Iq1W9OYaeT7C8mbpTg";


  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };

  private httpOptions = {headers: new HttpHeaders({'content-type': 'application/json',token: this.token})};

  public getAllApprovedBook(): Observable<any> {
    return this.http.get(`${this.baseUrl}/books/approvedBooks`);
  }

  getallBooks() {
    return this.http.get<any>(environment.BookUrl + environment.getallbooksurl);
  }

  setSearchBookData(message: any) {
    console.log('set service', message);
    return this.searchBookData.next({ books: message });
  }
  getSearchBookData(): Observable<any> {
    console.log('get service');
    return this.searchBookData.asObservable();
  }

  getBokkByid(Bookid: any): Observable<any> {
    return this.http.get(
      environment.BASE_URL + "book/bookdetails/" + Bookid,
      {}
    );
  }
  public getRateOfBookById(bookId: any) : Observable<any>{
    console.log("get rate  ",bookId);
    console.log( environment.BASE_URL + environment.avgrateofbook + bookId);
    
    return this.http.get(
      environment.BASE_URL + environment.avgrateofbook + bookId,
      {}
    );
  }

  public getBookById(bookId: any) : Observable<any>{
    console.log("writring review for bookid ",bookId);
    console.log( environment.BASE_URL + environment.getbookbyIdurl + bookId);
    
    return this.http.get(
      environment.BASE_URL + environment.getbookbyIdurl + bookId,
      {}
    );
  }
  getPagination(data) {
    return this.http.get<any>( environment.BookUrl + environment.cusUrl + '/' + data);
  }
  sorting(value): Observable<any> {
    console.log(value, 'value sorting');

    return this.http.get(environment.BookUrl + environment.sorting + '?value=' + value);
  }
  SortNewestArrival(): Observable<any> {
    console.log('sorting by new');
    return this.http.get<any>(environment.BookUrl + environment.SortNewestArrival);
  }

  public ratingandreview(bookId: Number, data: any){
    console.log("ratingandreview service method bookId :",bookId);
    console.log("ratingandreview service method rate& review dto :",data);
    console.log("url "+environment.BASE_URL+environment.WRITE_REVIEW+bookId);
    
    return this.http
      .put(environment.BASE_URL+environment.WRITE_REVIEW+bookId, data,this.httpOptions)
      .pipe(
        tap(() => {
          this.searchBookData.next();
        })
      );
  }

  public getratingandreview(bookId: number) {
    return this.http.get(environment.BASE_URL + environment.GET_REVIEWS + bookId, this.httpOptions);
  }

}
