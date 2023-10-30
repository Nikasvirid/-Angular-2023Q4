import { provideRouter } from '@angular/router';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import routeConfig from './app/routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(
  AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig),
    ],
  },
).catch((err) => console.error(err));
