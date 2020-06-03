import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/token.service';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Service/book.service';
import {  MatSnackBar } from "@angular/material/snack-bar";

import {  MatDialog } from "@angular/material/dialog";
import { AddbookComponent } from '../../addbook/addbook.component';
import { UpdateBookComponent } from '../../update-book/update-book.component';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  name: string = null;
  books :any;
  constructor(private service: BookService ,private dialog: MatDialog,
    private matSnackBar: MatSnackBar,

  ) { }


  ngOnInit(): void {
    this.service.autoRefresh$.subscribe(() => {
      this.getallBooks();
    });
    this.getUserName();
    this.getallBooks();
  }

  getallBooks() {
    console.log('gett all book called');
    this.service.getallBooks().subscribe( response => {
      this.books = response.obj;
      console.log('All books ',this.books);
    });
   
  }

  deleteBook(bookId) {
    this.service.deleteBook(bookId).subscribe((message) => {
      if(message.statusCode===202)
      {
        this.matSnackBar.open("Book Deleted Successfully", "OK", {
          duration: 4000,
        });
    }else{
      this.matSnackBar.open("Error in Book Deletion", "ok", { duration: 4000 });
    }
    });
  }


  openImageDialog(bookId): void {
    // this.bookid = this.bookForm.controls["bookCode"].value;
    // const dialogRef = this.dialog.open(UploadBookimageComponent, {
    //   width: "auto",
    //   panelClass: "custom-dialog-container",
    //   data: { bookId },
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log("The dialog was closed");
    // });
  }

  editBook(book:any): void {
    const dialogRef = this.dialog.open(UpdateBookComponent, {
      width: "auto",
      height:"auto",
      panelClass: "custom-dialog-container",
      data: {
        bookName: book.bookName,
        authorName: book.authorName,
        price: book.price,
        noOfBooks: book.noOfBooks,
        bookDetails: book.bookDetails,
        bookId: book.bookId,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  addBook(){
    const dialogRef = this.dialog.open(AddbookComponent, {
      width: "auto",
      panelClass: "custom-dialog-container",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    }); 
  }
  status:string;
  verifyBook(bookId:any){
this.status="OnHold";
    this.service.verifyBook(bookId,this.status).subscribe((message) => {
      if(message.statusCode===202)
      {
        this.matSnackBar.open("Request sent Successfully", "OK", {
          duration: 4000,
        });
    }else{
      this.matSnackBar.open("Error in Book Deletion", "ok", { duration: 4000 });
    }
    });
  }

  getUserName() {
   this.name = localStorage.getItem('Name');
  }
}
