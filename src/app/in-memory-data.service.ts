import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
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
