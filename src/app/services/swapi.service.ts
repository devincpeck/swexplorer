import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Person } from '../shared/models/person.interface';
import { Planet } from '../shared/models/planet.interface';
import { Movie } from '../shared/models/movie.interface';
import { SwapiResponse } from '../shared/models/swapi-response.interface';
import { catchError, map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private baseUrl = 'https://swapi.dev/api/';
  private url: string;

  constructor(private httpClient: HttpClient) { }

  /**
   * Get a specific planet from the SW API.
   *
   * @param url the url of the planet
   * @returns an Observable of a planet
   */
  getPlanet(url: string): Observable<Planet> {
    return this.httpClient.get<Planet>(url)
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      );
  }

  /**
   * Get all planets from the SW API.
   *
   * @returns a typed response from the API including the results
   */
  getPlanets(): Observable<SwapiResponse> {
    this.url = this.baseUrl + `planets/`;
    return this.httpClient.get<SwapiResponse>(this.url)
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      );
  }

  /**
   * Get a specific movie from the SW API.
   *
   * @param url the url of the movie
   * @returns an Observable of a movie
   */
  getMovie(url: string): Observable<Movie> {
    return this.httpClient.get<Movie>(url)
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      );
  }

  /**
   * Get all movies from the SW API.
   *
   * @returns a typed response from the API including the results
   */
  getMovies(): Observable<SwapiResponse> {
    this.url = this.baseUrl + `films/`;
    return this.httpClient.get<SwapiResponse>(this.url)
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      );
  }

  /**
   * Get a specific person from the SW API.
   *
   * @param url the url of the person
   * @returns an Observable of a person
   */
  getPerson(url: string): Observable<Person> {
    return this.httpClient.get<Person>(url)
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      );
  }

  /**
   * Get all people from the SW API.
   *
   * @returns a typed response from the API including the results
   */
  getPeople(): Observable<SwapiResponse> {
    this.url = this.baseUrl + `people/`;
    return this.httpClient.get<SwapiResponse>(this.url)
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg: string;
    if (error.error instanceof ErrorEvent) {
      errorMsg = 'An error occurred:' + error.error.message;
    } else {
      errorMsg = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    console.error(errorMsg);
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
