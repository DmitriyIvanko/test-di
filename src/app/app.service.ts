import { Injectable } from '@angular/core';

import { ServiceBasic } from './service-basic';

@Injectable()
export class AppService extends ServiceBasic {

  public id = Math.random();

  constructor() {
    super('APP_MODULE_SERVICE');
  }
}
