import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_CONFIG } from '../../../service-basic';
import { HeroListComponent } from './hero-list.component';
import { HeroListService } from './hero-list.service'

@NgModule({
  declarations: [
    HeroListComponent,
  ],
  exports: [
    HeroListComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: APP_CONFIG, useClass: HeroListService }
  ]
})
export class HeroListModule { }
