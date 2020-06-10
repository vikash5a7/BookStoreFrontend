import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  isSeller = false;
  isAdmin=false;
  role:string;
  constructor(private _router:Router,private route:ActivatedRoute,) { }

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


  sellerBook(){
      // this._router.navigate(['/dashboard/displaynote','archive']);
      // this._router.navigateByUrl('books');
      this._router.navigate(['books'],{queryParams:{book:'sellerbook'}});
  }

  orderStatus(){
//  this._router.navigate(['/books','order']);
// this._router.navigate(['order'],{relativeTo:this.route});
this._router.navigate(['books'],{queryParams:{book:'order'}});
  }
  
}
