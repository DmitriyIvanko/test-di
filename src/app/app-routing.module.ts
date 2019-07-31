import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

const HEROES_ROUTE = 'heroes';

const ROUTES: Routes = [
  {
    loadChildren: () => import('./heroes/heroes.module').then((m) => m.HeroesModule),
    path: HEROES_ROUTE,
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: HEROES_ROUTE,
  // },
  // {
  //   path: '**',
  //   redirectTo: HEROES_ROUTE,
  // },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(ROUTES, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
})
export class AppRoutingModule { }
