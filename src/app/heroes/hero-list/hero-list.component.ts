import {
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import { HEROES } from './mock-heroes';

import { HeroListService } from './hero-list.service';

import {
  ServiceBasic,
  SERVICE_BASIC_DI_TOKEN,
} from 'core';

@Component({
  providers: [
    { provide: SERVICE_BASIC_DI_TOKEN, useClass: HeroListService },
  ],
  selector: 'tdi-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  public heroes = HEROES;

  public serviceName: string;

  constructor(
    @Inject(SERVICE_BASIC_DI_TOKEN) private serviceBasic: ServiceBasic,
  ) { }


  public ngOnInit(): void {
    this.serviceName = this.serviceBasic.getName();
  }
}
