import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public valideUser = false;
  public loggedIn = false;
  constructor() { }
  public handle(data) {
    console.log('token is going to be set');
    this.set(data);
  }
  // setting token in local
  public set(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('email', data.obj.email);
    localStorage.setItem('Name', data.obj.fname + ' ' + data.obj.lname);
  }
  // getting token from the local storage
 public get() {
   return localStorage.getItem('token');
  }
  // Removing item from the local storage
  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('Name');
  }
  logedIn(value: boolean) {
  if ( this.get() != null) {
    return this.loggedIn = true;
  }
  }
  loggedStatus() {
  return this.logedIn(this.loggedIn);
  }
}
