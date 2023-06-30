import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private basePath= 'http://localhost:8105/api/reservations'

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token') || '',
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  getAll(): Observable<Reservation> {
    return this.http.get<Reservation>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  create(item: any): Observable<Reservation> {
    return this.http.post<Reservation>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  update(id: any, item: any): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getReservationByTouristId(touristId: number): Observable<Reservation[]> {
    const url = `${this.basePath}?customerId=${touristId}`;
    return this.http.get<Reservation[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
}
