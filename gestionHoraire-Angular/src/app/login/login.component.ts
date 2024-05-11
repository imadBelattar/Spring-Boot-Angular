import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/input/input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ButtonComponent, InputComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  }
  constructor(){}


  invalidCredentialsFormat: string = '';
  onSubmit(event: any) {
    event.preventDefault();
    console.log('Form submitted');
    if(this.user.email.length === 0 || this.user.password.length === 0) {
      this.invalidCredentialsFormat = 'Password and email are required';
      console.log(this.invalidCredentialsFormat);
      return;
    } 
    if (!this.user.email.endsWith('@uca.ac.ma') || !(this.user.password.length >= 8) ){
      this.invalidCredentialsFormat = 'Invalid email or password';
      console.log(this.invalidCredentialsFormat);
    } else {
        //remove white spaces from email
        this.user.email = this.user.email.split(' ').join('');
        console.log('Email:', this.user.email);
        console.log('Password:', this.user.password);
        // Proceed with form submission or other actions
    }
  }
  onEmailChange(email: string) {
    this.user.email = email;
  }
  onPasswordChange(password: string) {
    this.user.password = password;
  }

}
