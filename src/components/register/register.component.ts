import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../service/service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgIf, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  passwordMismatch: boolean = false;
  usernameExists: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const { username, email, password, confirmPassword } = this.registerForm.value;

    if (password !== confirmPassword) {
      this.passwordMismatch = true;
      return;
    }

    this.passwordMismatch = false;
    this.usernameExists = false;

    const result = this.authService.register(username, email, password); 

    if (result === 'usernameExists') {
      this.usernameExists = true;
      return;
    }

    alert('¡Usuario Registrado!');
    console.log('Nombre de usuario:', username);
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
  }
}
