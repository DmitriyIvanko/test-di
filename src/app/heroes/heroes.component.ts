import { Component } from '@angular/core';

import { SERVICE_BASIC_DI_TOKEN } from 'core';
import { HeroListModule } from './hero-list';
import { HeroesService } from './heroes.service';

@Component({
  providers: [
    { provide: SERVICE_BASIC_DI_TOKEN, useClass: HeroesService },
  ],
  selector: 'tdi-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent { }
