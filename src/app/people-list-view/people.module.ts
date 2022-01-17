import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailViewComponent } from '../person-detail-view/person-detail-view.component';
import { PeopleListViewComponent } from './people-list-view.component';
import { SwapiService } from '../services/swapi.service';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
  declarations: [PeopleListViewComponent, PersonDetailViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    PeopleRoutingModule
  ],
  providers: [
    SwapiService
  ],
  exports: [
    PeopleListViewComponent
  ]
})
export class PeopleModule { }
