import { Injectable } from '@angular/core';
import { City } from './city';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citiesUrl = 'api/cities'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET cities from the server */
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.citiesUrl)
      .pipe(
        tap(_ => this.log('fetched cities')),
        catchError(this.handleError<City[]>('getCities', []))
      );
  }
  /** GET hero by id. Return `undefined` when id not found */
  getCityNo404<Data>(id: number): Observable<City> {
    const url = `${this.citiesUrl}/?id=${id}`;
    return this.http.get<City[]>(url)
      .pipe(
        map(cities => cities[0]), // returns a {0|1} element array
        tap(c=> {
          const outcome = c ? 'fetched' : 'did not find';
          this.log(`${outcome} city id=${id}`);
        }),
        catchError(this.handleError<City>(`getCity id=${id}`))
      );
  }


  /** GET hero by id. Will 404 if id not found */
  getCity(id: number): Observable<City> {
    const url = `${this.citiesUrl}/${id}`;
    return this.http.get<City>(url).pipe(
      tap(_ => this.log(`fetched city id=${id}`)),
      catchError(this.handleError<City>(`getCity id=${id}`))
    );
  }

  addCity(city: City): Observable<City> {
    return this.http.post<City>(this.citiesUrl, city, this.httpOptions)
    .pipe(
      tap((newCity: City) => this.log('added city w/ id=${newCity.id}')),
      catchError(this.handleError<City>('addCity'))
    )
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }
}
