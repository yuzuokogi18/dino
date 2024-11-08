import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
  ];

  constructor() { }

  login(username: string, password: string): string {
    const user = this.users.find(u => u.username === username && u.password === password);
    
    if (user) {
      return user.role; 
    } else {
      return 'invalid';
    }
  }

  register(username: string, email: string, password: string): string {
    const existingUser = this.users.find(u => u.username === username);
    if (existingUser) {
      return 'usernameExists'; 
    }

    this.users.push({ username, password, role: 'user' });
    return 'success'; 
  }
}
