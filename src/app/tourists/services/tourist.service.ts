import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable, retry, throwError} from "rxjs";
import {Tourist} from "../model/tourist";
import { Credentials } from 'src/app/auth/model/credentials';

@Injectable({
  providedIn: 'root'
})
export class TouristService {
  basePath = "http://localhost:8105/api/tourists"

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

  getAll(): Observable<Tourist> {
    return this.http.get<Tourist>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getById(id: number): Observable<Tourist> {
    return this.http.get<Tourist>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  update(id: any, item: any): Observable<Tourist> {
    return this.http.put<Tourist>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  login(cards: Credentials){
    return this.http.post('http://localhost:8105/login', cards,{
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>)=>{
      const body = response.body;
      const headers =  response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ','');

      localStorage.setItem('token', token);

      return body;
    }))
  }

  getToken(){
    return localStorage.getItem('token');
  }


}
