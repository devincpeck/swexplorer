import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { SwapiService } from '../services/swapi.service';
import { Movie, MoviePresentation } from '../shared/models/movie.interface';

@Component({
  selector: 'app-movies-list-view',
  templateUrl: './movies-list-view.component.html',
  styleUrls: ['./movies-list-view.component.css']
})
export class MoviesListViewComponent implements OnInit {

  movies$: Observable<Movie[]>;
  movies: Movie[];
  moviesPresentation: MoviePresentation[];
  url: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private swapiService: SwapiService
  ) { }

  ngOnInit(): void {
    this.url = this.store.select('url');
    this.swapiService.getMovies().subscribe(
      (response) => this.movies = response.results,
      e => console.log(e),
      () => {
        this.mapToPresentation(this.movies)
      }
    );
  }

  /**
   * Maps movie.title attribute to moviePresentation.name.
   * Basically just used so that the ListViewComponent's table can be reusable as it displays {{ element.name }}.
   *
   * @param movies the movies returned from the http request
   * @returns a list of movies in presentation format
   */
  mapToPresentation(movies: Movie[]): MoviePresentation[] {
    this.moviesPresentation = movies.map(
      m => ({
        ...m,
        name: m.title,
      })
    );
    return this.moviesPresentation;
  }

  onSelect(movie: Movie): void {
    this.store.dispatch({
      type: 'SET_URL',
      payload: movie.url
    });
    this.router.navigateByUrl(`/movies/` + movie.title);
  }
}
