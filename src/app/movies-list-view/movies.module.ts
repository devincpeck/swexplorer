import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from '../services/swapi.service';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MoviesListViewComponent } from './movies-list-view.component';
import { MovieDetailViewComponent } from '../movie-detail-view/movie-detail-view.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [MoviesListViewComponent, MovieDetailViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatIconModule,
    MoviesRoutingModule
  ],
  providers: [
    SwapiService
  ],
  exports: [
    MoviesListViewComponent
  ]
})
export class MoviesModule { }
