import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from '../app.state';
import { SwapiService } from '../services/swapi.service';
import { Movie } from '../shared/models/movie.interface';

@Component({
  selector: 'app-movie-detail-view',
  templateUrl: './movie-detail-view.component.html',
  styleUrls: ['./movie-detail-view.component.css']
})
export class MovieDetailViewComponent implements OnInit {

  url: string;
  movie$: Observable<Movie>;

  constructor(
    private store: Store<AppState>,
    private swapiService: SwapiService
  ) { }

  ngOnInit(): void {
    this.store.pipe(
      select('url'),
      take(1)
    ).subscribe(state => this.url = state);

    this.movie$ = this.swapiService.getMovie(this.url);
  }

}
