import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormautorizationComponent } from './header/authorization/formautorization/formautorization.component';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: FormautorizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
