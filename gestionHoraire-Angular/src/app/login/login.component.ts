import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../components/button/button.component';
import { InputComponent } from '../components/input/input.component';
import { KeycloakService } from '../keycloak/keycloak.service';
import { UserProfile } from '../keycloak/user-profile';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ButtonComponent, InputComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected from styleUrl to styleUrls
})
export class LoginComponent implements OnInit {
  profile!: UserProfile | undefined;
  userEmail: string = '';
  userFullName: string = '';
  role!: string | null;

  constructor(private keycloakService: KeycloakService, private router: Router, private httpCient: HttpClient) { }

  async ngOnInit(): Promise<void> {
    this.profile = this.keycloakService.profile;
    console.log(this.profile);
    this.userEmail = this.profile?.email || '';
    this.userFullName = this.profile?.firstName + ' ' + this.profile?.lastName || '';
    if(localStorage.getItem('username')) {
      localStorage.removeItem('username');
    }
    localStorage.setItem('username', this.userFullName);
    this.fetchUserRole();
  }


  fetchUserRole() {
    this.httpCient.get<string>("http://localhost:8081/enseignantRole/" + this.userEmail, { responseType: 'text' as 'json' })
      .subscribe(
        data => {
          this.role = data;
          console.log("User role fetched successfully:", this.role);
          if (this.role === "ADMINISTRATEUR") {
            this.router.navigate(['/adminDashboard']);
          } else if (this.role === "ENSEIGNANT") {
            this.router.navigate(['/enseignantDashboard']);
          } else {
            console.error("User role not recognized:", this.role);
            this.router.navigate(['/']);
          }
        },
        error => {
          console.error("Error fetching user role:", error);
          this.router.navigate(['/']);
        }
      );
  }
}
