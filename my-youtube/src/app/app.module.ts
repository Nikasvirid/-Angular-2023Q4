import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import SearchResultsComponent from './search/search-results/search-results.component';
import SearchItemComponent from './search/search-item/search-item.component';
import HeaderComponent from './header/header/header.component';
import FiltersComponent from './header/filters/filters.component';
import AuthorizationComponent from './header/authorization/authorization.component';
import SortingComponent from './sorting/sorting/sorting.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    // HeaderComponent,
    FiltersComponent,
    AuthorizationComponent,
    SortingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomePageComponent,
    HeaderComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
