import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterState } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'pw-root',
    templateUrl: './pw-root.component.html',
    styleUrls: ['./pw-root.component.scss']
})
export class PWRootComponent implements OnInit {
    constructor(private isLoadingService: IsLoadingService, private router: Router) { }
    isLoading$ = this.isLoadingService.isLoading$();


    ngOnInit() {
        this.router.events.pipe(filter(event =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationError ||
            event instanceof NavigationCancel
        )).subscribe(event => {
            event instanceof NavigationStart ? this.isLoadingService.add() : this.isLoadingService.remove();
        })

    }
}