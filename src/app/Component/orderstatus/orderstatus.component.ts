import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/token.service';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Service/book.service';
import {  MatSnackBar } from '@angular/material/snack-bar';
import {FormControl, Validators} from '@angular/forms';
import {  MatDialog } from '@angular/material/dialog';
import { BookModule } from 'src/app/Model/book/book.module';
import { AdminService } from 'src/app/Service/admin.service';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.scss']
})
export class OrderstatusComponent implements OnInit {

  constructor(private service: BookService ,private adminservice:AdminService ,private dialog: MatDialog,
    private matSnackBar: MatSnackBar,

) { }
bookSearch: any;
name: string = null;
books: any;
status: string;
orderedBooks: any;

animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  
  selectedValue: string;
  foods: Food[] = [
    {value: 'option-0', viewValue: 'Order registration in progress'},
    {value: 'option-1', viewValue: 'Seller in progress to shipment to delivery'}
  ];


ngOnInit(): void {
this.service.autoRefresh$.subscribe(() => {
  // console.log("get all orderbooks called");
  // console.log("all orderbooks: "+this.getallUserOrderedBooks());
  
this.getallUserOrderedBooks();

this.getallOrderedBooks();
});
this.getallUserOrderedBooks();
this.getUserName();
this.getallOrderedBooks();
this.getSearchBookData();

}

getallOrderedBooks() {
console.log('gett all book called');
this.service.getallBooks().subscribe( response => {
this.books = response.obj;
// console.log('All books ', this.books);
});

}
getallUserOrderedBooks() {
  console.log('gett all book called');
  this.adminservice.getAllOrderedBooks().subscribe( response => {
  this.orderedBooks = response.obj;
  console.log('All odered Books  ', this.orderedBooks);
  });
  
  }

deleteBook(bookId) {
this.service.deleteBook(bookId).subscribe((message) => {
if (message.statusCode === 202) {
this.matSnackBar.open('Book Deleted Successfully', 'OK', {
duration: 4000,
});
} else {
this.matSnackBar.open('Error in Book Deletion', 'ok', { duration: 4000 });
}
});
}


openImageDialog(bookId): void {
// const dialogRef = this.dialog.open(UploadBookImageComponent, {
// width: '25rem',
// panelClass: 'custom-dialog-container',
// data: { bookId },
// });
// dialogRef.afterClosed().subscribe((result) => {
// console.log('The dialog was closed');
// });
}

editBook(book: any): void {
// const dialogRef = this.dialog.open(UpdateBookComponent, {
// width: '25rem',
// height: 'auto',
// panelClass: 'custom-dialog-container',
// data: {
// bookName: book.bookName,
// authorName: book.authorName,
// price: book.price,
// noOfBooks: book.noOfBooks,
// bookDetails: book.bookDetails,
// bookId: book.bookId,
// },
// });
// dialogRef.afterClosed().subscribe((result) => {
// console.log('The dialog was closed');
// });
}

addBook() {
// const dialogRef = this.dialog.open(AddbookComponent, {
// width: '25rem',
// panelClass: 'custom-dialog-container',
// });
// dialogRef.afterClosed().subscribe((result) => {
// console.log('The dialog was closed');
// });
}
verifyBook(bookId: any) {
this.status = 'OnHold';
this.service.verifyBook(bookId, this.status).subscribe((message) => {
if (message.statusCode === 202) {
this.matSnackBar.open('Request sent Successfully', 'OK', {
duration: 4000,
});
} else {
this.matSnackBar.open('Error in Book Deletion', 'ok', { duration: 4000 });
}
});
}

getUserName() {
this.name = localStorage.getItem('Name');
}

getSearchBookData() {
this.service.getSearchBookData().subscribe((message) => {
console.log('search data', message.books);
this.bookSearch = message.books;
});
}

  
}
