import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
@Input()
  color: ThemePalette;
  public error = null;
  message = null;
  public isloading = false;
  public form = {
  fname: null,
  lname: null,
  email: null,
  password: null,
  confirmPassword: null,
  mobileNumber: null,
  role: null,
  };

  constructor(
    private titleService: Title,
  ) {
    this.setTitle('Bookstore | Registration');
   }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('----------------');
  }
  public setTitle( dashboard: string) {
    this.titleService.setTitle( dashboard );
    }
}

