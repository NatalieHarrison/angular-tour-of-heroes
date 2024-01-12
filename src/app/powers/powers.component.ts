import { Component } from '@angular/core';
import { Power } from '../power';
import { PowerService } from '../power.service';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrl: './powers.component.css'
})
export class PowersComponent {
  powers: Power[] =[];
  constructor(private powerService: PowerService){}

  ngOnInit(): void {
    this.getPowers();
  }

  getPowers(): void {
    this.powerService.getPowers()
    .subscribe(powers => this.powers = powers );
  }

  add(name:string):void {
    name = name.trim();
    if ( !name ) { return; }
    this.powerService.addPower( { name } as Power)
    .subscribe(power => {
      this.powers.push(power)
    })
  }
  
}
