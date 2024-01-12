import { Component, Input, OnInit } from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';

import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  standalone: true, 
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  imports: [FormsModule, NgIf, UpperCasePipe, MatAutocompleteModule,MatInputModule, ReactiveFormsModule ],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  cities: City[] = [];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private cityService: CityService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getCities();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getCities(): void{
    this.cityService.getCities()
    .subscribe(cities => this.cities = cities);
  }

  goBack(): void {
    this.location.back();
  }


  save(): void{
    if (this.hero){
      this.heroService.updateHero(this.hero)
      .subscribe( ()=> this.goBack());
    }
  }

  myControl = new FormControl('');
  options:  City[] = [];
}