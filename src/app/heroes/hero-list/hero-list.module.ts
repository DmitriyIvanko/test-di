import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AppSettings } from 'app.settings';
// import { HeroListMockService } from './hero-list.mock-service';
// import { HeroListService } from './hero-list.service';
import { HeroListRoutingModule } from './hero-list-routing.module';
import { HeroListComponent } from './hero-list.component';

@NgModule({
  declarations: [
    HeroListComponent,
  ],
  imports: [
    CommonModule,
    HeroListRoutingModule,
  ],
  // providers: [
  //   AppSettings.isMockData ? { provide: HeroListService, useExisting: HeroListMockService } : [],
  // ],
})
export class HeroListModule { }
