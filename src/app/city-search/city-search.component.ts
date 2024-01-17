import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.css'
})
export class CitySearchComponent {
  @Input() searchBoxValue: string = ''; //Input property for binding 
  @Output() citySelected = new EventEmitter<{ name: string; id: number }>(); // Emit an object with name and id
  cities$!: Observable<City[]>; //
  private searchTerms = new Subject<string>();

  constructor(private cityService: CityService) {}

  // method called when user types into search input. Pushes term into observable stream 
  search(term:string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void{
    this.cities$ = this.searchTerms.pipe(
      debounceTime(300), distinctUntilChanged(), switchMap((term: string) => this.cityService.searchCities(term)),
    );
  }

  selectCity(city: City): void {
    this.citySelected.emit({ name: city.name, id: city.id });
  }
}
