import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListComponent } from './hero-list.component';
import { HeroListService } from './hero-list.service';

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
    HeroListService,
  ],
})
export class HeroListModule { }
