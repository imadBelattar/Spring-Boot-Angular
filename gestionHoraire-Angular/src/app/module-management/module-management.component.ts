import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { Module } from '../model/Module';


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
    
  ]
})
export class ModuleManagementComponent implements OnInit {
  modules: Module[] = [];
  editedModule: Module | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchModules();
  }

  fetchModules(): void {
    this.http.get<Module[]>("http://localhost:8085/admin/modules")
      .subscribe(
        data => {
          this.modules = data;
        },
        (error: HttpErrorResponse) => {
          console.error("Error fetching modules:", error);
        }
      );
  }

  editModule(module: Module): void {
    this.editedModule = { ...module };
  }

  saveEditedModule(): void {
    if (!this.editedModule) {
      console.error('No edited module to save.');
      return;
    }

    this.http.put<Module>(`http://localhost:8085/admin/modules/${this.editedModule.intitule}`, this.editedModule)
      .subscribe(
        updatedModule => {
          console.log('Updated module:', updatedModule);
          const index = this.modules.findIndex(module => module.intitule === updatedModule.intitule);
          if (index !== -1) {
            this.modules[index] = updatedModule;
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Error updating module:', error);
        }
      );

    this.editedModule = null;
  }

  cancelEdit(): void {
    this.editedModule = null;
  }
}
