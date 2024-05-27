import { Injectable } from '@angular/core';
import { ApiService } from '../apiService/api.service';
import { LoginResponse } from '../../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) {}

  isLoggedIn(): boolean {
    /*    return !!localStorage.getItem('accessToken');*/
    return true;
  }

  login(email: string, password: string) {
    console.log('Email:', email);
    console.log('Password:', password); 
    // Proceed with login
    this.apiService.post('/login', {email, password}).subscribe((res: LoginResponse) => {
      console.log('Response:', res);
      // Handle response ------------------------>------- ----- ---->

    });

  }

}
