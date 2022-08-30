import { HttpErrorResponse } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"
import { Router } from "@angular/router"
import { provideMockActions } from '@ngrx/effects/testing'
import { MockStore, provideMockStore } from "@ngrx/store/testing"
import { ToastrService } from "ngx-toastr"
import { Observable, of, throwError } from "rxjs"
import { TestScheduler } from "rxjs/testing"
import { authMethodEnum } from "src/app/core/enums/authMethod"
import { LoginResponse } from "src/app/core/models/userLoginResponse"
import { AuthService } from "src/app/core/services/auth.service"
import { logout, loginSuccess, loginError, loginRequest } from "../actions/auth.actions"
import { initialUser } from "../reducers/auth.reducer"
import { AuthState } from "../statesModels/auth.state"
import { AuthEffects } from "./auth.effects"

fdescribe('Auth Effects', () => {
  const initial = { ...initialUser }

  let authService: any
  let toastr: any
  let router: any
  let effects: AuthEffects
  let actions$: Observable<any>
  let store: MockStore<AuthState>
  let testScheduler: TestScheduler

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['logout', 'setUser', 'authorize'])
    toastr = jasmine.createSpyObj('ToastrService', ['success', 'error'])
    router = jasmine.createSpyObj('Router', ['navigateByUrl'])
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: AuthService, useValue: authService },
        { provide: ToastrService, useValue: toastr },
        { provide: Router, useValue: router }
      ]
    })
    effects = TestBed.inject(AuthEffects)
    store = TestBed.inject(MockStore)
    store.setState(initial)
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
  })

  //creation
  it('should be created', () => {
    expect(effects).toBeTruthy()
  })

  //
  it('should dispatch loginsuccess on authorization response', () => {
    const user: LoginResponse = { username: 'user1', token: 'token', expiresIn: '333123120', id: 4, message: 'Login Successful' }
    const action = loginRequest({ authMethod: authMethodEnum.login, password: '12345', username: 'user1' })
    const outcome = loginSuccess({ response: user })
    testScheduler.run(({ hot, cold, expectObservable }) => {
      actions$ = hot('-a', { a: action })
      const response = cold('-b|', { b: user })
      authService.authorize.and.returnValue(response)
      expectObservable(effects.loginRequest$).toBe('--b', { b: outcome })
    })
    expect(authService.setUser).toHaveBeenCalledOnceWith(user)
  })

  it('should dispatch loginerror on authorization response', () => {
    pending()
    const error = new HttpErrorResponse({ error: { message: 'Login Error' } })
    const action = loginRequest({ authMethod: authMethodEnum.login, password: '12345', username: 'user1' })
    const outcome = loginError({ response: { ...error } })
    testScheduler.run(({ hot, cold, expectObservable }) => {
      actions$ = hot('-a|', { a: action})
      const response = cold('(-b|)', { b: error })
      authService.authorize.and.throwError(response)
      expectObservable(effects.loginRequest$).toBe('-b', { b: of(outcome) })
    })
  })


  //loginSuccess$
  it('should call router navigateByUrl, toastr success after login success', () => {
    const user: LoginResponse = { username: 'user1', token: 'token', expiresIn: '333123120', id: 4, message: 'Login Successful' }
    const action = loginSuccess({ response: { ...user } })
    testScheduler.run(({ hot, expectObservable }) => {
      actions$ = hot('--a', { a: action })
      expectObservable(effects.loginSuccess$).toBe('--a', { a: action })
    })
    expect(router.navigateByUrl).toHaveBeenCalledOnceWith('/')
    expect(toastr.success).toHaveBeenCalledOnceWith('Login Successful')
  })

  //loginError$
  it('should call toastr error with resonse form error after login error', () => {
    const user: AuthState = { username: 'user1', token: 'token', expiresIn: '333123120', id: 4 }
    const action = loginError({ response: new HttpErrorResponse({ error: { message: 'Login Error' } }) })
    testScheduler.run(({ hot, expectObservable }) => {
      actions$ = hot('--a', { a: action })
      expectObservable(effects.loginError$).toBe('--a', { a: action })
    })
    expect(toastr.error).toHaveBeenCalledOnceWith('Login Error')
  })

  //loginError$
  it('should call toastr error with default resonse after login error', () => {
    const user: AuthState = { username: 'user1', token: 'token', expiresIn: '333123120', id: 4 }
    const action = loginError({ response: new HttpErrorResponse({}) })
    testScheduler.run(({ hot, expectObservable }) => {
      actions$ = hot('--a', { a: action })
      expectObservable(effects.loginError$).toBe('--a', { a: action })
    })
    expect(toastr.error).toHaveBeenCalledOnceWith('Something went wrong')
  })

  //logout$
  it('should call authService logout router navigateByUrl, toastr success after logout', () => {
    const action = logout()
    testScheduler.run(({ hot, expectObservable }) => {
      actions$ = hot('--a', { a: action })
      expectObservable(effects.logout$).toBe('--a', { a: action })
    })
    expect(authService.logout).toHaveBeenCalledTimes(1)
    expect(router.navigateByUrl).toHaveBeenCalledOnceWith('/authenticate')
    expect(toastr.success).toHaveBeenCalledOnceWith('Logged out')
  })
})