import { NgModule } from '@angular/core';
import { PersonDetailViewComponent } from '../person-detail-view/person-detail-view.component';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListViewComponent } from './people-list-view.component';

const ROUTES: Routes = [
  { path: '', component: PeopleListViewComponent },
  { path: ':name', component: PersonDetailViewComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
