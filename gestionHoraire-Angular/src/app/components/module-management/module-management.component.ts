import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { Module } from '../../models/Module';
import { Filiere } from '../../models/Filiere';
import { MatSelectModule } from '@angular/material/select';
import { ModuleDTO } from '../../models/module-dto';
import { PopupMessageComponent } from '../popup-message/popup-message.component';



@Component({
  selector: 'app-module-management',
  templateUrl: './module-management.component.html',
  styleUrls: ['./module-management.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    PopupMessageComponent
    
  ]
})
export class ModuleManagementComponent implements OnInit {
  modules: Module[] = [];
  filieres: Filiere[] = [];
  editedModule: ModuleDTO | null = null;
  msg: string = '';
  status: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchModules();
    this.fetchFilieres();
  }

  fetchModules(): void {
    this.http.get<Module[]>("http://localhost:8080/modules")
      .subscribe(
        data => {
          this.modules = data;
        },
        (error: HttpErrorResponse) => {
          console.error("Error fetching modules:", error);
        }
      );
  }


  fetchFilieres() {
    this.http.get<Filiere[]>("http://localhost:8080/filieres")
      .subscribe(data => {
        console.log('Filieres:', data);
        this.filieres = data;
      }, error => {
        console.error("Error fetching filieres:", error);
      });
  }



  editModule(module: Module): void {
    this.editedModule = { 
      intitule: module.intitule, 
      vhCours: module.volumeHoraireCours, 
      vhTD: module.volumeHoraireTD, 
      vhTP: module.volumeHoraireTP, 
      evaluation: module.evaluation, 
      filiereNom: module.filiere.nomFiliere 
    };
    console.log('Editing module as "ModuleDTO":');
    console.table(this.editedModule);
    setTimeout(() => {
      this.scrollToEdit();
    }, 0);
  }

  scrollToEdit() {
    const editForm = document.getElementById('editModuleForm');
    if (editForm) {
      editForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  saveEditedModule(): void {

    if (!this.validateEditModuleForm()) {
      console.error('Invalid module form data:', this.editedModule);
      this.msg = 'Veuillez remplir tous les champs !';
      this.status = 'error';
      setTimeout(() => {
        this.msg = '';
        this.status = '';
      }, 2500);
      return;
    }

    this.http.put<ModuleDTO>(`http://localhost:8080/updateModule`, this.editedModule)
      .subscribe(
        updatedModule => {
          console.log('Updated module:', updatedModule);
          this.fetchModules();
          this.msg = 'Module mis à jour avec succès.';
          this.status = 'success';
          setTimeout(() => {
            this.status = '';
            this.msg = '';
          }, 2500);
        },
        (error: HttpErrorResponse) => {
          console.error('Error updating module:', error);
          this.msg = 'Erreur lors de la mise à jour du module.';
          this.status = 'error';
          setTimeout(() => {
            this.status = '';
            this.msg = '';
          }, 2500);
        }
      );

    this.editedModule = null;
  }

  cancelEdit(): void {
    this.editedModule = null;
  }

  validateEditModuleForm(): boolean {
    if (!this.editedModule) {
      return false;
    }
  
    if (!this.editedModule.intitule || this.editedModule.intitule.trim().length === 0) {
      return false;
    }
    if (this.editedModule.vhCours === undefined || this.editedModule.vhCours === null) {
      return false;
    }
    if (this.editedModule.vhTD === undefined || this.editedModule.vhTD === null) {
      return false;
    }
    if (this.editedModule.vhTP === undefined || this.editedModule.vhTP === null) {
      return false;
    }
    if (!this.editedModule.evaluation) {
      return false;
    }
    if (!this.editedModule.filiereNom || this.editedModule.filiereNom.trim().length === 0) {
      return false;
    }
  
    return true;
  }
}
