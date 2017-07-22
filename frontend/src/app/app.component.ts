import { AfterViewInit, Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: 'html/app.component.html'
})
export class AppComponent implements AfterViewInit{


    constructor(private router: Router) {}


    ngAfterViewInit(){}
}
