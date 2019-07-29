import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroListModule } from './hero-list';

@NgModule({
  declarations: [
    HeroesComponent,
  ],
  exports: [
    HeroesComponent,
  ],
  imports: [
    CommonModule,
    HeroListModule,
  ],

})
export class HeroesModule { }
