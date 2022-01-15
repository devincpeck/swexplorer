import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Person } from '../shared/models/person.interface';
import { Planet } from '../shared/models/planet.interface';
import { Movie } from '../shared/models/movie.interface';
import { SwapiResponse } from '../shared/models/swapi-response.interface';
import { catchError, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private baseUrl = 'https://swapi.dev/api/';
  people: Person[];
  planets: Planet[];
  movies: Movie[];
  private url: string;

  constructor(private httpClient: HttpClient) { }

  // getPeople(): Observable<Person[]> {
  getPeople(): Person[] {
    this.url = this.baseUrl + `people/`;
    this.httpClient.get<SwapiResponse>(this.url).subscribe(
      (data: SwapiResponse) => {
        this.people = data.results;
      }
    );
    return this.people;
  }

  getPlanets(): Planet[] {
    this.url = this.baseUrl + `planets/`;
    this.httpClient.get<SwapiResponse>(this.url).subscribe(
      (response) => {
        this.planets = response.results;
      }
    );
    return this.planets;
  }

  getPlanet(url: string): Observable<Planet> {
    return this.httpClient.get<Planet>(url)
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      );
  }

  getMovies(): Movie[] {
    this.url = this.baseUrl + `films/`;
    this.httpClient.get<SwapiResponse>(this.url).subscribe(
      (response) => {
        this.movies = response.results;
      }
    );
    return this.movies;
  }

  getMovie(url: string): Observable<Movie> {
    return this.httpClient.get<Movie>(url)
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      );
  }

  getPeople2(): Observable<SwapiResponse> {
    this.url = this.baseUrl + `people/`;
    return this.httpClient.get<SwapiResponse>(this.url);
  }

  getPerson(url: string): Observable<Person> {
    return this.httpClient.get<Person>(url)
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    // in a real world app, you may send the error to the server using some remote logging infrastructure
    // instead of just logging it to the console
    let errorMsg: string;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMsg = 'An error occurred:' + error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMsg = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    console.error(errorMsg);
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

