import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable, tap } from 'rxjs';
import { LoginResponse } from '../models/userLoginResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  logout() {
    localStorage.removeItem('user')
  }

  authorize(email: string, password: string, url: string): Observable<any> {
    return this.http.post<any>(url, { username: email, password })
      .pipe(
        tap((user: LoginResponse) => {
          localStorage.setItem('user', JSON.stringify({
            token: user.token,
            username: user.username,
            expiresIn: user.expiresIn,
            id: user.id
          }))
        })
      );
  }
}

