import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';

declare var $:any; //declare for jQuery

import {routing, appRoutingProviders} from "./app.routing";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
    ],
    declarations: [

    ],
    providers: [

    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
