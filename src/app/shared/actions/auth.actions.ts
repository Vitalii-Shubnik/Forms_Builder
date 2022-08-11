import { createAction, props } from '@ngrx/store';

export const loginRequest = createAction('[Auth] Login Request', props<{username:string, password:string}>());
export const loginSuccess = createAction('[Auth] Login Success', props<{response:any}>());
export const loginError = createAction('[Auth] Login Request', props<{response: any}>());



export const register = createAction('[Login Component] Register', props<{username:string, password:string}>());
export const logout = createAction('[Login Component] Logout');

