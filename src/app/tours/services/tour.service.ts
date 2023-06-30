import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Tour} from "../model/tour";

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private basePath= 'http://localhost:8105/api/tours'

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token') || '',
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) {
  }

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

  getAll(): Observable<Tour> {
    return this.http.get<Tour>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getAllByScore(): Observable<Tour> {
    return this.http.get<Tour>(this.basePath + "/score", this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getAllByNew(): Observable<Tour> {
    return this.http.get<Tour>(this.basePath + "/offer", this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getAllByDate(): Observable<Tour> {
    return this.http.get<Tour>(this.basePath + "/date", this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getById(id: number): Observable<Tour> {
    return this.http.get<Tour>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  create(item: any): Observable<Tour> {
    return this.http.post<Tour>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  update(id: any, item: any): Observable<Tour> {
    return this.http.put<Tour>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  delete(id: any): Observable<Tour> {
    return this.http.delete<Tour>(`${this.basePath}/${id}`, this.httpOptions)
          .pipe(
              retry(2),
              catchError(this.handleError));
  }
  getTourByTourId(agencyId: number): Observable<Tour[]> {
    const url = `${this.basePath}?agencyId=${agencyId}`;
    return this.http.get<Tour[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
}
