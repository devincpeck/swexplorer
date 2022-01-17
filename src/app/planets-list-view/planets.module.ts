import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiService } from '../services/swapi.service';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlanetsListViewComponent } from './planets-list-view.component';
import { PlanetDetailViewComponent } from '../planet-detail-view/planet-detail-view.component';
import { PlanetsRoutingModule } from './planets-routing.module';

@NgModule({
  declarations: [PlanetsListViewComponent, PlanetDetailViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    PlanetsRoutingModule
  ],
  providers: [
    SwapiService
  ],
  exports: [
    PlanetsListViewComponent
  ]
})
export class PlanetsModule { }
