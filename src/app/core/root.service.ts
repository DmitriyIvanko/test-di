import { Injectable } from '@angular/core';

import { ServiceBasic } from './service-basic';

@Injectable({
  providedIn: 'root',
})
export class RootService extends ServiceBasic {
  constructor() {
    super('ROOT_SERVICE');
  }
}
