import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PeopleListViewComponent } from './people-list-view/people-list-view.component';
import { PlanetsListViewComponent } from './planets-list-view/planets-list-view.component';
import { MoviesListViewComponent } from './movies-list-view/movies-list-view.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { PersonDetailViewComponent } from './person-detail-view/person-detail-view.component';
import { PlanetDetailViewComponent } from './planet-detail-view/planet-detail-view.component';
import { MovieDetailViewComponent } from './movie-detail-view/movie-detail-view.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { addPersonUrlReducer } from './reducers/url.reducer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    PeopleListViewComponent,
    PlanetsListViewComponent,
    MoviesListViewComponent,
    HeaderComponent,
    PersonDetailViewComponent,
    PlanetDetailViewComponent,
    MovieDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    // StoreModule.forRoot(reducers, { metaReducers }),
    // !environment.production ? StoreDevtoolsModule.instrument() : []
    StoreModule.forRoot({url: addPersonUrlReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
