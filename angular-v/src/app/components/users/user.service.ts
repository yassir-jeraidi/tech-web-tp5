import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterRequest, User} from '../../types';
import {environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private users: User[] = []

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<User[]>(`${environment.API_URL}/users`)
  }

  findOne(id: string) {
    return this.http.get<User | null>(`${environment.API_URL}/users/${id}`);
  }

  findOneByEmail(email: string) {
    return this.http.get<User[]>(`${environment.API_URL}/users?email=${email}`);
  }

  save(credentials : RegisterRequest) {
    return this.http.post<User>(`${environment.API_URL}/users`, credentials)
  }
}
