import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../hero';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


import { City } from '../city';
import { CityService } from '../city.service';
import { PowerService } from '../power.service';
import { Power } from '../power';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  cities: City[] = [];
  powers: Power[] = [];
  powerIn!: Power;

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

  add(): void {
    console.log(this.powerIn)
    let x = 0;
        if(this.powerIn != null)
        {
            for(let power of this.powers){
              
                if (power.id == this.powerIn.id) {
                  console.log(this.powers)
                    for(let heroPower of this.hero!.powers) {
                        if(heroPower.id == power.id) {
                        x = 1;
                
                        }
                    }
                    if(x != 1) {
                      console.log(this.hero)
                        this.hero?.powers.push(power); 
                        for(let z=0; z < this.hero!.powers.length; z++) {
                            if(this.hero?.powers[z].id == 0) {
                                this.hero.powers.splice(z,1);
                            }
                        }
                    }
                }
            }
        }
        else {
            window.alert("power must be selected");
        }

    

  }

  remove(): void {

  }
  delete(hero: Hero, powerID: number ): void{
    if (hero?.powers){ //if hero is not null, check if hero.powers is null
      hero.powers = hero.powers.filter(p => p.id !== powerID);
    }

  }

  save(): void{
    console.log(this.hero)
    if (this.hero){
      this.heroService.updateHero(this.hero)
      .subscribe( ()=> this.goBack());
    }
  }

  myControl = new FormControl('');
  options:  City[] = [];
}