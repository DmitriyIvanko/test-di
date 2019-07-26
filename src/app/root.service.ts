import { Injectable } from '@angular/core';

import { ServiceBasic } from './service-basic';

@Injectable({
  providedIn: 'root',
})
export class RootService extends ServiceBasic {

  public id = Math.random();

  constructor() {
    super('ROOT_SERVICE');
  }
}
