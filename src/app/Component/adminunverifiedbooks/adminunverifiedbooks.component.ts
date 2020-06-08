import { Component, OnInit } from '@angular/core';
import { BookModule } from 'src/app/Model/book/book.module';
import { AdminService } from 'src/app/Service/admin.service';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-adminunverifiedbooks',
  templateUrl: './adminunverifiedbooks.component.html',
  styleUrls: ['./adminunverifiedbooks.component.scss']
})
export class AdminunverifiedbooksComponent implements OnInit {

  constructor(private adminService: AdminService , private snakbar: MatSnackBar) { }

  book = [];
  books = new Array<BookModule>();
  noteId = 1;

  ngOnInit(): void {
    this.getUnApprovedBooks();
    // this.dataSource.paginator = this.paginator;
    console.log('books ', this.books);
    this.adminService.autoRefresh.subscribe(() => {
      this.getUnApprovedBooks();
    });
  }

  getUnApprovedBooks() {
    console.log('method called');
    this.adminService.getUnverifiedBooks().subscribe(

      (response: any) => {
        console.log('response', response);
        console.log('books:', response.obj);
        this.books = response.obj;
        },
      (error: any) => {
        this.snakbar.open(error.error.message, 'failed', {duration: 5000});
      }
    );


  }

  approveBooks(bookId: number) {
    console.log('bookId from approve button:', bookId);
    this.adminService.approveBooks(bookId).subscribe(

      (response: any) => {
        console.log('response', response);
        this.snakbar.open('book is approved', 'success', {duration: 4000});

        },
      (error: any) => {
        this.snakbar.open(error.error.message, 'failed', {duration: 5000});
      }
    );


  }

rejectBooks(bookId: number) {
  console.log('bookId from reject button:', bookId);
  this.adminService.rejectBooks(bookId).subscribe(

      (response: any) => {
        console.log('response', response);
        console.log('notes:', response.obj);
        this.snakbar.open('book is rejected', 'success', {duration: 4000});

        },
      (error: any) => {
        this.snakbar.open(error.error.message, 'failed', {duration: 5000});
      }
    );
  }

}
