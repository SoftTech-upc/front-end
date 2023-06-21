import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Tourist } from 'src/app/tourists/model/tourist';
import { AgencyReview } from '../model/agency-review';

@Injectable({
  providedIn: 'root'
})
export class AgencyReviewService {
  basePath = "http://localhost:3000/agency_reviews"
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
  getByCustomerId(id: number): Observable<Tourist> {
    return this.http.get<Tourist>(`${this.basePath}/agencies/${id}/agency_reviews`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getById(id: number): Observable<AgencyReview> {
    return this.http.get<AgencyReview>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  update(id: any, item: any): Observable<AgencyReview> {
    return this.http.put<AgencyReview>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  create(item: any): Observable<AgencyReview> {
    return this.http.post<AgencyReview>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
