import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { HttpserviceService } from './httpservice.service';
import { BookModule } from '../Model/book/book.module';
import { tap, map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _autoRefresh$ = new Subject();
  private searchBookData = new Subject<any>();
  private bookApiUrl = environment.BookUrl;
  private httpOptions = {headers: new HttpHeaders({'content-type': 'application/json'})};

  get autoRefresh$() {
    return this._autoRefresh$;
  }

  constructor(private http: HttpClient, private httpService: HttpserviceService) { }


  getallBooks() {
    //  return this.http.get<any>(environment.BookUrl + environment.getallbooksurl);
   
    return this.httpService.get(`${environment.BookUrl}/${environment.getallbooksurl}`,{headers:new HttpHeaders({'token':localStorage.token})});  
  }

  addBook(book: any): Observable<any> {
    console.log('url ',`${environment.BookUrl}/${environment.addbooks}`);
    console.log('data ',book);
    
    return this.httpService
      .post(`${environment.BookUrl}/${environment.addbooks}`, book, {headers:new HttpHeaders({'token':localStorage.token})})
      .pipe(
        tap(() => {
          this._autoRefresh$.next();
        })
      );
  }

  deleteBook(bookId:any):Observable<any>{
    return this.httpService
      .delete(`${environment.BookUrl}/${environment.deleteBook}/${bookId}`, {headers:new HttpHeaders({'token':localStorage.token})})
      .pipe(
        tap(() => {
          this._autoRefresh$.next();
        })
      );
  }

  updateBook(bookId:any,book:any):Observable<any>{
    return this.httpService
    .put(`${environment.BookUrl}/${environment.editBook}/${bookId}`,book, {headers:new HttpHeaders({'token':localStorage.token})})
    .pipe(
      tap(() => {
        this._autoRefresh$.next();
      })
    );
  }

  verifyBook(bookId:any,status:any):Observable<any>{
    console.log('url ',`${environment.BookUrl}/${environment.verifyBook}/${bookId}/${status}`);
    
    return this.httpService
      .put(`${environment.BookUrl}/${environment.verifyBook}/${bookId}/${status}`, " ",{headers:new HttpHeaders({'token':localStorage.token})})
      .pipe(
        tap(() => {
          this._autoRefresh$.next();
        })
      );
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
    console.log(Bookid, 'hhhhbookid');

    return this.httpService.get(this.bookApiUrl + environment.getbookbyIdurl + '/' + Bookid, this.httpOptions);
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

}
