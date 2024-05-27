import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Module } from '../model/Module';
import { Enseignant } from '../model/Enseignant';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,]
})
export class CreateInterventionComponent implements OnInit {
  enseignants: Enseignant[] = [];
  modules: Module[] = [];
  selectedEnseignantId: string = "a.ahmed@uca.ac.ma";
  selectedModuleId: string = "isi";
  intitule: string = "";
  vhCoursInterv: number = 0;
  vhTDInterv: number = 0;
  vhTPInterv: number = 0;
  evaluationInterv: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchEnseignants();
    this.fetchModules();
  }

  fetchEnseignants() {
    this.http.get<Enseignant[]>("http://localhost:8085/admin/enseignants")
      .subscribe(data => {
        console.log("Enseignants:", data);
        this.enseignants = data;
      }, error => {
        console.error("Error fetching enseignants:", error);
      });
  }

  fetchModules() {
    this.http.get<Module[]>("http://localhost:8085/admin/modules")
      .subscribe(data => {
        console.log("Modules:", data);
        this.modules = data;
      }, error => {
        console.error("Error fetching modules:", error);
      });
  }

  createIntervention() {
    const interventionData = {
      interventionId: {
        emailEnseignant: this.selectedEnseignantId,
        intituleModule: this.selectedModuleId
      },
      enseignant: {
        email: this.selectedEnseignantId
      },
      module: {
        intitule: this.selectedModuleId
      },
      intitule: this.intitule,
      vhCoursInterv: this.vhCoursInterv,
      vhTDInterv: this.vhTDInterv,
      vhTPInterv: this.vhTPInterv,
      evaluationInterv: this.evaluationInterv
    };

    this.http.post("http://localhost:8085/admin/interventions", interventionData)
      .subscribe(
        response => {
          console.log("Intervention created successfully:", response);
          // Show success message
          alert('Intervention created successfully!');
          // Reset form
          this.resetForm();
        },
        (error: HttpErrorResponse) => {
          console.error("Error creating intervention:", error);
          alert(`Error creating intervention: ${error.message}`);
        }
      );
  }

  resetForm() {
    // Reset form fields to their initial values
    this.selectedEnseignantId = "a.ahmed@uca.ac.ma";
    this.selectedModuleId = "isi";
    this.intitule = "";
    this.vhCoursInterv = 0;
    this.vhTDInterv = 0;
    this.vhTPInterv = 0;
    this.evaluationInterv = 0;
  }

  isValidForm(): boolean {
    return !!this.selectedEnseignantId && !!this.selectedModuleId && !!this.intitule &&
           this.vhCoursInterv > 0 && this.vhTDInterv > 0 && this.vhTPInterv > 0 && this.evaluationInterv > 0;
  }
}
