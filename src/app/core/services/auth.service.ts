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
  }
  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:8000/users/authenticate', { username: email, password })
      .pipe(
        map(user => {
          localStorage.setItem('user', JSON.stringify(user))
        }),
        shareReplay()
      );
  }
  register(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:8000/users/register', { username: email, password })
      .pipe(
        map(user => {
          localStorage.setItem('user', JSON.stringify(user))
        }),
        shareReplay()
      );
  }
  public isLoggedIn() {
    return this.getExpiration() && !!localStorage.getItem("user")
  }
  get user() {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? user : false;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = this.user.expiresIn
    return expiration && moment().isBefore(moment(JSON.parse(expiration)));
  }
}

