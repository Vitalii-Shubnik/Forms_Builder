import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class ContentApplicationJsonInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cloned = request.clone({
      headers: request.headers.set("Content-Type", 'application/json charset=utf-8')
    })
    return next.handle(cloned)
  }
}
