import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PopupMessageComponent } from '../components/popup-message/popup-message.component';
import { Enseignant } from '../models/Enseignant';
import { Module } from '../models/Module';

@Component({
  selector: 'app-create-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    PopupMessageComponent,
    MatSelectModule
  ]
})
export class CreateInterventionComponent implements OnInit {
  enseignants: Enseignant[] = [];
  modules: Module[] = [];
  selectedEnseignantId: string = "a.ahmed@uca.ac.ma";
  selectedModuleId: string = "Java Entreprise Edition (JEE)";
  intitule: string = "Insérer l'intitulé ici...";
  vhCoursInterv: number = 0;
  vhTDInterv: number = 0;
  vhTPInterv: number = 0;
  evaluationInterv: number = 0;
  msg: string = '';
  status: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchEnseignants();
    this.fetchModules();
  }

  fetchEnseignants() {
    this.http.get<Enseignant[]>("http://localhost:8081/enseignants")
      .subscribe(data => {
        this.enseignants = data;
      }, error => {
        console.error("Error fetching enseignants:", error);
      });
  }

  fetchModules() {
    this.http.get<Module[]>("http://localhost:8081/modules")
      .subscribe(data => {
        this.modules = data;
      }, error => {
        console.error("Error fetching modules:", error);
      });
  }

  createIntervention() {
    this.msg = '';
    this.status = '';
    // Prepare the intervention data
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

    if (!this.isValidForm()) {
      this.msg = 'Veuillez remplir tous les champs !';
      this.status = 'error';
      setTimeout(() => {
        this.resetForm();
      }, 2500);
      return;
    }

    console.log("Creation...., intervention data:", interventionData);
    this.http.post("http://localhost:8081/api/v1/administrateur/createIntervention", interventionData, { responseType: 'text' as 'json' })
      .subscribe(
        response => {
          console.log("Response received:", response);
          this.handleSuccess(response.toString());
        },
        (error: HttpErrorResponse) => {
          console.error("Error creating intervention:", error);
          this.handleError(error);
        }
      );
  }

  handleSuccess(response: string) {
    this.status = 'success';
    this.msg = response;
    setTimeout(() => {
      this.resetForm();
    }, 2500);
  }

  handleError(error: HttpErrorResponse) {
    switch (error.status) {
      case 409: // Conflit
        this.msg = "L'intervention existe déjà !";
        break;
      case 400: // Mauvaise requête
        this.msg = 'Erreur de validation : ';
        break;
      case 500: // Erreur interne du serveur
        this.msg = 'Une erreur inattendue est survenue : ';
        break;
      default:
        // Message d'erreur général pour d'autres statuts
        this.msg = 'Erreur lors de la création de l\'intervention !';
    }
    setTimeout(() => {
      this.resetForm();
    }, 2500);
  }

  resetForm() {
    // Reset form fields to their initial values
    this.selectedEnseignantId = "a.ahmed@uca.ac.ma";
    this.selectedModuleId = "Java Entreprise Edition (JEE)";
    this.intitule = "Insérer l'intitulé ici...";
    this.vhCoursInterv = 0;
    this.vhTDInterv = 0;
    this.vhTPInterv = 0;
    this.evaluationInterv = 0;
    this.msg = '';
    this.status = '';
  }

  isValidForm(): boolean {
    return !!this.selectedEnseignantId && !!this.selectedModuleId && !!this.intitule &&
      this.vhCoursInterv > 0 && this.vhTDInterv > 0 && this.vhTPInterv > 0 && this.evaluationInterv > 0;
  }
}
