import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/input/input.component';
import { AuthService } from '../services/authService/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ButtonComponent, InputComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService){}


  user: {email: string, password: string} = {email: '', password: ''};
  invalidCredentialsFormat: string = '';
  inputsIconStyle: string = '';

  onSubmit(event: any): any{
      event.preventDefault();
      console.log('Form submitted');
      if(this.user.email.length === 0 || this.user.password.length === 0) {
        this.inputsIconStyle = 'color: red;';
        this.invalidCredentialsFormat = 'Le mot de passe et l\'email sont nécessaires';
        return;
      } 
      if (!this.user.email.endsWith('@uca.ac.ma')){
        this.inputsIconStyle = 'color: red;';
        this.invalidCredentialsFormat = 'Email non valide';
        return;
      }
      this.authService.login(this.user.email, this.user.password);
      this.clearAll();



  }
  onEmailChange(email: string) {
    this.user.email = email;
  }
  onPasswordChange(password: string) {
    this.user.password = password;
  }
  clearAll() {
    this.invalidCredentialsFormat = '';
    this.inputsIconStyle = '';
    this.user.email = '';
    this.user.password = '';
    
  }

}
