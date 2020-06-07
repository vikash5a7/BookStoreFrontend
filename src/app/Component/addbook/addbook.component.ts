import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  MatDialog, MatDialogRef } from '@angular/material/dialog';
import {   MatSnackBar } from '@angular/material/snack-bar';
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
    private imageFile: string;
  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      bookName: ['', [Validators.required]],
      authorName: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      noOfBooks: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      bookDetails: ['', [Validators.required]]
    });
  }

  onSelectedImage(event) {
    if (event.target.files.length > 0) {
      const image = event.target.files[0];
      this.imageFile = image.name;
    }
  }
    onClickaddBook() {
      this.bookService.addBook(this.bookForm.value, this.imageFile).subscribe(
        (user) => {
          if (user.statusCode === 200) {
            this.matSnackBar.open(user.response, 'ok', {duration: 4000});
            this.dialogRef.close(1);
          }
        },
        (error: any) => {
          this.matSnackBar.open(error.error, 'ok', { duration: 4000 });
          console.log(error);
        }
      );
      if (this.bookForm.invalid) {
        return;
      }
    }
}
