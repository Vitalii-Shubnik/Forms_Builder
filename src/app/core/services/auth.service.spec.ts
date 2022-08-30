

import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { LoginResponse } from '../models/userLoginResponse'
import { AuthService } from './auth.service'

fdescribe('AuthService', () => {
  let service: AuthService
  let testUserData: LoginResponse
  let client: HttpClient
  let controller: HttpTestingController
  let mockHttpClientService
  beforeEach(() => {
    mockHttpClientService = jasmine.createSpyObj('HttpClient', ['post'])
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AuthService,
        { provide: HttpClient, useValue: mockHttpClientService }
      ]
    })
    service = TestBed.inject(AuthService)
    client = TestBed.inject(HttpClient)
    controller = TestBed.inject(HttpTestingController)
    testUserData = { token: 'any', username: 'any', expiresIn: 'any', id: 22 }
  })

  it('should set user in localstorage', () => {
    service.setUser(testUserData)
    let result = JSON.parse(localStorage.getItem('user'))
    expect(result).toEqual(testUserData)
  })

  it('should remove user from localstorage', () => {
    localStorage.setItem('user', JSON.stringify(testUserData))
    service.logout()
    let result = localStorage.getItem('user')
    expect(result).toBeFalsy()
  })
  
  it('should return HttpResponse', () => {
    const url = 'http://localhost:8000/users/authenticate'
    service.authorize('user1', 'password', url)
    expect(mockHttpClientService.post).toHaveBeenCalledOnceWith(url, { username: 'user1', password: 'password' })
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
