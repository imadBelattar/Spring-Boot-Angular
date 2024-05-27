import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Intervention } from '../model/Intervention';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-intervention',
  templateUrl: './listintervention.component.html',
  styleUrls: ['./listintervention.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    
  ]
})
export class ListInterventionComponent implements OnInit {
  enseignantEmail: string | undefined;
  interventions: Intervention[] = [];
  editedIntervention: Intervention | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getInterventionsByEnseignantEmail(): void {
    if (!this.enseignantEmail) {
      console.error('Enseignant email is required.');
      return;
    }

    this.http.get<Intervention[]>(`http://localhost:8085/admin/interventions/${this.enseignantEmail}`)
      .subscribe(
        interventions => {
          this.interventions = interventions;
        },
        error => {
          console.error('Error fetching interventions:', error);
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

    this.http.put<Intervention>(
      `http://localhost:8085/admin/update/${this.editedIntervention.interventionId}`, 
      this.editedIntervention
    ).subscribe(
      updatedIntervention => {
        console.log('Updated intervention:', updatedIntervention);
        const index = this.interventions.findIndex(intervention => intervention.interventionId === updatedIntervention.interventionId);
        if (index !== -1) {
          this.interventions[index] = updatedIntervention;
        }
        this.editedIntervention = null;
      },
      error => {
        console.error('Error updating intervention:', error);
      }
    );
  }

  cancelEdit(): void {
    this.editedIntervention = null;
  }
}
