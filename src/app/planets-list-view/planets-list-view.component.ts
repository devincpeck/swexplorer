import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { SwapiService } from '../services/swapi.service';
import { Planet } from '../shared/models/planet.interface';

@Component({
  selector: 'app-planets-list-view',
  templateUrl: './planets-list-view.component.html',
  styleUrls: ['./planets-list-view.component.css']
})
export class PlanetsListViewComponent implements OnInit {

  planets$: Observable<Planet[]>;
  planets: Planet[];
  url: Observable<string>;

  constructor(
    private swapiService: SwapiService,
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.url = this.store.select('url');
    this.swapiService.getPlanets().subscribe(
      (response) => this.planets = response.results
    );
  }

  onSelect(planet: Planet): void {
    this.store.dispatch({
      type: 'SET_URL',
      payload: planet.url
    });
    this.router.navigateByUrl(`/planets/` + planet.name);
  }
}
