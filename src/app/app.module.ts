import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PowersComponent } from './powers/powers.component';
import { PowerDetailComponent } from './power-detail/power-detail.component';
import { PowerSearchComponent } from './power-search/power-search.component';
import { CommonModule } from '@angular/common';
import { CitySelectComponent } from './city-select/city-select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Output, EventEmitter } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    HeroesComponent,
    HeroSearchComponent,
    CitiesComponent,
    CityDetailComponent,
    CitySearchComponent,
    PowersComponent,
    PowerDetailComponent,
    CitySelectComponent,
  ],
  imports: [
    //Angular Modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //Angular Material Modules
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    CommonModule,
    AppRoutingModule,
    HeroDetailComponent,
    PowerSearchComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }