import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable, shareReplay } from 'rxjs';
import * as moment from "moment"
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {
  }
  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('expiresIn')
  }
  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:8000/users/authenticate', { username: email, password })
      .pipe(
        map(user => {
          localStorage.setItem('user', user.token)
        }),
        shareReplay()
      );
  }
  register(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:8000/users/register', { username: email, password })
      .pipe(
        map(user => {
          localStorage.setItem('user', user.token)
          localStorage.setItem('expiresIn', user.expiresIn)
        }),
        shareReplay()
      );
  }
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration()) && !!localStorage.getItem("user")
  }
  get user(){
    return this.isLoggedIn() && localStorage.getItem("user");
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expiresIn");
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
  }
}

