import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppSettings } from 'app.settings';
import { AppMockService } from './app.mock-service';
import { AppService } from './app.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SERVICE_BASIC_DI_TOKEN } from 'core';
import { AlexComponent } from './alex/alex.component';
import { CathyComponent } from './alex/cathy/cathy.component';
import { CraigComponent } from './alex/craig/craig.component';
import { CarolComponent } from './alex/carol/carol.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AlexComponent,
    CathyComponent,
    CraigComponent,
    CarolComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    AppSettings.isMockData ? { provide: AppService, useExisting: AppMockService } : [],
  ],
})

export class AppModule { }
