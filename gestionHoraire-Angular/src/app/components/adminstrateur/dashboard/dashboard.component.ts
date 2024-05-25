import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { Intervention } from '../../../models/intervention';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  interventions: Intervention[] = [];

  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.adminService.getInterventions().subscribe((interventions) => {
      this.interventions = interventions;
    });
  }
}
