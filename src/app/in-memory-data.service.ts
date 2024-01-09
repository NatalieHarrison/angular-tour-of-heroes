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
      { id: 1, city: 'Boston'},
      { id: 2, city: 'New York' },
      { id: 3, city: 'Washington DC' },
      { id: 4, city: 'Atlanta'},
      { id: 5, city: 'Orlando' },
      { id: 6, city: 'Miami'},
      { id: 7, city: 'Austin'},
      { id: 8, city: 'Denver'},
      { id: 9, city: 'Seattle'},
      { id: 10, city: 'Las Vegas'}
    ]
    return {heroes};
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
