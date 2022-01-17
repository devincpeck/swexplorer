import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from '../app.state';
import { SwapiService } from '../services/swapi.service';
import { Planet } from '../shared/models/planet.interface';

@Component({
  selector: 'app-planet-detail-view',
  templateUrl: './planet-detail-view.component.html',
  styleUrls: ['./planet-detail-view.component.css']
})
export class PlanetDetailViewComponent implements OnInit {

  url: string;
  planet$: Observable<Planet>;

  constructor(
      private swapiService: SwapiService,
      private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.store.pipe(
      select('url'),
      take(1)
    ).subscribe(state => this.url = state);

    this.planet$ = this.swapiService.getPlanet(this.url);
  }

}
