import { Injectable } from '@angular/core';

import { ServiceBasic } from 'core';

@Injectable()
export class HeroListService extends ServiceBasic {

  public id = Math.random();

  constructor() {
    super('HERO_LIST_MODULE_SERVICE');
  }
}
