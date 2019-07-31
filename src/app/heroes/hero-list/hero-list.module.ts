import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListRoutingModule } from './hero-list-routing.module';
import { HeroListComponent } from './hero-list.component';
import { HeroListService } from './hero-list.service';

@NgModule({
  declarations: [
    HeroListComponent,
  ],
  // exports: [
  //   HeroListComponent,
  // ],
  imports: [
    CommonModule,
    HeroListRoutingModule,
  ],
  providers: [
    HeroListService,
  ],
})
export class HeroListModule { }
