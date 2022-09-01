import { HttpErrorResponse } from '@angular/common/http'
import { createAction, props } from '@ngrx/store'
import { authMethodEnum } from 'src/app/core/enums/authMethod'
import { LoginResponse } from 'src/app/core/models/userLoginResponse'

export const loginRequest = createAction('[Auth] Login Request', props<{ username: string, password: string, authMethod: authMethodEnum }>())
export const loginSuccess = createAction('[Auth] Login Success', props<{ response: LoginResponse }>())
export const loginError = createAction('[Auth] Login Error', props<{ response: HttpErrorResponse }>())

export const logout = createAction('[Auth] Logout')

export const isExpired = createAction('[Auth] Is Token Expired')