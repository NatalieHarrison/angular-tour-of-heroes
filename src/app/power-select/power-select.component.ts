import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Power } from '../power';
import { PowerService } from '../power.service';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-power-select',
  templateUrl: './power-select.component.html',
  styleUrl: './power-select.component.css'
})
export class PowerSelectComponent {
  $powers: Observable<Power[]> | null = null;
  powersForm = new FormControl([]); //when no value is selected, it's an empty array. When a value is selected it should look like powers: [{id:2, name: 'super strength}, ]

  @Output() selectionChangeEvent = new EventEmitter<Power[]>();


  constructor( private powerService: PowerService){}

  ngOnInit(): void {
    this.getPowers();
  }

  getPowers(): void{
    this.$powers = this.powerService.getPowers();
  }

  selectionChanged(event: MatSelectChange): void{
    this.selectionChangeEvent.emit(event.value)
  }
}
