import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { HeroListComponent } from './hero-list.component';

const ROUTES: Routes = [
  {
    component: HeroListComponent,
    path: '',
  },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forChild(ROUTES),
  ],
})
export class HeroListRoutingModule { }
