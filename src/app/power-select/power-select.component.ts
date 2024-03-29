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
    powers: Power[] =[]; // holds an array of power objects 


    @Output() selectionChangeEvent = new EventEmitter<Power[]>();


    constructor(private powerService: PowerService) { }

    ngOnInit(): void {
        this.getPowers();
    }

    getPowers(): void {
        this.powerService.getPowers()
        .subscribe(powers => this.powers = powers)
    }

    selectionChanged(event: MatSelectChange): void {
        this.selectionChangeEvent.emit(event.value)
    }
}
