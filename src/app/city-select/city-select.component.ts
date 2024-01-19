import { Component, Output, EventEmitter } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrl: './city-select.component.css'
})
export class CitySelectComponent {
  cities: City[] = [];
  @Output() selectionChangeEvent =  new EventEmitter<{ name: string; id: number }>();

  constructor(private cityService: CityService){}

  ngOnInit(): void{
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
      .subscribe(cities => this.cities = cities);
  }

  citySelectionChanged(event: MatSelectChange): void { //value emitting is the city id 
    this.selectionChangeEvent.emit(event.value)
    console.log(event.value)
  }
}
