import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../shared/message.service';
import { Observable, of } from 'rxjs';
import { TestItem } from '../interface/test-item';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestItemsService {
  private TestItemsUrl = 'api/testItems';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { };

  /** Log a TestItemsService message with the TestItemsService */
  private log(message: string) {
    this.messageService.add(`MessageService: ${message}`);
  }

  /** GET TestItems from the server */
  getTestValues(): Observable<TestItem[]> {
    // TODO: send the message _after_ fetching the Quizes
    this.messageService.add('TestItemService: fetched TestItems');

    return this.http.get<TestItem[]>(this.TestItemsUrl).pipe(
      tap(TestItems => this.log('fetched TestItems')),
      catchError(this.handleError('getTestItem', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
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
}
