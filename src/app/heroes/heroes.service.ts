import { Injectable } from '@angular/core';

import { ServiceBasic } from 'core';

const SERVICE_NAME = 'HEROES_MODULE_SERVICE';

@Injectable()
export class HeroesService extends ServiceBasic {
  constructor() {
    super(SERVICE_NAME, Math.random().toString());
  }

  public heroesMethod(): string {
    return SERVICE_NAME;
  }
}
