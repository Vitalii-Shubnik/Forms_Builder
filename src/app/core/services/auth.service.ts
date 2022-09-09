import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { LoginResponse } from '../models/userLoginResponse'

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  logout(): void {
    localStorage.removeItem('user')
  }

  authorize(email: string, password: string, url: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(url, { username: email, password })
  }

  setUser(user: LoginResponse): void {
    localStorage.setItem('user', JSON.stringify({
      token: user.token,
      username: user.username,
      expiresIn: user.expiresIn,
      id: user.id
    }))
  }
}

