import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {  MatDialog, MatDialogRef } from "@angular/material/dialog";
import {   MatSnackBar } from "@angular/material/snack-bar";
import { BookService } from 'src/app/Service/book.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {
  bookForm: FormGroup;
  bookid;
  constructor( private matSnackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddbookComponent>) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      bookName: ["", [Validators.required]],
      authorName: ["", Validators.required],
      price: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      noOfBooks: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      bookDetails: ["", [Validators.required]]
    });
  }
    onClickaddBook() {
      this.bookService.addBook(this.bookForm.value).subscribe(
        (user) => {
          this.matSnackBar.open("Book Added SuccessFully", "ok", {
            duration: 4000,
          });
          this.dialogRef.close(1);
        },
        (error: any) => {
          this.matSnackBar.open(error.error, "ok", { duration: 4000 });
          console.log(error);
        }
      );
      if (this.bookForm.invalid) {
        return;
      }
    }
  

}
