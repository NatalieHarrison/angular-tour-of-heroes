import { Component } from '@angular/core';
import { Power } from '../power';
import { PowerService } from '../power.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-power-detail',
  templateUrl: './power-detail.component.html',
  styleUrl: './power-detail.component.css'
})
export class PowerDetailComponent {
  power: Power | undefined; 
  constructor (
    private route: ActivatedRoute, 
    private powerService: PowerService,
  ) {}

  ngOnInit() : void{
    this.getPower();
  }

  getPower(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.powerService.getPower(id)
    .subscribe(power => this.power = power);
  }

}
