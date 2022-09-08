import { TestBed } from '@angular/core/testing'
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AuthInterceptor } from './auth.interceptor'

fdescribe('AuthInterceptor', () => {
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
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    })

    client = TestBed.inject(HttpClient)
    controller = TestBed.inject(HttpTestingController)
    localStorage.setItem('user', JSON.stringify({ token: 'sometoken' }))

  })

  it('should add authorization header', () => {
    const url = '/test'
    client.get(url).subscribe()
    const get = controller.expectOne(url)
    expect(get.request.headers.get('Authorization')).toEqual('Bearer sometoken')
  })

  it('should not add authorization header', () => {
    localStorage.clear()
    const url = '/test'
    client.get(url).subscribe()
    const get = controller.expectOne(url)
    const authorization = get.request.headers.get('Authorization')
    expect(authorization).toBeFalsy()
  })
})
