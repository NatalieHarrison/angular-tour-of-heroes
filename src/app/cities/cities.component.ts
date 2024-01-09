import { Component } from '@angular/core';
import { CITIES } from '../mock.cities';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
})
export class CitiesComponent {
  cities = CITIES;

}
