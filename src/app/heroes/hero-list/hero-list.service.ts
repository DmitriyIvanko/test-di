import { Injectable } from '@angular/core';

import { ServiceBasic } from 'core';

const SERVICE_NAME = 'HERO_LIST_MODULE_SERVICE';

@Injectable({
  providedIn: 'root',
})
export class HeroListService extends ServiceBasic {
  constructor() {
    super(SERVICE_NAME, Math.random().toString());
  }

  public heroListMethod(): string {
    return SERVICE_NAME;
  }
}
