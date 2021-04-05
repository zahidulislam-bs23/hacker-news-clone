import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  Credentials,
  CredentialsService,
  UserCred,
} from './credentials.service';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService) {}

  login(context: LoginContext): Observable<Credentials> {
    const data = {
      username: context.username,
      token: '123456',
    };
    const users: UserCred[] = this.credentialsService.getStoredUsers();
    const user = users.filter((user) => {
      return (
        user.username === context.username && user.password === context.password
      );
    });
    if (user.length > 0) {
      this.credentialsService.setCredentials(data, context.remember);
      return of(data);
    } else {
      return throwError({ message: '* Wrong username or password' });
    }
  }

  logout(): Observable<boolean> {
    this.credentialsService.setCredentials();
    return of(true);
  }
}
