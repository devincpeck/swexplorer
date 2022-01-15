import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MoviesListViewComponent } from './movies-list-view/movies-list-view.component';
import { PeopleListViewComponent } from './people-list-view/people-list-view.component';
import { PersonDetailViewComponent } from './person-detail-view/person-detail-view.component';
import { PlanetsListViewComponent } from './planets-list-view/planets-list-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'people', component: PeopleListViewComponent },
  { path: 'planets', component: PlanetsListViewComponent },
  { path: 'movies', component: MoviesListViewComponent },
  { path: 'person', component: PersonDetailViewComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
