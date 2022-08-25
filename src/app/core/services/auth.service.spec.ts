

import { TestBed } from '@angular/core/testing';
import { LoginResponse } from '../models/userLoginResponse';
import { AuthService } from './auth.service'
fdescribe('FormElDraggingService', () => {
  let service: AuthService;
  let testUserData: LoginResponse
  beforeEach(() => {
    let mockHttpClientService = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(mockHttpClientService)
    testUserData = { token: 'any', username: 'any', expiresIn: 'any', id: 22 }
  });

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

  it('should send post request', () => {
    pending()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
