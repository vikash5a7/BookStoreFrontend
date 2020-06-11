import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpserviceService } from './httpservice.service';
import { Observable, Subject } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private bookApiUrl = environment.BookUrl;
  private baseUrl = environment.BASE_URL;
  private httpOptions = {headers: new HttpHeaders({'content-type': 'application/json'})};
  // tslint:disable-next-line: variable-name
  private _autoRefresh$ = new Subject();

  get autoRefresh$() {
    return this._autoRefresh$;
  }

  constructor(private http: HttpClient, private httpService: HttpserviceService) { }

  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };

  post( arr: any): Observable<any> {
    console.log(arr, 'custmerdetails');
    return this.httpService.post(environment.CartUrl + environment.addUrl, arr, '');
  }

  addBook(book: any, imageName: string): Observable<any> {
    return this.httpService
      .post(`${environment.BookUrl}/${environment.addbooks}/${imageName}`, book, {headers: new HttpHeaders({token: localStorage.token})})
      .pipe(
        tap(() => {
          this._autoRefresh$.next();
        })
      );
  }

  addToCart(bookId: any): Observable<any> {
    return this.httpService
      .post(`${environment.BookUrl}/${environment.ADDCART}/${bookId}`, {}, {headers: new HttpHeaders({token: localStorage.token})})
      .pipe(
        tap(() => {
          this._autoRefresh$.next();
        })
      );
  }
  increaseBooksQuantity(quantity) {
    return this.httpService
    // tslint:disable-next-line: max-line-length
    .post(`${environment.BookUrl}/${environment.INC_BOOKS_QUANTITY}/${quantity}`, {}, {headers: new HttpHeaders({token: localStorage.token})})
    .pipe(
      tap(() => {
        this._autoRefresh$.next();
      })
    );
  }

  getCartBooksFrom() {
    // tslint:disable-next-line: max-line-length
    return this.httpService.get(`${this.baseUrl}/${environment.GET_BOOKS_FROM_CART}`, {headers: new HttpHeaders({token: localStorage.token})});
  }

  getCartItemCount(): Observable<any> {
    console.log('get itmes from cart');
    // tslint:disable-next-line: max-line-length
    return this.httpService.get(`${this.baseUrl}/${environment.COUNT_BOOKS_IN_CART}`, {headers: new HttpHeaders({token: localStorage.token})});
  }
  addtocart(bookId: any, userId): Observable<any> {
    console.log(bookId, userId, 'ssssssssss');

    return this.httpService.post(environment.CartUrl + environment.addtocart + '/' + bookId + '/' + userId, '', '');
  }

  getbookprice(bookId: any, quantity: any): Observable<any> {
    console.log(bookId, quantity, 'ssssssssss');
    return this.httpService.post(environment.CartUrl + environment.getbookprice + '/' + bookId + '/' + quantity, '', '');
  }

  addquantity(BookId: any, quantity: any): Observable<any> {
    return this.httpService.post(environment.quantity + environment.addbooksquantity + '/' + BookId + '/' + quantity, '', '');  }
}
