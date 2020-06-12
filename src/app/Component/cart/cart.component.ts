import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Service/book.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BookModule } from 'src/app/Model/book/book.module';
import { CartService } from 'src/app/Service/cart.service';
import { Customer } from 'src/app/Model/customer.model';
import { Address } from 'src/app/Model/address.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor( private matSnackBar: MatSnackBarModule,
               private formBuilder: FormBuilder,
               private route: Router, private service: BookService, private cartService: CartService) { }
  selected = false;
  isLinear = false;
  customerForm: FormGroup;
  book = [];
  books: BookModule = new BookModule();
  element: BookModule = new BookModule();
  items = [];
  pageofItems: Array<BookModule> = new Array<BookModule>();
  obj: BookModule[];
  size: number;
  // tslint:disable-next-line: variable-name
  book_id: number;
  bookSearch: any;
  bookName: string;
  length: any = sessionStorage.length;
  si: any = sessionStorage.length;
  value: any = [];
  UserId: number;
  objecrtArry: any = [];
  quantity = 1;
  customer: Customer = new Customer();
  type: any;
  bid: any;
  user: number;
  num = 2;
  selectedtype: any;
  @Output() output: EventEmitter<any> = new EventEmitter();
select = false;
addre: Address = new Address();
    phoneNumber = new FormControl('', [Validators.required, Validators.pattern('[0-9]{10,10}')]);
    Name = new FormControl('', [Validators.required]);
    pincode = new FormControl('', [Validators.required]);
    address = new FormControl('', [Validators.required]);
    locality = new FormControl('', [Validators.required]);
    city = new FormControl('', [Validators.required]);
    landmark = new FormControl('', [Validators.required]);
    Home = new FormControl('', [Validators.required]);
    Work = new FormControl('', [Validators.required]);
    Other = new FormControl('', [Validators.required]);
    bookQuantityDetails = {
    eachPrice: null,
    quantityId: null,
    quantityOfBook : null
    };

  ngOnInit()  {
   this.getsession();
   this.cartService.autoRefresh$.subscribe(() => {
    this.getCartItemCount();
    this. booksFromCart();
  });
   this.getCartItemCount();
   this. booksFromCart();
   this.phoneNumber.setValue('8989898798');
   this.Name.setValue(localStorage.getItem('Name'));
  }

  getCartItemCount() {
    this.cartService.getCartItemCount().subscribe((response: any) => {
      this.length = response.obj;
      console.log('total number of itemes are' + response.obj);
     });
  }

  booksFromCart() {
      this.cartService.getCartBooksFrom().subscribe((Response) => {
        console.log('response of cart books' , Response.obj);
        console.log('books are ', this.book);
        this.book = Response.obj;
        console.log('response from cat', Response.obj[0].quantityOfBook[0].quantityOfBook);
        for (const i of this.book) {
          console.log('vikash', i.quantityOfBook[0].quantityOfBook);
          this.quantity = i.quantityOfBook[0].quantityOfBook;
        }
    });
  }
  addItem(bookId: any , quantityDeatils: any) {
    console.log('increasing items ');
    console.log('Quatity Details', quantityDeatils);
    this.bookQuantityDetails.quantityId = quantityDeatils.quantity_id;
    this.bookQuantityDetails.eachPrice = quantityDeatils.totalprice / quantityDeatils.quantityOfBook;
    this.bookQuantityDetails.quantityOfBook = quantityDeatils.quantityOfBook;
    console.log('quantityOfBook details ', this.bookQuantityDetails);
    console.log('Book id' + bookId);
    }
  removeItem(bookId: any , quantityDeatils: any) {
      console.log('Deacresing items');
      console.log('Quatity Details', quantityDeatils);
      console.log('Book id' + bookId);
  }

  Removecart(key) {
    this.cartService.removeIteamFromCart(key).subscribe((Response) => {
      console.log('removing book', Response);
    });
    sessionStorage.removeItem(key);
    console.log('removinf book id is: ', key);
  }

Toggle() {
  if ( this.select === false) {
    this.select = true;
  } else if ( this.select === true) {
    this.select = false;
  }
}

tog() {
  if ( this.selected === false) {
    this.selected = true;
  } else if ( this.selected === true) {
    this.selected = false;
  }
}



getsession() {
for (let i = 0; i < sessionStorage.length; i++) {
  const key = sessionStorage.key(i);
  this.value[i] = sessionStorage.getItem(key);
  console.log('key', key);
}

}
 fun(type) {
  this.selectedtype = type;
}

OnRegisterSubmit() {
console.log('type--' + this.selectedtype);

this.addre.address = this.address.value;
this.addre.city = this.city.value;
this.addre.landmark = this.landmark.value;
this.addre.locality = this.locality.value;
this.addre.pincode = this.pincode.value;

if (this.selectedtype === 'Home') {
  // tslint:disable-next-line: no-shadowed-variable
  const Customer = {
    name : this.Name.value,
    phonenumber : this.phoneNumber.value,
    home : this.addre

  };

  console.log('Home----');
  this.cartService.post(Customer).subscribe((response: any) => {
     this.bid = response.obj;
     this.user = this.bid.userId;
     console.log(response);
     console.log(this.bid);
     console.log(response, 'Success...');
     console.log('data' + Customer.phonenumber);
     console.log('data+++' + this.phoneNumber.value);
     this.addtcart(this.user);
    });
 }
if (this.selectedtype === 'Work') {
  // tslint:disable-next-line: no-shadowed-variable
  const Customer = {
    name : this.Name.value,
    phonenumber : this.phoneNumber.value,
    work : this.addre
  };

  this.cartService.post(Customer).subscribe((response: any) => {
      this.bid = response.obj;
      this.user = this.bid.userId;
      console.log(response, 'Success...');
      console.log('data' + Customer.phonenumber);
      console.log('data+++' + this.phoneNumber.value);
      this.addtcart(this.user);
    });
    // this.addtcart( this.user);
 }
if (this.selectedtype === 'Other') {
  // tslint:disable-next-line: no-shadowed-variable
  const Customer = {
    name : this.Name.value,
    phonenumber : this.phoneNumber.value,
    other : this.addre
  };

  this.cartService.post(Customer).subscribe((response: any) => {
      this.bid = response.obj;
      this.user = this.bid.userId;
      console.log(response, 'Success...', this.user);
      console.log('data' + this.bid.userId);
      console.log('data+++' + this.phoneNumber.value);
      this.addtcart(this.user);
    });
 }
}


addtcart( user: any) {
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    this.value[i] = sessionStorage.getItem(key);
    console.log('key', key);
    console.log('ghgvvb=====' + user);
    console.log('---' + this.bid);
}
}
}
