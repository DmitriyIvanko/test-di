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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    AppSettings.isMockData ? { provide: AppService, useExisting: AppMockService } : [],
  ],
})

export class AppModule { }
