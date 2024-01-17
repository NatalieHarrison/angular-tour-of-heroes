import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { City } from '../city';
import { HeroesComponent } from '../heroes/heroes.component';
import { CityService } from '../city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
})
export class CitiesComponent {
  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
    .subscribe(cities => this.cities = cities );
  }
 
  add(name: string ): void {
    name = name.trim();
    if (!name ) { return; }
    this.cityService.addCity( { name } as City)
    .subscribe(city => {
      this.cities.push(city)
    })
  }

  delete(city:City): void{
    this.cities = this.cities.filter(c => c !== city);
    this.cityService.deleteCity(city.id).subscribe();
  }
}
