import { Component } from '@angular/core';

import { APP_CONFIG } from '../../service-basic';
import { HeroListModule } from './hero-list';
import { HeroesService } from './heroes.service';

@Component({
  providers: [
    { provide: APP_CONFIG, useClass: HeroesService },
  ],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent { }
