import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailViewComponent } from '../movie-detail-view/movie-detail-view.component';
import { MoviesListViewComponent } from './movies-list-view.component';

const ROUTES: Routes = [
  { path: '', component: MoviesListViewComponent },
  { path: ':name', component: MovieDetailViewComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
