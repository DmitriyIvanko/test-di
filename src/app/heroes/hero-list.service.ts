import { Injectable } from '@angular/core';

import { ServiceBasic } from '../service-basic';

@Injectable()
export class HeroListService extends ServiceBasic {

  public id = Math.random();

  constructor() {
    super('HERO_LIST_COMPONENT_SERVICE');
  }
}
