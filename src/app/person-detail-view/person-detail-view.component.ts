import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { SwapiService } from '../services/swapi.service';
import { Person } from '../shared/models/person.interface';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-person-detail-view',
  templateUrl: './person-detail-view.component.html',
  styleUrls: ['./person-detail-view.component.css']
})
export class PersonDetailViewComponent implements OnInit {

  person$: Observable<Person>;
  url: string;

  constructor(
    private swapiService: SwapiService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.pipe(
      select('url'),
      take(1)
    ).subscribe(state => this.url = state);

    this.person$ = this.swapiService.getPerson(this.url);
  }

}
