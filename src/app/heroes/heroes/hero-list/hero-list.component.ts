import {
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import { HEROES } from './mock-heroes';

import { HeroListService } from './hero-list.service';

import {
  ServiceBasic,
  APP_CONFIG,
} from '../../../service-basic';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  public heroes = HEROES;

  public serviceName: string;

  constructor(
    @Inject(APP_CONFIG) private serviceBasic: ServiceBasic,
  ) { }


  public ngOnInit(): void {
    this.serviceName = this.serviceBasic.getName();
  }
}
