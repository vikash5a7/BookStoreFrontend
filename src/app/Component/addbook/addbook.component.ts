import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {  MatDialog, MatDialogRef } from "@angular/material/dialog";
import {   MatSnackBar } from "@angular/material/snack-bar";
import { BookService } from 'src/app/Service/book.service';
import {FormControl} from '@angular/forms'
import {BookModule} from '../../Model/book/book.module'
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})

export class AddbookComponent implements OnInit {
  bookForm: FormGroup;
  bookid;
  addbooks: BookModule = new BookModule();


  bookName = new FormControl(this.addbooks.bookName, [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern("[a-zA-Z ]*"),
  ]);
  authorName = new FormControl(this.addbooks.authorName, [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern("[a-zA-Z ]*"),
  ]);
  price = new FormControl(this.addbooks.price, [
    Validators.required,
    Validators.minLength(1),
    Validators.pattern("[0-9 ]*"),
  ]);
  noOfBooks = new FormControl(this.addbooks.noOfBooks, [
    Validators.required,
    Validators.minLength(1),
    Validators.pattern("[0-9]*"),
  ]);
  bookDetails = new FormControl(this.addbooks.bookDetails, [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern("[a-zA-Z ]*"),
  ]);
  constructor( private matSnackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddbookComponent>) { }
    private imageFile:string;
  ngOnInit():void{
     this.bookForm = this.formBuilder.group({
      bookName: ["", [Validators.required]],
     authorName: ["", Validators.required],
     price: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
     noOfBooks: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    bookDetails: ["", [Validators.required]]
   });
  }
  bookNameValidation() {
    return this.bookName.hasError("required") ? "must required" : "";
  }
  authorNameValidation() {
    return this.authorName.hasError("required")
      ? "must required"
      : this.authorName.hasError("authorName")
      ? "Not a valid authorName"
      : "";
  }
  priceValidation() {
    return this.price.hasError("required") ? "must required" : "";
  }
  noOfBooksValidation() {
    return this.noOfBooks.hasError("required") ? "must required" : "";
  }
  bookDetailsValidation() {
    return this.bookDetails.hasError("required") ? "must required" : "";
  }



  onSelectedImage(event) {
    if (event.target.files.length > 0) {
      const image=event.target.files[0];
      this.imageFile =image.name; 
    }
  }
    onClickaddBook() {
      this.bookService.addBook(this.bookForm.value,this.imageFile).subscribe(
        (user) => {
          if(user.statusCode === 200)
          {
            this.matSnackBar.open(user.response, "ok", {duration: 4000});
            this.dialogRef.close(1);
          }
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
