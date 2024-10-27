// @ts-ignore
import { createAction, props } from '@ngxs/store';
import { User } from '../../core/models/user.interface';

export class login {
  static readonly type = '[Auth] Login';
  constructor(public payload: { email: string; password: string }) {}
}

export class loginSuccess {
  static readonly type = '[Auth] Login Success';
  constructor(public user: User, public token: string) {}
}

export class loginFailure {
  static readonly type = '[Auth] Login Failure';
  constructor(public error: any) {}
}

export class logout {
  static readonly type = '[Auth] Logout';
}

// Selectores
export const selectIsLoggedIn = (state: { auth: { isLoggedIn: boolean } }) => state.auth.isLoggedIn;
export const selectIsProfessional = (state: { auth: { user: User | null } }) => 
  state.auth.user?.role === 'professional';
