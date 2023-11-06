import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import { AppComponent } from './app.component';
import SearchResultsComponent from './search/search-results/search-results.component';
import { SearchItemComponent }from './search/search-item/search-item.component';
import HeaderComponent from './header/header/header.component';
import { FiltersComponent } from './header/filters/filters.component';
import AuthorizationComponent from './header/authorization/authorization.component';
import { SortingComponent } from './sorting/sorting/sorting.component';
import { ItemComponent }  from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './header/logo/logo.component';
import { SortPipe } from './sorting/sorting/sorting.pipe';
import { FilterPipe } from './header/filters/filters.pipe';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { DetailsComponent } from './details/details.component';
import { FormautorizationComponent } from './header/authorization/formautorization/formautorization.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    SearchItemComponent,
    HeaderComponent,
    FiltersComponent,
    AuthorizationComponent,
    SortingComponent,
    // HomePageComponent,
    LogoComponent,
    ItemComponent,
    ItemListComponent,
    SortPipe,
    FilterPipe,
    FormautorizationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
