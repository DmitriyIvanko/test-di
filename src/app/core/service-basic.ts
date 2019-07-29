import { InjectionToken } from '@angular/core';

export class ServiceBasic {
  constructor(
    public name: string = 'SERVICE',
  ) { }

  public getName(): string {
    return this.name;
  }
}

export const SERVICE_BASIC_DI_TOKEN = new InjectionToken<ServiceBasic>('ServiceBasic');
