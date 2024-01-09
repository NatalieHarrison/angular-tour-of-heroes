import { Component } from '@angular/core';
import { CITIES } from '../mock.cities';
import { NgFor } from '@angular/common';
import { City } from '../city';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
})
export class CitiesComponent {
  cities = CITIES;

  selectedCity?: City;
  onSelect(city:City): void{
    this.selectedCity = city; 
  }
}
