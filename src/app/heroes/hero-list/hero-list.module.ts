import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListComponent } from './hero-list.component';

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
})
export class HeroListModule { }