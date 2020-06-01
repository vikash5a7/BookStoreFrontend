import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  isSeller = false;
  isAdmin=false;
  role:string;
  constructor() { }

  ngOnInit() {
   this.role= localStorage.getItem('role');
   console.log('role check sidenav',this.role);
   if (this.role === 'admin') 
   {
     this.isAdmin=true;
   }
   if (this.role === 'seller') 
   {
     this.isSeller=true;
   }
  }
  onClickSeller(){
    
  }
  onClickOrder(){}
  onClickReview(){}


  addBook(){

  }
  approvedBook(){}
  rejectedBook(){}
}
