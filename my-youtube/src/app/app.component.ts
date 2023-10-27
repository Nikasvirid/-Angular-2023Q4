import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],

  imports: [
    HomePageComponent,
    RouterModule,
  ],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/1.jpg"width="250px" alt="myFoto" aria-hidden="true">
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
})

export default class AppComponent {
  title = 'my-youtubeHome';
}

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   title = 'youtube-client';

//   public nameVideo = '';

//   public keyWord = '';

//   public sortData: string[] = [];

//   public getRequestValue(value: string) {
//     this.nameVideo = value;
//   }

//   public getKeywordValue(value: string) {
//     this.keyWord = value;
//   }

//   public getDataSortValue(value: string[]) {
//     this.sortData = value;
//   }
// }
