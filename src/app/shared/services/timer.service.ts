import { Injectable } from '@angular/core';
import { interval, Observable, TimeInterval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  timer(millisecondsPerInterval): Observable<number> {
    const timeInterval = interval(millisecondsPerInterval);
    return timeInterval;
  }

  IsTimeLessThan10(time) {
    return (time < 10) ? `0${time}` : time;
  }
}