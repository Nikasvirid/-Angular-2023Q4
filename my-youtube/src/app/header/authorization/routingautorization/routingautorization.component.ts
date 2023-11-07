import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormautorizationComponent } from './header/authorization/formautorization/formautorization.component';

const routes: Routes = [{ path: '', component: FormautorizationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class routingautorization { }
