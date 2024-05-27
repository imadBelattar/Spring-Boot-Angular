import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Enseignant } from '../model/Enseignant';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  httpclient = inject(HttpClient);
  data: Enseignant[] = [];
  //filieres: Filiere[]=[]

  ngOnInit(): void {
    fetchData();
  }
  
  fetchData() {

    this.httpclient.get<Enseignant[]>("http://localhost:8080/admin/enseignants")
      .subscribe((data) => {
        this.data = data;
      });

  } 
  

}
function fetchData() {
  throw new Error('Function not implemented.');
}

