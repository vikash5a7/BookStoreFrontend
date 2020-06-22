import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Service/wishlist.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})
export class WishComponent implements OnInit {

  constructor(private wishlistService: WishlistService , private route: Router,
              private matSnackBar: MatSnackBar) { }

  // tslint:disable-next-line: variable-name
  book_id: number;
  books = [];
  WishListdetails = new Array<any>();

  countbook: number;

  bookcount: number;
  no: number;
  ngOnInit(): void {
    this.booksFromWishList();
    this.BookCount();
  }

  booksFromWishList() {
    this.wishlistService.getWishllistBooks().subscribe((Response) => {
      console.log('no of books in array ' + Response.obj.length);
      this.countbook = Response.obj.length;
      console.log('wishlist books' , Response.obj);
      console.log('---response', Response);
      this.books = Response.obj;

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < Response.obj.length; i++) {

      console.log('bookName : ' +  Response.obj[0].booksList[0].bookName);
      console.log('bookDetails : ' +  Response.obj[0].booksList[0].bookDetails);
      console.log('authorName : ' +  Response.obj[0].booksList[0].authorName);
      console.log('noOfBooks : ' +  Response.obj[0].booksList[0].noOfBooks);
      console.log('image : ' +  Response.obj[0].booksList[0].image);
      console.log('price : ' +  Response.obj[0].booksList[0].price);
      console.log('bookId : ' +  Response.obj[0].booksList[0].bookId);

      console.log('books are ' + this.books);

      const p = {bookName: Response.obj[i].booksList[0].bookName , bookDetails: Response.obj[i].bookDetails,
         authorName: Response.obj[i].booksList[0].authorName,
        noOfBooks: Response.obj[i].booksList[0].noOfBooks,
        image: Response.obj[i].booksList[0].image,  price: Response.obj[i].booksList[0].price ,
        bookId: Response.obj[i].booksList[0].bookId
      };

      this.WishListdetails.push(p);
      console.log('after push ', this.WishListdetails);
    }

     });

  }
  BookCount() {
    this.wishlistService.getWishlistCount().subscribe(
      (Response: any) => {
        console.log('book count = ' + Response.obj);
        this.bookcount = Response.obj;
        this.matSnackBar.open(Response.message, 'undo', { duration: 2500 });
      },
      (error: any) => {
        console.error(error);
        console.log(error.error.message);
        this.matSnackBar.open(error.error.message, 'undo', { duration: 2500 });
      }
    );
  }

  remoiveFromWish(orderId: any) {
    console.log('removeing bookId ' + orderId);

    this.wishlistService.removeFromWishList(orderId).subscribe(
      (response: any) => {
        this.matSnackBar.open('Book removed from wish list', 'success', {duration: 5000});
        window.location.reload();
        },
      (error: any) => {
        this.matSnackBar.open(error.error.message, 'failed', {duration: 5000});
      }
    );
  }

  addToWish(orderId: any) {
    console.log('removeing bookId ' + orderId);

    this.wishlistService.addToWishlist(orderId).subscribe(
      (response: any) => {
        this.matSnackBar.open('Book removed from wish list', 'success', {duration: 5000});

        },
      (error: any) => {
        this.matSnackBar.open(error.error.message, 'failed', {duration: 5000});
      }
    );
  }



}
