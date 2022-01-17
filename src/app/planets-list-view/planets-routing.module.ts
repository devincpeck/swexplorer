import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsListViewComponent } from './planets-list-view.component';
import { PlanetDetailViewComponent } from '../planet-detail-view/planet-detail-view.component';

const ROUTES: Routes = [
  { path: '', component: PlanetsListViewComponent },
  { path: ':name', component: PlanetDetailViewComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
