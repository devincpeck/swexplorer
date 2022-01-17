import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SwapiService } from '../services/swapi.service';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

const ROUTES: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'people', loadChildren: () => import('../people-list-view/people.module').then(m => m.PeopleModule) },
  { path: 'planets', loadChildren: () => import('../planets-list-view/planets.module').then(m => m.PlanetsModule) },
  { path: 'movies', loadChildren: () => import('../movies-list-view/movies.module').then(m => m.MoviesModule) },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [
    SwapiService
  ]
})
export class HomeModule { }
