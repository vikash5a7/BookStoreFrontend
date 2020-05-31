import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModule } from 'src/app/Model/book/book.module';
import {HttpserviceService} from '../../../../Service/httpservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.scss']
})
export class ViewbookComponent implements OnInit {
  @Input()
  book: BookModule;
  @Output()
  bookDeletedEvent = new EventEmitter();


  constructor(private httpClientService: HttpserviceService, private router: Router) { }

  ngOnInit(){
  }

  deleteBook() {
    this.httpClientService.deleteBook(this.book.bookId).subscribe(
      (book) => {
        this.bookDeletedEvent.emit();
        this.router.navigate(['seller', 'books']);
      }
    );
  }
  editBook() {
    this.router.navigate(['admin', 'books'], { queryParams: { action: 'edit', bookId: this.book.bookId } });
  }

}
