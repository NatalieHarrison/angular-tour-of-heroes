import { Component, Input, OnInit } from '@angular/core';
import {NgIf, UpperCasePipe, NgFor, CommonModule} from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';

import { City } from '../city';
import { CityService } from '../city.service';
import { PowerService } from '../power.service';
import { Power } from '../power';
import { Router } from 'express';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  cities: City[] = [];
  powers: Power[] = [];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private cityService: CityService,
    private powerService: PowerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getCities();
    this.getPowers();
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

  getPowers(): void {
    this.powerService.getPowers()
      .subscribe(powers => this.powers = powers);
  }
  
  goBack(): void {
    this.location.back();
  }
 
  delete(hero: Hero, powerID: number ): void{
    if (hero?.powers){ //if hero is not null, check if hero.powers is null
      hero.powers = hero.powers.filter(p => p.id !== powerID);
    }

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