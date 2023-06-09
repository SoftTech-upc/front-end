import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../../../components/header/header.component';
import { ServiceClass } from '../../model/service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url='http://localhost:3000/services'
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>(this.url)
  }

  agregarService(service: ServiceClass): Observable<ServiceClass> {
    return this.http.post<ServiceClass>(this.url, service);
  }

  actualizarService(service: ServiceClass): Observable<ServiceClass> {
    const url = `${this.url}/${service.id}`; // URL de la tarea específica que se va a actualizar
    return this.http.patch<ServiceClass>(url, service);
  }

}
