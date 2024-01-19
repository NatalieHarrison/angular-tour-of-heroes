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
    private location: Location
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

  goBack(): void{
    this.location.back()
  }

  save(): void{
    //if hero.city.id matches with this.city.id 
    if (this.city){
      this.cityService.updateCity(this.city)
        .subscribe( () => { //doing the stuff below while it's updating in the city service
          this.goBack()
          this.heroService.getHeroes().subscribe(heroes => { //getting one obejct of heroes and declaring it 
            this.heroes = heroes
            for (let hero of this.heroes) {
              if (hero.city.id === this.city?.id) {
                hero.city = this.city
                this.heroService.updateHero(hero).subscribe() //use after a call to service
              }
            }
          }) 
        })
    }
  }
}