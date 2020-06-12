import { CartService } from 'src/app/Service/cart.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BookService } from 'src/app/Service/book.service';
import { TokenService } from 'src/app/Service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleEvent = new EventEmitter<boolean>();


  opened = false;




  name: any;
  id: any;
  isUser = false;
  isSeller = false;
  isAdmin = false;
  role: string;
  length: any;
  bookName: string;
  totalItem;
  isbudget = false;
  isLogin = false;
 @Input() output: any;
 @Input() function: any;
  constructor( private service: BookService,
               private token: TokenService,
               private route: Router,
               private cartService: CartService
    ) { }

  ontoggel(input: any) {
    console.log('input' + input);
    this.toggleEvent.emit(input);
    this.opened = !this.opened;
  }

  ngOnInit(): void {
    this.cartService.autoRefresh$.subscribe(() => {
      this.getCartItemCount();
    });
    this.getCartItemCount();
    this.name = localStorage.getItem('Name');
    this.role = localStorage.getItem('role');
    console.log('role check toolbar', this.role);
    if (this.role === 'admin') {
     this.isAdmin = true;
     this.isLogin = true;
   }
    if (this.role === 'seller') {
     this.isSeller = true;
     this.isLogin = true;
   }
    if (this.role === 'user') {
     this.isUser = true;
     this.isLogin = true;
     console.log('is user ', this.isUser);
   }
  }

  getCartItemCount() {
    this.cartService.getCartItemCount().subscribe((response: any) => {
      this.length = response.obj;
      console.log('total number of itemes are' + response.obj);
     });
  }
  bookSearch() {
    // console.log(this.bookName);
    this.service.setSearchBookData(this.bookName);
  }
  logout(event: MouseEvent) {
    console.log('loggout function called');
    event.preventDefault();
    this.token.remove();
    this.token.logedIn(false);
    this.route.navigateByUrl('/login');
  }
  getUpdatedNotes(event) {
  this.ngOnInit();
  }
}
