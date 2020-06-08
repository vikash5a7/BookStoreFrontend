import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from 'src/app/Service/book.service';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { BookModule } from 'src/app/Model/book/book.module';
import { PageEvent } from '@angular/material/paginator';
import {Router} from '@angular/router';
@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent implements OnInit {
  bookSearch: any;
  selectedValue = 'relevance';
  orderBy = 'asc';
  boo: any;
  bookList = Array<any>();
  book: BookModule = new BookModule();
  items = [];
  pageofItems: Array<BookModule> = new Array<BookModule>();
  obj: BookModule[];
  size: number;
  // tslint:disable-next-line: variable-name
  book_id: number;
  bookName: string;
  page = 0;
  length: any = sessionStorage.length;
  pageEvent: PageEvent;
  lengths = 0;
  CurrentPageNo: 0;
  totalPage: Array<number>;

  s: any; selectoption: any;
  value: any = [];
  @Output() output: EventEmitter<any> = new EventEmitter();
  leng: any;
  constructor( private service: BookService,
               private matSnackBar: MatSnackBar,
               private route: Router) { }

  ngOnInit() {
    this.getallApprovedBooks();
    this.getSearchBookData();
    this.leng = sessionStorage.length;
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      this.value[sessionStorage.getItem(key)] = sessionStorage.getItem(key);
      console.log('key ::' + key);
    }
    console.log(this.value);
  }

  onChange(deviceValue) {
    this.selectedValue = deviceValue;
    console.log(' this is tha value of drope down ' + deviceValue);
    switch (this.selectedValue) {
      case 'mod1':
         console.log('vikash kumar1');
         this.approvedBookServiceMethod(this.page, 'price', 'des');
         console.log('Books are from 1  ', this.bookList);
         break;
      case 'mod2':
        this.approvedBookServiceMethod(this.page, 'price', 'asc');
        console.log('Books are from 2  ', this.bookList);
        break;
      case 'mod3':
        this.approvedBookServiceMethod(this.page, 'created_date_and_time', 'asc');
        console.log('Books are from 3  ', this.bookList);
        break;
    }
}

  getallApprovedBooks() {
    this.approvedBookServiceMethod(this.page, 'book_id', 'asc');
  }

  approvedBookServiceMethod(page ?: number, order?: string, sortby?: string) {
    this.service.getAllApprovedBookByPage(page, order, sortby).subscribe((response: any) => {
      console.log(response);
      console.log('Books are the' + response.obj);
      this.bookList = response.obj.content;
      this.size = response.obj.totalElements;
      this.CurrentPageNo = response.obj.pageable.pageNumber;
      this.totalPage = new Array(response.obj.totalPages);
      console.log('Total pages is: ' + this.totalPage);
      console.log('total books are ' + this.size);
      console.log('curret page number is ' + this.CurrentPageNo);
      console.log('Books are  ', this.bookList);
    });
  }
getSearchBookData() {
    this.service.getSearchBookData().subscribe((message) => {
      console.log('search data', message.books);
      this.bookSearch = message.books;
    });
  }


  SetPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    console.log('page number you want is' + i);
    this.getallApprovedBooks();
  }

   previos(event: any) {
    event.preventDefault();
    this.page = this.page - 1;
    console.log('current page from previous' + 'next' + this.page);
    this.getallApprovedBooks();
   }
   next(event: any) {
    event.preventDefault();
    this.page = this.page + 1;
    console.log('current page from next ' + 'next' + this.page);
    this.getallApprovedBooks();
   }

  addtobag( bookId: any) {
  if (localStorage.getItem('token') === null) {
    this.matSnackBar.open('Please Login first', 'ok', {
      duration: 5000
    });
    sessionStorage.setItem(bookId, bookId);
    this.route.navigateByUrl('login');
  }
  sessionStorage.setItem(bookId, bookId);
  this.getOutput();
  this.ngOnInit();
}

getOutput() {
  }

  getUpdatedNotes(event) {
    this.ngOnInit();
    }
}

  