import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', city: 'Chicago' },
      { id: 13, name: 'Bombasto', city: 'Denver' },
      { id: 14, name: 'Celeritas' , city: ''},
      { id: 15, name: 'Magneta', city: 'Raleigh' },
      { id: 16, name: 'RubberMan', city: 'Denver' },
      { id: 17, name: 'Dynama', city: 'Austin' },
      { id: 18, name: 'Dr. IQ', city: 'Chicago' },
      { id: 19, name: 'Magma', city: 'Chicago' },
      { id: 20, name: 'Tornado', city: 'Chicago' }
    ];
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
