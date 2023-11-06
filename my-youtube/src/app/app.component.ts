// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { HomePageComponent } from './home/home-page/home-page.component';
// // import { RouterModule } from '@angular/router';//router ..a disparu))


// @Component({
//   standalone: true,
//   selector: 'app-root',
//   // templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],

//   imports: [
//     HomePageComponent,
//     RouterModule,
//   ],
//   template: `
//   <main>
//     <nav>
//     <a [routerLink]="['/home']">
//       <header class="brand-name">
//         <img class="brand-logo" src="/assets/1.jpg"width="10px" alt="myFoto" aria-hidden="true">
//       </header>
//     </a>
//     </nav>

//     <section class="content">
//       <router-outlet></router-outlet> 
//     </section>
//   </main>
// `,
// })
import { Component } from '@angular/core';
import HeaderComponent from './header/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 
})


export class AppComponent {
  title = 'youtube-clientHome';
}
