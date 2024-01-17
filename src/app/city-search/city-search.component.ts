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
  cities$!: Observable<City[]>;
  private searchTerms = new Subject<string>();

  constructor(private cityService: CityService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cities$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.cityService.searchCities(term)),
    );
  }
}
