import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../models/userLoginResponse';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  logout() {
    localStorage.removeItem('user')
  }

  authorize(email: string, password: string, url: string): Observable<any> {
    return this.http.post<any>(url, { username: email, password })
  }

  setUser(user: LoginResponse){
    localStorage.setItem('user', JSON.stringify({
      token: user.token,
      username: user.username,
      expiresIn: user.expiresIn,
      id: user.id
    }))
  }
}

