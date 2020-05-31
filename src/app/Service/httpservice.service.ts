import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModule } from '../Model/book/book.module';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  
  constructor(private http:HttpClient) { }
  public post(url :any,data: any,head:any):any{
    return this.http.post(url,data,head);
  }
  public put(url:any,data:any,head:any):any{
    return this.http.put(url,data,head);
  }

  public delete(url:any, options: any):Observable<any>{
    return this.http.delete(url,options);
  }

  
  public get(url: any, options: any): Observable<any> {
    return this.http.get(url, options);
  }
  public getRequest(url :any):any{
    return this.http.get(url);
  }
  public getBooks() {
    return this.http.get<BookModule[]>('http://localhost:8080/books');
  }
  public addBook(newBook: BookModule) {
    return this.http.post<BookModule>('http://localhost:8080/books/addbook', newBook);
  }
 public deleteBook(bookId) {
    return this.http.delete<BookModule>('http://localhost:8080/books/deletebook' + bookId);
  }
  public updateBook(updatedBook: BookModule) {
    return this.http.put<BookModule>('http://localhost:8080/books/editbook', updatedBook);
  }
}
