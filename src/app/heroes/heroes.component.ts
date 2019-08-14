import {
  Inject,
  Component,
  OnInit,
} from '@angular/core';

export abstract class Parent {
  serviceId: string;
};

import { SERVICE_BASIC_DI_TOKEN } from 'core';
import { HeroListModule } from './hero-list';
import { HeroesService } from './heroes.service';

@Component({
  providers: [
    { provide: SERVICE_BASIC_DI_TOKEN, useExisting: HeroesService },
    { provide: Parent, useExisting: HeroesComponent },
  ],
  selector: 'tdi-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements Parent, OnInit {

  public serviceName: string;

  public serviceId: string;

  constructor(
    @Inject(SERVICE_BASIC_DI_TOKEN) private heroesService: HeroesService,
  ) { }

  public ngOnInit(): void {
    this.serviceName = this.heroesService.getName();
    this.serviceId = this.heroesService.getId();

    this.heroesService.heroesMethod();
  }
}
