import { Component, Output, EventEmitter } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
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
