import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    children: [
      {
        loadChildren: () => import('./hero-list/hero-list.module').then((m) => m.HeroListModule),
        path: 'hero-list',
      },
    ],
    component: HeroesComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class HeroesRoutingModule { }
