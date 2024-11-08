import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;

  logIn() {
    this.authenticated = true;
  }

  logOut() {
    this.authenticated = false;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  constructor() { }
}
