import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchScreenComponent} from './search-screen.component';


@NgModule({
    declarations: [
        SearchScreenComponent
    ],
    exports: [
        SearchScreenComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SearchScreenModule {
}
