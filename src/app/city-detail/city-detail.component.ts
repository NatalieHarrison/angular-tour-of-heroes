import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';
import { Location } from '@angular/common';
import { City } from '../city';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrl: './city-detail.component.css',
})
export class CityDetailComponent {
  city: City | undefined;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private location: Location
  ){}

  ngOnInit(): void{
    this.getCity();
  }

  getCity(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cityService.getCity(id)
      .subscribe(city => this.city = city);
  }


}
