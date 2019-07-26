import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroListComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }
