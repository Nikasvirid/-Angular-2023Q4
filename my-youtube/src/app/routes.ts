import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'SviridHomePage',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'HomeDetails',
  },
];

export default routeConfig;
