import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /* private apiUrl = 'http://localhost:8080/api/v1'; */
  private apiUrl = 'https://fakestoreapi.com';

  constructor(private httpClient: HttpClient) { }

  get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}${path}`);
  }

  post(path: string, body: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}${path}`, body);
  }
}
