import { Injectable } from '@angular/core';
import { ApiService } from '../apiService/api.service';
import { Intervention } from '../../models/intervention';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private apiService: ApiService) {}

  getInterventions(): Observable<Intervention[]>  {
    return this.apiService.get<Intervention[]>('/intervention/interventions');
  }
 

  deleteIntervention(enseignantEmail: string, moduleIntitule: string): Observable<string> {
    return this.apiService.delete<string>(
      `/intervention/deleteIntervention/${enseignantEmail}/${moduleIntitule}`, 
    
    );
  }
}
