import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { KeycloakService } from '../../keycloak/keycloak.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) { }
  userName!: string;
  userRole: string = localStorage.getItem('role') || '';
  dashboardLink: string = this.userRole === "ADMINISTRATEUR" ? "/adminDashboard" : "/enseignantDashboard";

  ngOnInit(): void {
    this.userName = localStorage.getItem('username') || 'le nom d\'utilisateur';
  }

  async logout() {
    this.keycloakService.logout();
  }


}
