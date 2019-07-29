import {
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import { HEROES } from './mock-heroes';

import {
  SERVICE_BASIC_DI_TOKEN,
  ServiceBasic,
} from 'core';
import { HeroListService } from './hero-list.service';

@Component({
  providers: [
    { provide: SERVICE_BASIC_DI_TOKEN, useExisting: HeroListService },
  ],
  selector: 'tdi-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  public heroes = HEROES;

  public serviceName: string;

  public serviceId: string;

  constructor(
    @Inject(SERVICE_BASIC_DI_TOKEN) private serviceBasic: HeroListService,
  ) { }

  public ngOnInit(): void {
    this.serviceName = this.serviceBasic.getName();
    this.serviceId = this.serviceBasic.getId();

    this.serviceBasic.heroListMethod();
  }
}
