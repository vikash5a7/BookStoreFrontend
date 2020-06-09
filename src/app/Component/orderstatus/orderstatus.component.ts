import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/token.service';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Service/book.service';
import {  MatSnackBar } from '@angular/material/snack-bar';
import {FormControl, Validators} from '@angular/forms';
import {  MatDialog } from '@angular/material/dialog';
import { BookModule } from 'src/app/Model/book/book.module';
import { Order} from 'src/app/Model/order.model';
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
orderdetails = new Array<any>();

animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  
  selectedValue: string;
 


ngOnInit(): void {

  this.getallUserOrderedBooks();

  this.adminservice.autoRefresh.subscribe(() => {
    this.getallUserOrderedBooks();
  });
}


getallUserOrderedBooks() {
  console.log('order status api called');
  this.adminservice.getAllOrderedBooks().subscribe( response => {
  this.orderedBooks = response.obj;
  console.log('All orderbooks for order status= :  ', this.orderedBooks);
  console.log("no of orders "+response.obj.length);

  for (let i = 0; i < response.obj.length; i++) {
    console.log ("Block statement execution no." + i);
    console.log("orderId : "+response.obj[i].orderId);
    console.log("orderStatus : "+response.obj[i].orderStatus);
    console.log("bookName : "+response.obj[i].booksList[0].bookName);
    console.log("bookDetails : "+response.obj[i].booksList[0].bookDetails);
    console.log("authorName : "+response.obj[i].booksList[0].authorName);
    console.log("image : "+response.obj[i].booksList[0].image);
    console.log("bookprice : "+response.obj[i].booksList[0].price);
    console.log("totalprice : "+response.obj[i].quantityOfBooks[0].totalprice);
    console.log("quantityOfBook : "+response.obj[i].quantityOfBooks[0].quantityOfBook);


    var p = {orderId:response.obj[i].orderId, orderStatus:response.obj[i].orderStatus, bookName:response.obj[i].booksList[0].bookName,
      bookDetails:response.obj[i].booksList[0].bookDetails, authorName:response.obj[i].booksList[0].authorName,
      image:response.obj[i].booksList[0].image,  totalprice:response.obj[i].quantityOfBooks[0].totalprice,
      quantityOfBook:response.obj[i].quantityOfBooks[0].quantityOfBook
    };

      this.orderdetails.push(p);
      console.log("after push ",this.orderdetails);
  }  
  });
}

no:any;

updateOrder(orderId:any) {
  this.adminservice.updateOrderStatus(orderId).subscribe(
    (response: any) => {
      this.matSnackBar.open("Order updated by Admin", 'success', {duration: 5000});
      
      },
    (error: any) => {
      this.matSnackBar.open(error.error.message, 'failed', {duration: 5000});
    }
  );
}


  
}
