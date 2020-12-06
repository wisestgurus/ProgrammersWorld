import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class ScreenLayoutService {
    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Small])
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

        isTablet$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Tablet, Breakpoints.Medium])
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver) { }
}