import { Component, OnInit } from '@angular/core';
import { BookModule } from 'src/app/Model/book/book.module';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpserviceService} from '../../../Service/httpservice.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books:Array<BookModule>;
  booksRecieved: Array<BookModule>;
  selectedBook: BookModule;
  action: string;

  constructor(private httpClientService: HttpserviceService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(){
    this.refreshData();
  }
    refreshData() {
      this.httpClientService.getBooks().subscribe(
        response => this.handleSuccessfulResponse(response)
      );
   
      this.activedRoute.queryParams.subscribe(
        (params) => {
          // get the url parameter named action. this can either be add or view.
          this.action = params['action'];
    // get the parameter id. this will be the id of the book whose details 
    // are to be displayed when action is view.
    const id = params['id'];
    // if id exists, convert it to integer and then retrive the book from
    // the books array
          if (id) {
            this.selectedBook = this.books.find(book => {
              return book.bookId === +id;
            });
          }
        }
      );
    }
  
    // we will be taking the books response returned from the database
    // and we will be adding the retrieved   
    handleSuccessfulResponse(response) {
      this.books = new Array<BookModule>();
      //get books returned by the api call
      this.booksRecieved = response;
      for (const book of this.booksRecieved) {
      
        const bookwithImageField = new BookModule();
        bookwithImageField.bookId= book.bookId;
        bookwithImageField.bookName = book.bookName;
        //populate retrieved image field so that book image can be displayed
        bookwithImageField.image = 'data:image/jpeg;base64,' + book.picByte;
        bookwithImageField.authorName = book.authorName;
        bookwithImageField.price = book.price;
        bookwithImageField.picByte=book.picByte;
        this.books.push(bookwithImageField);
      }
    }
  
  
  addBook() {
    this.selectedBook = new BookModule();
    this.router.navigate(['seller', 'books'], { queryParams: { action: 'add' } });
  }
  viewBook(id: number) {
    this.router.navigate(['seller', 'books'], { queryParams: { id, action: 'view' } });
  }
}
    // this.books=new Array<BookModule>();
    // const book1 = new BookModule();
    // book1.bookId = 1;
    // book1.bookName = 'book1';
    // book1.authorName = 'author1';
    // book1.price = 5;

    // const book2 = new BookModule();
    // book2.bookId = 2;
    // book2.bookName = 'book2';
    // book2.authorName = 'author2';
    // book2.price = 15;

    // this.books.push(book1);
    // this.books.push(book2);



