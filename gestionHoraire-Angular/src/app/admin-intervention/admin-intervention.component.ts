import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Intervention } from '../model/Intervention';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-intervention',
  templateUrl: './admin-intervention.component.html',
  styleUrls: ['./admin-intervention.component.css'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,]
})
export class AdminInterventionComponent implements OnInit {
  interventions: Intervention[] = [];
  editedIntervention: Intervention | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchInterventions();
  }

  fetchInterventions(): void {
    this.http.get<Intervention[]>("http://localhost:8085/admin/interventions")
      .subscribe(
        data => {
          this.interventions = data;
        },
        (error: HttpErrorResponse) => {
          console.error("Error fetching interventions:", error);
        }
      );
  }

  editIntervention(intervention: Intervention): void {
    this.editedIntervention = { ...intervention };
  }

  saveEditedIntervention(): void {
    if (!this.editedIntervention) {
      console.error('No edited intervention to save.');
      return;
    }

    this.http.put<Intervention>("http://localhost:8085/admin/update", this.editedIntervention)
      .subscribe(
        updatedIntervention => {
          console.log('Updated intervention:', updatedIntervention);
          const index = this.interventions.findIndex(intervention =>
            intervention.interventionId.emailEnseignant === updatedIntervention.interventionId.emailEnseignant &&
            intervention.interventionId.intituleModule === updatedIntervention.interventionId.intituleModule
          );
          if (index !== -1) {
            this.interventions[index] = updatedIntervention;
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Error updating intervention:', error);
        }
      );

    this.editedIntervention = null;
  }

  cancelEdit(): void {
    this.editedIntervention = null;
  }
}
