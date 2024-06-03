import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { PopupMessageComponent } from '../../popup-message/popup-message.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InterventionHt } from '../../../models/interventionHt';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enseigant-dashboard',
  standalone: true,
  imports: [CardComponent, PopupMessageComponent, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  templateUrl: './enseigant-dashboard.component.html',
  styleUrl: './enseigant-dashboard.component.css'
})
export class EnseigantDashboardComponent implements OnInit {


  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.getInterventionsByEnseignantEmail();
  }

  interventions: InterventionHt[] = [];

  enseignantEmail: string = localStorage.getItem("userEmail") || '';


  getInterventionsByEnseignantEmail(): void {
    if (!this.enseignantEmail) {
      console.error('Enseignant email is required.');
      return;
    }

    this.http.get<InterventionHt[]>(`http://localhost:8081/interventions/${this.enseignantEmail}`)
      .subscribe(
        interventions => {
          this.interventions = interventions;
        },
        error => {
          console.error('Error fetching interventions:', error);
        }
      );
  }


}
