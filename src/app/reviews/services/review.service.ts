import { Injectable } from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import {Customer} from "../../customers/model/customer";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  basePath = "http://localhost:3000/"
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
  getByCustomerId(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.basePath}/agencies/${id}/agency_reviews`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
