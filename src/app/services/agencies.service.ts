import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  private url='http://localhost:3000/agencies'
  constructor(private http: HttpClient) { }

  get(): any{
    return this.http.get(this.url)
  }

  
}
