import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../service/service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = (form.querySelector('#username') as HTMLInputElement).value;
    const password = (form.querySelector('#password') as HTMLInputElement).value;

    const role = this.authService.login(username, password); 

    if (role === 'admin') {
      console.log('Logged in as Admin');
      this.router.navigate(['usuario']); 
    } else if (role === 'user') {
      console.log('Logged in as User');
      this.router.navigate(['/user-dashboard']); 
    } else {
      console.log('Invalid credentials');
    }
  }
}


