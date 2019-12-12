import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})



export class RestService {


  /**
   * BASE API URL
   */
  apiUrl : string


  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) {
    this.apiUrl = "http://localhost:3000/api/";
   }


  /**
   * 
   * @param error 
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }


  /**
   * 
   * @param res 
   */
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


  /**
   * 
   */
  getMeals(): Observable<any> {
    let url = this.apiUrl + "meals";
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }


  /**
   * 
   * @param id 
   */
  getMeal(id:any): Observable<any> {
    let url = this.apiUrl + "meal/" + id;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getMealWithIngredients(id:any): Observable<any> {
    let url = this.apiUrl + "mealwithingredient/" + id;
    return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
  }

  /**
   * 
   */
  getIngredients(): Observable<any> {
    let url = this.apiUrl + "ingredients";
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }


  /**
   * 
   * @param id 
   */
  getIngredient(id:any): Observable<any> {
    let url = this.apiUrl + "ingredient/" + id;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }




  /**
   * 
   * @param user 
   */
  getUser(user:any): Observable<any> {

    let url = this.apiUrl + 'LoginData/' + user['email'];

    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )

  }

}
