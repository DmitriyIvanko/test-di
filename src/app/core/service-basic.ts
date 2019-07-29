import { InjectionToken } from '@angular/core';

let ID_COUNT = 0;

export class ServiceBasic {

  private id = (ID_COUNT++).toString();

  constructor(
    public name: string = 'SERVICE',
  ) { }

  public getName(): string {
    return this.name;
  }

  public getId(): string {
    return this.id;
  }
}

export const SERVICE_BASIC_DI_TOKEN = new InjectionToken<ServiceBasic>('ServiceBasic');
