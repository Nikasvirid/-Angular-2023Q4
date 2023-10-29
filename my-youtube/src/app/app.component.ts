import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { HomePageComponent } from './home/home-page/home-page.component';
import HeaderComponent from './header/header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],

  imports: [
    RouterModule,
    HeaderComponent,
  ],
  template: `
  <main>
  <a [routerLink]="['/']">
    <header class="brand-name">
      <img class="brand-logo" src="/assets/1.jpg"width="50px" alt="myFoto" aria-hidden="true">
    </header>
  </a>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
  <app-header></app-header>
</main>
`,
})

export default class AppComponent {
  title = 'my-youtubeHome';
}
