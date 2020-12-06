import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WGHttpService {

  constructor(private httpClient: HttpClient) { }

  getData(url: string): Observable<any> {
    return this.httpClient.get(url).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error', error.error.message)
      return throwError('Error');
    }

    else {
      console.error('Backend');
      return throwError('Error');
    }
  }

}
