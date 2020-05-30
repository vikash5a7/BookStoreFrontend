import { Component, OnInit, Input } from '@angular/core';
import { BookModule } from 'src/app/Model/book/book.module';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.scss']
})
export class ViewbookComponent implements OnInit {
  @Input()
  book: BookModule;

  constructor() { }

  ngOnInit(): void {
  }

}
