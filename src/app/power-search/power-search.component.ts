import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Power } from '../power';
import { PowerService } from '../power.service';

@Component({
  selector: 'app-power-search',
  templateUrl: './power-search.component.html',
  styleUrl: './power-search.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule]
})
export class PowerSearchComponent {
  powers: Power[] = [];
  powersForm = new FormControl('');

  constructor(
    private powerService: PowerService
  ) {}

  ngOnInit(): void{
    this.getPowers();
  }

  getPowers(): void{
    this.powerService.getPowers()
    .subscribe(powers => this.powers = powers);
  }


}
