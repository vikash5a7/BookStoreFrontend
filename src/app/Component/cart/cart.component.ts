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
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor( private matSnackBar: MatSnackBar,
               private formBuilder: FormBuilder,
               private route: Router,
               private service: BookService,
               private cartService: CartService,
               private userService: UserService) { }
  selected = false;
  isLinear = false;
  customerForm: FormGroup;
  error: null;
  book = [];
  books: BookModule = new BookModule();
  element: BookModule = new BookModule();
  items = [];
  size: number;
  valueChanged = false;
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
  userAdreessDetails: Address = new Address();
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
   this.getUserAdress();
   this.getCartItemCount();
   this. booksFromCart();
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
  increaseQuantity(bookId: any , quantityDeatils: any) {
    console.log('increasing items ');
    console.log('Quatity Details', quantityDeatils);
    this.bookQuantityDetails.quantityId = quantityDeatils.quantity_id;
    this.bookQuantityDetails.eachPrice = quantityDeatils.totalprice / quantityDeatils.quantityOfBook;
    this.bookQuantityDetails.quantityOfBook = quantityDeatils.quantityOfBook;
    this.cartService.increaseBooksQuantity(bookId, this.bookQuantityDetails).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error));
    console.log('Book id' + bookId);
    }
  DecreseQuantity(bookId: any , quantityDeatils: any) {
    console.log('increasing items ');
    console.log('Quatity Details', quantityDeatils);
    this.bookQuantityDetails.quantityId = quantityDeatils.quantity_id;
    this.bookQuantityDetails.eachPrice = quantityDeatils.totalprice / quantityDeatils.quantityOfBook;
    this.bookQuantityDetails.quantityOfBook = quantityDeatils.quantityOfBook;
    this.cartService.decreaseBooksQuantity(bookId, this.bookQuantityDetails).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    console.log('Book id' + bookId);
  }

  Removecart(key) {
    this.cartService.removeIteamFromCart(key).subscribe((Response) => {
      console.log('removing book', Response);
    });
    sessionStorage.removeItem(key);
    console.log('removinf book id is: ', key);
  }


  handleResponse(data: any): void {
    console.log(data);
    this.matSnackBar.open(data.message , 'ok', {
    duration: 5000
  });
  }

  handleError(error: any) {
    this.error = error.error.message;
    console.log(error);
    this.matSnackBar.open(this.error, 'ok', {
    duration: 5000
  });
  }

  getUserAdress() {
    this.userService.getAdress().subscribe((Response) => {
      console.log('address', Response);
      for (const i of Response.obj) {
        if (i.addressType === 'home' && this.selectedtype === 'Home') {
          this.setAddresToInput(i);
          console.log('user adress Of Home : ', i);
        }
        if (i.addressType === 'Work' && this.selectedtype === 'Work') {
          this.setAddresToInput(i);
          console.log('user adress Of wokr : ', i);
        }
        if (i.addressType === 'Work' && this.selectedtype === 'Other') {
          this.setAddresToInput(i);
          console.log('user adress Of wokr : ', i);
        }
      }
    });
  }
  detectChange() {
  this.valueChanged = true;
  console.log('values changed');
}

  setAddresToInput(adressuser: Address) {
    this.Name.setValue(localStorage.getItem('Name'));
    this.pincode.setValue(adressuser.pincode);
    this.locality.setValue(adressuser.locality);
    this.address.setValue(adressuser.address);
    this.city.setValue(adressuser.city);
    this.landmark.setValue(adressuser.landmark);
    this.phoneNumber.setValue(adressuser.phoneNumber);
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
  this.getUserAdress();
  console.log('select item is ' + type);
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
OnRegisterSubmit() {
  console.log('--------------');
}
}
