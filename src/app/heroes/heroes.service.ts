import { Injectable } from '@angular/core';

import { ServiceBasic } from 'core';

@Injectable()
export class HeroesService extends ServiceBasic {
  constructor() {
    super('HEROES_MODULE_SERVICE');
  }
}
