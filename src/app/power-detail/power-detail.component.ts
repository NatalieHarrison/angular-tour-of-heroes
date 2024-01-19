import { Component } from '@angular/core';
import { Power } from '../power';
import { PowerService } from '../power.service';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-power-detail',
  templateUrl: './power-detail.component.html',
  styleUrl: './power-detail.component.css'
})
export class PowerDetailComponent {
  power: Power | undefined; 
  heroes: Hero[] = [];
  constructor (
    private route: ActivatedRoute, 
    private powerService: PowerService,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() : void{
    this.getPower();
    this.getHeroes();
  }

  getPower(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.powerService.getPower(id)
    .subscribe(power => this.power = power);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  goBack(): void{
    this.location.back()
  }

  save(): void{
    if (this.power){
      this.powerService.updatePower(this.power)
        .subscribe( () => {
          this.goBack()

          
          this.heroService.getHeroes().subscribe(heroes => {
            this.heroes = heroes
            for (let hero of this.heroes) {
              for (let power of hero.powers) {
                if (power.id === this.power?.id) {
                  power.name = this.power.name
                  this.heroService.updateHero(hero).subscribe()
                }
              }
            }
          })
        })
    }

    
  }

}
