import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { Intervention } from '../../../models/intervention';
import { AdminService } from '../../../services/admin/admin.service';
import { PopupMessageComponent } from '../../popup-message/popup-message.component';
import { ApiResponse } from '../../../models/api-response';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, PopupMessageComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  interventions: Intervention[] = [];
  message: string = '';

  ngOnInit(): void {
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
        this.interventions = this.interventions.filter(intervention =>
          !(intervention.enseignant.email === enseignantEmail && intervention.moduleIntitule === moduleIntitule)
        );
      }
      // Display the deletion message.
      this.workWithMessage(3000, res);
    });
  }


}
