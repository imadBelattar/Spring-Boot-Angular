import { Injectable } from '@angular/core';
import { ApiService } from '../apiService/api.service';
import { Intervention } from '../../models/intervention';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private apiService: ApiService) {}

  getInterventions(): Observable<Intervention[]>  {
    return this.apiService.get<Intervention[]>('/administrateur/interventions');
  }
}
