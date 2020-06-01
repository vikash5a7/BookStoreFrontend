import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleEvent = new EventEmitter<boolean>();
  opened: boolean = false;

  name: any;
  id: any;
  isUser = false;
  isSeller = false;
  isAdmin=false;
  role:string;
  bookName: string;
  totalItem;
  isbudget = false;
  isLogin = false;
 @Input() output: any;
 @Input() function: any;
  constructor( private service: BookService, ) { }

  ontoggel(input: any) {
    console.log("1" + input);
    this.toggleEvent.emit(input);
    console.log(input);
    this.opened = !this.opened;
  }

  ngOnInit(): void {
    this.role= localStorage.getItem('role');
   console.log('role check toolbar',this.role);
   if (this.role === 'admin') 
   {
     this.isAdmin=true;
   }
   if (this.role === 'seller') 
   {
     this.isSeller=true;
   }
   if (this.role === 'user') 
   {
     this.isUser=true;
     console.log('is user ',this.isUser);
     
   }
  }
  bookSearch() {
    // console.log(this.bookName);
    this.service.setSearchBookData(this.bookName);
  }



  getUpdatedNotes(event) {
this.ngOnInit();
}

}
