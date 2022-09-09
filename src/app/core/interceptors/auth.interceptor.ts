import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { LoginResponse } from '../models/userLoginResponse'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user: LoginResponse = JSON.parse(localStorage.getItem('user'))
    if (user && user.token) {
      const cloned: HttpRequest<unknown> = req.clone()
      cloned.headers.set('Authorization', 'Bearer ' + user.token)
      return next.handle(cloned)
    }
    else {
      return next.handle(req)
    }
  }
}

