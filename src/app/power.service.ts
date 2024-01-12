import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Power } from './power';


@Injectable({
  providedIn: 'root'
})
export class PowerService {
  private powersUrl = 'api/powers'
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(
    private http: HttpClient, 
    private messageService: MessageService
  ) { }

  /** GET powers from the server */
  getPowers(): Observable<Power[]> {
    return this.http.get<Power[]>(this.powersUrl)
      .pipe(
        tap( _ => this.log('fetched powers')),
        catchError(this.handleError<Power[]>('getPowers',[]))
      )
  }

  /** GET power by id. Return 'undefined' when id not found  */
  getPowerNo404<Data>(id:number): Observable<Power> {
    const url = `${this.powersUrl}/?id=${id}`;
    return this.http.get<Power[]>(url)
    .pipe(
      map(powers => powers[0]),
      tap( p => {
        const outcome = p ? 'fetched' : 'did not find';
        this.log(`${outcome} power id=${id}`);
      }),
      catchError(this.handleError<Power>(`getPower id=${id}`))
    );
  }

  /** GET power by id. Will 404 if not found */
  getPower(id:number): Observable<Power>{
    const url = `${this.powersUrl}/${id}`;
    return this.http.get<Power>(url).pipe(
      tap( _ => this.log(`fetched power id=${id}`)),
      catchError(this.handleError<Power>(`getPower id=${id}`))
    );
  }

  addPower(power: Power): Observable<Power> {
    return this.http.post<Power>(this.powersUrl,power,this.httpOptions)
    .pipe(
      tap((newPower:Power) => this.log('added power w/ id=${newPower.id}')),
      catchError(this.handleError<Power>('addPower'))
    )
  }

  deletePower(id: number): Observable<Power> {
    const url = `${this.powersUrl}/${id}`;

    return this.http.delete<Power>(url, this.httpOptions).pipe(
      tap( _ => this.log('deleted Power id=${id')),
      catchError(this.handleError<any>('updatedPower'))
    )
  }

  /** PUT update the power on the server */
  updatePower(power:Power): Observable<any>{
    return this.http.put(this.powersUrl, power, this.httpOptions).pipe(
      tap( _ => this.log('updated power id=${power.id}')),
      catchError(this.handleError<any>('updatedpower'))
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
    
      /** Log a PowerService message with the MessageService */
      private log(message: string) {
        this.messageService.add(`PowerService: ${message}`);
      }




}
