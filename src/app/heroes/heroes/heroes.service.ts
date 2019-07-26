import { Injectable } from '@angular/core';

import { ServiceBasic } from '../../service-basic';

@Injectable()
export class HeroesService extends ServiceBasic {

  public id = Math.random();

  constructor() {
    super('HEROES_MODULE_SERVICE');
  }
}
