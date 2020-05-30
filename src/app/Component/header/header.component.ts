import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: string = null;
  constructor(
    private token: TokenService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
   this.name = localStorage.getItem('Name');
  }
  logout(event: MouseEvent) {
    console.log('loggout function called');
    event.preventDefault();

    this.token.remove();
    this.token.logedIn(false);
    this.route.navigateByUrl('/login');
  }
}
