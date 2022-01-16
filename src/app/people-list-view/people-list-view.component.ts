import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  private pageSize = 10;
  private start = 0;
  private end = this.pageSize;
  url: Observable<string>;
  displayedColumns: string[] = ['name'];

  constructor(
    private swapiService: SwapiService,
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    // this.people$ = this.swapiService.getPeople();
    // this.people$.subscribe((person) => console.log(person));
    // this.people = this.swapiService.getPeople();
    this.url = this.store.select('url');
    this.swapiService.getPeople2().subscribe(
      (response) => this.people = response.results
    );
  }

  onSelect(person: Person): void {
    // console.log(person?.url);
    // this.store.dispatch()
    // this.router.navigate(['/person'], { state: { data: { person }}});
    this.store.dispatch({
      type: 'SET_URL',
      payload: person.url
    });
    this.router.navigateByUrl('/person');
  }
}
