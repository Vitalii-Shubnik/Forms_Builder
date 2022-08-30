import { Action } from '@ngrx/store'
import { loginSuccess } from '../actions/auth.actions'
import { AuthState } from '../statesModels/auth.state'
import { authReducer, getInitialUser, initialUser } from './auth.reducer'
fdescribe('Auth Reducer', () => {
  let action: Action
  let initial: AuthState

  beforeEach(() => {
    action = null
    initial = { ...initialUser }
  })

  it('should return initial value after unexisting action', () => {
    action = { type: 'not real' }
    expect(authReducer(initial, action)).toEqual(initialUser)
  })
  
  it('should return user data after login error', () => {
    action = { type: '[Auth] Login Error' }
    expect(authReducer(initial, action)).toEqual(initialUser)
  })
  
  it('should return initial value after login success', () => {
    action = loginSuccess({ response: { username: 'user1', expiresIn: '323132312', id: 3, token: 'sometoken' } })
    expect(authReducer(initial, action)).toEqual({ username: 'user1', expiresIn: '323132312', id: 3, token: 'sometoken' })
  })
  
  it('should return initial value after logout', () => {
    action = { type: '[Auth] Logout' }
    expect(authReducer(initial, action)).toEqual(initialUser)
  })
  
  it('should get user from localstorage', () => {
    const time = 1232131983120
    localStorage.setItem('user', JSON.stringify({ token: '123', username: 'user1', id: 2, expiresIn: time.toString() }))
    expect(getInitialUser()).toEqual({ token: '123', username: 'user1', id: 2, expiresIn: time.toString() })
  })
})