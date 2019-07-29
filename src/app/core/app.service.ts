import { Injectable } from '@angular/core';

import { ServiceBasic } from './service-basic';

@Injectable()
export class AppService extends ServiceBasic {

  constructor() {
    super('APP_MODULE_SERVICE');
  }
}
