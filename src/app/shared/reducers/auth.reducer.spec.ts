import { Action } from '@ngrx/store'
import { authReducer, initialUser } from './auth.reducer'
import { loginSuccess } from '../actions/auth.actions'
fdescribe('Auth Reducer', () => {
  let action: Action
  beforeEach(() => {
    action = null
  })
  it('should return initial value after unexisting action', () => {
    const initial = { ...initialUser }
    action = { type: 'not real' }
    expect(authReducer(initial, action)).toEqual(initialUser)
  })
  it('should return user data after login error', () => {
    const initial = { ...initialUser }
    action = { type: '[Auth] Login Error' }
    expect(authReducer(initial, action)).toEqual(initialUser)
  })
  it('should return initial value after login success', () => {
    const initial = { ...initialUser }
    action = loginSuccess({ response: { username: 'user1', expiresIn: '323132312', id: 3, token: 'sometoken' } })
    expect(authReducer(initial, action)).toEqual({ username: 'user1', expiresIn: '323132312', id: 3, token: 'sometoken' })
  })
  it('should return initial value after logout', () => {
    const initial = { ...initialUser }
    action = { type: '[Auth] Logout' }
    expect(authReducer(initial, action)).toEqual(initialUser)
  })
  
})