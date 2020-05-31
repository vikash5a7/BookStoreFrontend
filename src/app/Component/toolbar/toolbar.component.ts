import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  name: any;
  id: any;
  isUser = false;
  isSeller = false;
  bookName: string;
  totalItem;
  isbudget = false;
  isLogin = false;
 @Input() output: any;
 @Input() function: any;
  constructor( private service: BookService, ) { }

  ngOnInit(): void {

  }
  bookSearch() {
    // console.log(this.bookName);
    this.service.setSearchBookData(this.bookName);
  }



  getUpdatedNotes(event) {
this.ngOnInit();
}

}
