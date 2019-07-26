import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent {
  heroes = HEROES;
}
