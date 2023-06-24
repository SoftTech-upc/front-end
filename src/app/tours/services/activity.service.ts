import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Activity } from '../model/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private basePath= 'http://localhost:3000/activities'

  httpOptions = {
    headers: new HttpHeaders({
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

  getAll(): Observable<Activity> {
    return this.http.get<Activity>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getById(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  create(item: any): Observable<Activity> {
    return this.http.post<Activity>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  update(id: any, item: any): Observable<Activity> {
    return this.http.put<Activity>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getActivitiesByTourId(tourId: number): Observable<Activity[]> {
    const url = `${this.basePath}?tourId=${tourId}`; 
    return this.http.get<Activity[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  
}
