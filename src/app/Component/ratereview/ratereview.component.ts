import { Component, OnInit } from '@angular/core';
import { BookModule } from 'src/app/Model/book/book.module';
import { BookService } from 'src/app/Service/book.service';
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-ratereview',
  templateUrl: './ratereview.component.html',
  styleUrls: ['./ratereview.component.scss']
})
export class RatereviewComponent implements OnInit {

  bookId: any;
  ratings: Array<any> = [];
  rate: any;
  visible: boolean;
  isAdded: boolean;
  isListed: boolean;
  book: BookModule;
  bookImage: any;
  bookName: any;
  bookAuthor: any;
  bookPrice: any;
  bookDescription: any;
  sellerName: any;
  show: boolean;
 

  constructor(
    private bookService: BookService,
    private router: Router,
    private data: BookService,
    private _matSnackBar: MatSnackBar,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get("bookId");
    this.getRatings();
    console.log("bookid ",this.bookId);
    this.getBookById();
    // this.getRateOfBookById();
  }

  getBookById() {
    this.bookService.getBookById(this.bookId).subscribe((response: any) => {
      if (response["obj"] != null) {
        this.book = response.obj;
        console.log("book ",this.book);
        
        this.bookImage = response.obj["bookImage"];
        this.bookAuthor = response.obj["authorName"];
        this.bookName = response.obj["bookName"];
        this.bookPrice = response.obj["price"];
        this.bookDescription = response.obj["bookDetails"];
        this.show = true;
      }
    });
  }
  getRateOfBookById() {
    this.bookService.getRateOfBookById(this.bookId).subscribe((response: any) => {
      if (response["obj"] != null) {
        this.rate = response["obj"] ;
        if(this.rate == undefined)
        console.log("book average rate ",this.rate);  
      }
    });
  }

  rateNow() {
    // if (this.visible) {
      // localStorage.setItem("totalRate", this.total);
      this.router.navigate(["books/ratingandreview/" + this.bookId]);
    // }
  }

  totalRate: number = 0;
  ratenumber: number;
  color: any;
  total: any;

  getRatings() {
    this.bookService
      .getratingandreview(this.bookId)
      .subscribe((response: any) => {
        this.ratings = response.obj;
        console.log("rate and reviews for book "+this.ratings);
        
        for (var index in this.ratings) {
          this.rate = this.ratings[index];
          this.totalRate += this.rate.rating;
          this.ratenumber += 1;
          this.total = this.totalRate;
        }
        if (this.ratenumber > 1) {
          this.totalRate = this.totalRate / this.ratenumber;
          this.total = Number.parseFloat(this.totalRate + "").toFixed(1);
        }
        if (this.totalRate >= 3 || this.totalRate >= 2) {
          this.color = "rgb(245, 182, 110)";
        }
        if (this.totalRate >= 4) {
          this.color = "rgb(16, 136, 16)";
        }
        if (this.totalRate < 2) {
          this.color = "rgb(216, 69, 59)";
        }
      });
  }


  addToCart() {
    // if (this.visible) {
    //   this.bookService.addToCart(this.bookId).subscribe((response: any) => {
    //     this.data.changeMessage("count");
    //     console.log(response["obj"]);
    //     this.isAdded = response.obj;
    //     this._matSnackBar.open("Book added to cart", "ok", {
    //       duration: 1000,
    //     });
    //   });
    // } else {
    //   const dialogRef = this.dialog.open(LoginComponent);
    //   dialogRef.afterClosed().subscribe((result) => {
    //     window.location.reload();
    //   });
    //   this._matSnackBar.open("please login", "ok", {
    //     duration: 1000,
    //   });
    // }
  }

  //adding book to wish list if user login
  addToWishlist() {
    // if (this.visible) {
    //   this.bookService.addToWishList(this.bookId).subscribe((response: any) => {
    //     console.log(response["obj"]);
    //     this.isListed = response["obj"];
    //     this._matSnackBar.open("Book added to wishlist", "ok", {
    //       duration: 1000,
    //     });
    //   });
    // } else {
    //   const dialogRef = this.dialog.open(LoginComponent);
    //   dialogRef.afterClosed().subscribe((result) => {
    //     window.location.reload();
    //   });
    //   this._matSnackBar.open("please login", "ok", {
    //     duration: 1000,
    //   });
    // }
  }
  isAddedToWishList() {
    // this.bookService
    //   .isAddedToWishList(this.bookId)
    //   .subscribe((response: any) => {
    //     this.isListed = response["obj"];
    //   });
  }




}
