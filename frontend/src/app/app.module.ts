import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchScreenModule} from '../modules/components/search-screen/search-screen.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SearchScreenModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
