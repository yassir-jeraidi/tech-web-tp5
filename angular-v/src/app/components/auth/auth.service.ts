import {Injectable} from '@angular/core';
import {UserService} from '../users/user.service';
import {LoginRequest, RegisterRequest, User} from '../../types';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser: User | null = this.loadUserFromSession();

  constructor(private userService: UserService, private router: Router) {
  }

  private loadUserFromSession(): User | null {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) as User : null;
  }

  private saveUserToSession(user: User): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.authenticatedUser = user;
  }

  login(credentials: LoginRequest): Observable<User[]> {
    return this.userService.findOneByEmail(credentials.email).pipe(
      tap((users: User[]) => {
        if (users.length === 1 && users[0].password === credentials.password) { // Assuming password check
          this.saveUserToSession(users[0]);
          this.router.navigate(['/dashboard']);
        } else {
          throw new Error('Invalid credentials');
        }
      }),
      catchError((error) => {
        this.authenticatedUser = null;
        sessionStorage.removeItem('user');
        console.error('Login failed:', error);
        return throwError(() => new Error('Login failed: Invalid credentials'));
      })
    );
  }

  register(credentials: RegisterRequest): Observable<User> {
    return this.userService.save(credentials).pipe(
      tap({
        next: (user: User) => {
          this.saveUserToSession(user);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          throw new Error(err);
        },
      }),
      catchError((error) => {
        return throwError(() => new Error('Registration failed'));
      })
    );
  }

  logout(): void {
    this.authenticatedUser = null;
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.authenticatedUser;
  }

  getCurrentUser(): User | null {
    return this.authenticatedUser;
  }
}
