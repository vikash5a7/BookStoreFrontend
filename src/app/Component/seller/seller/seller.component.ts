import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  name: string = null;
  constructor(

  ) { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
   this.name = localStorage.getItem('Name');
  }
}
