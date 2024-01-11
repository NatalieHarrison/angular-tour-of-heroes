import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', city: {id: 1, name: 'Boston'}},
      { id: 13, name: 'Bombasto', city: {id: 2, name: 'New York'} },
      { id: 14, name: 'Celeritas', city: {id: 3, name: 'Washington DC'} },
      { id: 15, name: 'Magneta', city: {id: 4, name: 'Atlanta'} },
      { id: 16, name: 'RubberMan',city: {id: 1, name: 'Boston'}},
      { id: 17, name: 'Dynama' , city: {id: 6, name: 'Miami'}},
      { id: 18, name: 'Dr. IQ', city: {id: 1, name: 'Boston'} },
      { id: 19, name: 'Magma', city: {id: 7, name: 'Austin'} },
      { id: 20, name: 'Tornado', city: {id: 8, name: 'Seattle'} },
    ];

    const cities = [
      { id: 1, name: 'Boston'},
      { id: 2, name: 'New York' },
      { id: 3, name: 'Washington DC' },
      { id: 4, name: 'Atlanta'},
      { id: 5, name: 'Orlando' },
      { id: 6, name: 'Miami'},
      { id: 7, name: 'Austin'},
      { id: 8, name: 'Denver'},
      { id: 9, name: 'Seattle'},
      { id: 10, name: 'Las Vegas'},
    ]
    return {heroes, cities};
  }

    // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
