import { Injectable } from '@angular/core';

import { ServiceBasic } from 'core';

const SERVICE_NAME = 'APP_MODULE_SERVICE';

@Injectable({
  providedIn: 'root',
})
export class AppService extends ServiceBasic {

  constructor() {
    super(SERVICE_NAME, Math.random().toString());
  }

  public appServiceMethod(): string {
    return SERVICE_NAME;
  }
}
