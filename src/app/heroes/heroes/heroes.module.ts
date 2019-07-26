import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_CONFIG } from '../../service-basic'
import { HeroesComponent } from './heroes.component';
import { HeroesService } from './heroes.service';
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
  providers: [
    { provide: APP_CONFIG, useClass: HeroesService }
  ]
})
export class HeroesModule { }
