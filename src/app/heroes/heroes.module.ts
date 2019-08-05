import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettings } from 'app.settings';
import { HeroesMockService } from './heroes.mock-service';
import { HeroesService } from './heroes.service';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [
    HeroesComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
  ],
  providers: [
    AppSettings.isMockData ? { provide: HeroesService, useExisting: HeroesMockService } : [],
  ],
})
export class HeroesModule { }
