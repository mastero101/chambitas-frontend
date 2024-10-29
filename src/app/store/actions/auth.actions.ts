// @ts-ignore
import { createAction, props } from '@ngxs/store';
import { User, Professional } from '../../core/models/user.interface';

export class login {
  static readonly type = '[Auth] Login';
  constructor(public username: string, public password: string) {}
}

export class loginSuccess {
  static readonly type = '[Auth] Login Success';
  constructor(
    public user: User | Professional,
    public token: string
  ) {}
}

export class loginFailure {
  static readonly type = '[Auth] Login Failure';
  constructor(public error: string) {}
}

export class logout {
  static readonly type = '[Auth] Logout';
}
