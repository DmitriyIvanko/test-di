import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { APP_CONFIG } from './service-basic';
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
  providers: [
    { provide: APP_CONFIG, useClass: AppService },
  ],
})

export class AppModule { }
