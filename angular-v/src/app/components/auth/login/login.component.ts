import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginRequest} from '../../../types';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
    MatFormField,
    NgIf,
    MatIconButton,
    MatButton,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: '../auth.component.css',
})
export class LoginComponent implements OnInit{

  protected loginForm: FormGroup = new FormGroup({});
  protected errorMessage: string | null = null;

  constructor(private authService: AuthService , private fb : FormBuilder ,private router : Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.loginForm.value as LoginRequest;
    this.authService.login(credentials).subscribe({
      next: () => {
        this.errorMessage = null;
      },
      error: (err) => {
        this.errorMessage = err.message || 'Login failed. Please try again.';
      },
    });
  }

}
