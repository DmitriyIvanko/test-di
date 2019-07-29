import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SERVICE_BASIC_DI_TOKEN } from 'core';
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
    AppService,
  ],
})

export class AppModule { }
