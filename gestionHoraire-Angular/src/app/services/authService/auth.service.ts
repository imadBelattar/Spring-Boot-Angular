import { Injectable } from '@angular/core';
import { ApiService } from '../apiService/api.service';
import { LoginResponse } from '../../models/login-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) {}

  isLoggedIn(): boolean {
      return true
//    return !!localStorage.getItem('accessToken');
  }

  login(email: string, password: string): Observable<any> {
    console.log('Email:', email);
    console.log('Password:', password); 
    return this.apiService.post<{ email: string, password: string }>('/auth/login', { email, password });
  }

}
