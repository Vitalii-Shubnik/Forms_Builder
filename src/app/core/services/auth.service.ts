import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) {}
  
  logout() {
    localStorage.removeItem('user')
  }

  authorize(email: string, password: string, url: string): Observable<any> {
    console.log('auth called')
    return this.http.post<any>(url, { username: email, password })
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user))
          return user
        })
      );
  }
}

