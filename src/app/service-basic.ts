import { InjectionToken } from '@angular/core';

export class ServiceBasic {
  constructor(
    public name: string = 'SERVICE',
  ) { }

  public getName(): string {
    return this.name;
  }
}

export const APP_CONFIG = new InjectionToken<ServiceBasic>('ServiceBasic');
