import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { City } from '../city';
import { Power } from '../power';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

	//properties --> constructors --> lifecycle hooks --> all other methods 
  heroes: Hero[] = [];

	constructor(private heroService: HeroService) {}

	selectedPowers: Power[] = []

  selectedCity: {name: string; id: number} = { 
		name: '', 
		id: 0 
	}; // Track the selected city
	

  onCitySelected(city: { name: string; id: number }): void {
    this.selectedCity = city;
  }

  onPowerSelected(powers: Power[]): void {
    this.selectedPowers = powers;
  }



  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    	.subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, city: City, powers: Power[]): void {
    name = name.trim();
    
    if (!name) {
      return;
    }
		
    if (!powers || powers.length == 0) { return; }

    this.heroService.addHero( { name, city, powers } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero)
    })
  }

	delete(hero: Hero):void {
		this.heroes = this.heroes.filter(h => h !== hero);
		this.heroService.deleteHero(hero.id).subscribe();
	}
}
