import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';

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

  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };

  private httpOptions = {headers: new HttpHeaders({'content-type': 'application/json'})};

  public getAllApprovedBook(): Observable<any> {
    return this.http.get(`${this.baseUrl}/books/approvedBooks`, {
      headers : new HttpHeaders().set('token', localStorage.getItem('token'))
    });
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
    console.log(Bookid, 'hhhhbookid');
    return null;
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
