import { Component } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrl: './city-select.component.css'
})
export class CitySelectComponent {
  cities: City[] = [];

  constructor(private cityService: CityService){}

  ngOnInit(): void{
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
      .subscribe(cities => this.cities = cities);


  }
}
