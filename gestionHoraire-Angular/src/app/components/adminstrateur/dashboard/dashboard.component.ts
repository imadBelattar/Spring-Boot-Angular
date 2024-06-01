import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { Intervention } from '../../../models/intervention';
import { AdminService } from '../../../services/admin/admin.service';
import { PopupMessageComponent } from '../../popup-message/popup-message.component';
import { ApiResponse } from '../../../models/api-response';
import { InterventionHt } from '../../../models/interventionHt';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, PopupMessageComponent, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private adminService: AdminService, private http: HttpClient) { }
  interventions: Intervention[] = [];
  editedIntervention: Intervention| null = null;
  message: string = '';
  status: string = '';

  ngOnInit(): void {
    this.getAllIntervs();
  }


  getAllIntervs(): void {
    this.adminService.getInterventions().subscribe((res: ApiResponse<Intervention[]>) => {
      this.interventions = res.data;
    });
  }
  workWithMessage(time: number, msg: string): void {
    this.message = msg;
    setTimeout(() => {
      this.message = '';
    }, time);
  }

  deleteIntervention(enseignantEmail: string, moduleIntitule: string): void {
    this.adminService.deleteIntervention(enseignantEmail, moduleIntitule).subscribe((res) => {
      if (res === 'Intervention supprimée avec succès!') {
        this.status = 'success';
        this.interventions = this.interventions.filter(intervention =>
          !(intervention.enseignant.email === enseignantEmail && intervention.moduleIntitule === moduleIntitule)
        );
      }
      // Display the deletion message.
      this.workWithMessage(3000, res);
    });
  }

  
  scrollToEdit() {
    const editForm = document.getElementById('editInterventionForm');
    if (editForm) {
      editForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  editIntervention(intervention: Intervention): void {
    this.editedIntervention = { ...intervention};
    setTimeout(() => {
      this.scrollToEdit();
    } , 0);
  }

  saveEditedIntervention(): void {
    if (!this.editedIntervention) {
      console.error('No edited intervention to save.');
      return;
    }

    this.http.put<InterventionHt>("http://localhost:8080/api/v1/administrateur/update", this.editedIntervention)
      .subscribe(
        updatedIntervention => {
          if(updatedIntervention){
            this.getAllIntervs();
            this.status = 'success';
            this.workWithMessage(3000, 'Intervention mise à jour avec succès.');
          }

        },
        (error: HttpErrorResponse) => {
          this.status = 'error';
          this.workWithMessage(3000, 'Erreur lors de la mise à jour de l\'intervention.');
        }
      );

    this.editedIntervention = null;
  }

  cancelEdit(): void {
    this.editedIntervention = null;
  }


}
