import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../shared/models/person.interface';
import { SwapiService } from '../services/swapi.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-people-list-view',
  templateUrl: './people-list-view.component.html',
  styleUrls: ['./people-list-view.component.css']
})
export class PeopleListViewComponent implements OnInit {

  people$: Observable<Person[]>;
  people: Person[];
  url: Observable<string>;

  constructor(
    private swapiService: SwapiService,
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.url = this.store.select('url');
    this.swapiService.getPeople().subscribe(
      (response) => this.people = response.results
    );
  }

  onSelect(person: Person): void {
    this.store.dispatch({
      type: 'SET_URL',
      payload: person.url
    });
    this.router.navigateByUrl(`/people/` + person.name);
  }
}
