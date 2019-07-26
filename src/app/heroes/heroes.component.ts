import { Component } from '@angular/core';

import { HeroesService } from './heroes.service';
import { APP_CONFIG } from '../service-basic';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [
    { provide: APP_CONFIG, useClass: HeroesService }
  ],
})
export class HeroesComponent { }
