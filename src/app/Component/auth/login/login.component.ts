import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public error = null;
    public hide = true;
    public tokenValue = null;

    public isLoading = false;
    public form = {
      email: null,
      password: null,
      role: null
    };

  constructor(
    private titleService: Title
  ) {
    this.setTitle('Bookstore | Login');
   }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('==========');
    console.log('value is ' + this.form.role);
  }
  public setTitle( dashboard: string) {
    this.titleService.setTitle( dashboard );
    }
}
