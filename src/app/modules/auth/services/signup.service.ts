import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CredentialsService, UserCred } from './credentials.service';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private credentialsService: CredentialsService) {}

  signUp(user: UserCred): Observable<UserCred> {
    this.credentialsService.addUserToStorage(user);
    return new BehaviorSubject(user);
  }
}
