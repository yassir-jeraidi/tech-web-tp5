import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {RegisterRequest} from '../../../types';

@Component({
  selector: 'app-register',
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
  templateUrl: './register.component.html',
  styleUrl: '../auth.component.css',
})
export class RegisterComponent implements OnInit {
  protected registerForm: FormGroup = new FormGroup({});
  protected errorMessage: string | null = null;

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  onRegister() {
    if (this.registerForm.invalid) {
      return;
    }
    const credentials = this.registerForm.value as RegisterRequest;
    this.authService.register(credentials).subscribe(
      {
        next: (res) => {
          console.log(res)
          this.errorMessage = null;
        },
        error: (err) => {
          this.errorMessage = err.message || "An error has occurred";
        }
      }
    )
  }
}
