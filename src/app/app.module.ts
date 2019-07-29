import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  AppService,
  SERVICE_BASIC_DI_TOKEN,
} from 'core';
import { HeroesModule } from './heroes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HeroesModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    { provide: SERVICE_BASIC_DI_TOKEN, useClass: AppService },
  ],
})

export class AppModule { }
