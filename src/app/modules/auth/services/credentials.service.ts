import { Injectable } from '@angular/core';

export interface Credentials {
  // Customize received credentials here
  username: string;
  token: string;
}

export interface UserCred {
  username: string;
  password: string;
}

const credentialsKey = 'credentials';
const usersStorageKey = 'usersDB';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  private mCredentials: Credentials | null = null;

  constructor() {
    const savedCredentials =
      sessionStorage.getItem(credentialsKey) ||
      localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this.mCredentials = JSON.parse(savedCredentials);
    }
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials(): Credentials | null {
    return this.mCredentials;
  }

  setCredentials(credentials?: Credentials, remember?: boolean) {
    this.mCredentials = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }

  addUserToStorage(user: UserCred) {
    const users: UserCred[] = this.getStoredUsers();
    users.push(user);
    localStorage.setItem(usersStorageKey, JSON.stringify(users));
  }

  getStoredUsers(): UserCred[] {
    let users: UserCred[] = JSON.parse(localStorage.getItem(usersStorageKey));
    users = users ? users : [];
    return users;
  }
}
