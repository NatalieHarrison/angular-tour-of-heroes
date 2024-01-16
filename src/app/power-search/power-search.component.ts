import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Power } from '../power';
import { PowerService } from '../power.service';
import { MatOptionSelectionChange } from '@angular/material/core';


@Component({
  selector: 'app-power-search',
  templateUrl: './power-search.component.html',
  styleUrl: './power-search.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule]
})
export class PowerSearchComponent {
  powers: Power[] = []; //getting the powers from the Power data
  powersForm = new FormControl([]); //when no value is selected, it's an empty array. When a value is selected it should look like powers: [{id:2, name: 'super strength}, ]
 
  @Output() selectionChangeEvent = new EventEmitter<Power[]>();

  constructor(
    private powerService: PowerService
  ) {}

  ngOnInit(): void{
    this.getPowers();
  }
  getPowers(): void{
    this.powerService.getPowers()
    .subscribe(powers => {
      console.log(powers)
      this.powers = powers
    });
  }
  selectionChanged(event: MatSelectChange): void {
    this.selectionChangeEvent.emit(event.value)
    console.log(event)
  }

}
