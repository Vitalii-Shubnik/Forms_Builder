import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { LoginResponse } from '../models/userLoginResponse'

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  logout() {
    localStorage.removeItem('user')
  }

  authorize(email: string, password: string, url: string): Observable<any> {
    const response = this.http.post<any>(url, { username: email, password })
    return response
  }

  setUser(user: LoginResponse) {
    localStorage.setItem('user', JSON.stringify({
      token: user.token,
      username: user.username,
      expiresIn: user.expiresIn,
      id: user.id
    }))
  }
}

