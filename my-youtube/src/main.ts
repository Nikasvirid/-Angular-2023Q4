import { provideRouter } from '@angular/router';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import routeConfig from './app/routes';
import  AppComponent  from './app/app.component';
import { provideStore } from '@ngrx/store';

bootstrapApplication(
  AppComponent,
  {
    providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig),
    provideStore()
],
  },
).catch((err) => console.error(err));
