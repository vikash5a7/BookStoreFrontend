import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/token.service';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  name: string = null;
  books = [];
  constructor(private service: BookService

  ) { }


  ngOnInit(): void {
    this.getUserName();
    this.getallBooks();
  }

  getallBooks() {
    console.log('gett all book called');
    this.service.getallBooks().subscribe( response => {
      this.books = response.obj;
    });
   
  }
  addBook(){
    console.log('add');
    
  }
  getUserName() {
   this.name = localStorage.getItem('Name');
  }
}
