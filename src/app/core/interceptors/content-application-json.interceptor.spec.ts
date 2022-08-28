import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ContentApplicationJsonInterceptor } from './content-application-json.interceptor';

fdescribe('ContentApplicationJsonInterceptor', () => {
  let client: HttpClient
  let controller: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ContentApplicationJsonInterceptor,
          multi: true
        }
      ]
    })

    client = TestBed.inject(HttpClient)
    controller = TestBed.inject(HttpTestingController)
  })
  
  it('should change header Content-Type to application/json; charset=utf-8', () => {
    const url = 'http://localhost:8000/users/authenticate'
    client.post(url, { username: 'user2', password: 'password' }).subscribe()
    const post = controller.expectOne(url)
    expect(post.request.headers.get("Content-Type")).toEqual('application/json; charset=utf-8')
  })

});
