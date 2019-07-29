import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroListModule } from './hero-list';
import { HeroesService } from './heroes.service';

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
  providers: [
    HeroesService,
  ],
})
export class HeroesModule { }
