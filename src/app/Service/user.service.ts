import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  baseUrl = environment.BASE_URL;
  constructor(private http: HttpClient ) { }

  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
 public signUp(data: any) {
    return this.http.post(`${this.baseUrl}/registration`, data);
  }
  public signIn(data: any) {
    return this.http.post(`${this.baseUrl}/user/login`, data);
  }
  verifyUserByToken(token) {
    return this.http.post(`${this.baseUrl}/user/verify/`, token);
  }
  forgetPassword(data) {
    return this.http.post(`${this.baseUrl}/user/forgotpassword`, data);
  }
  public updatePassword(updatePassword: any, token: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/user/update/${token}`,
      updatePassword,
    );
  }
  public getAdress(): Observable<any> {
    return this.http.get(`${this.baseUrl}/${environment.GET_ADDRESS_BY_ADDRES}`, {headers: new HttpHeaders({token: localStorage.token})});
  }
}
