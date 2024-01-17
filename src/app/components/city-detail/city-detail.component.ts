import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city.service';
import { Location } from '@angular/common';
import { City } from '../city';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrl: './city-detail.component.css',
})
export class CityDetailComponent {
  city: City | undefined;
  heroes: Hero[] = [];

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private heroService: HeroService,
  ){}

  ngOnInit(): void{
    this.getCity();
    this.getHeroes();

  }

  getCity(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cityService.getCity(id)
      .subscribe(city => this.city = city);
  }

  getHeroes(): void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}
