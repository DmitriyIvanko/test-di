import {
  Inject,
  Component,
  OnInit,
} from '@angular/core';

import { SERVICE_BASIC_DI_TOKEN } from 'core';
import { AppService } from './app.service';

@Component({
  providers: [
    { provide: SERVICE_BASIC_DI_TOKEN, useExisting: AppService },
  ],
  selector: 'tdi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public serviceName: string;

  public serviceId: string;

  constructor(
    @Inject(SERVICE_BASIC_DI_TOKEN) private appService: AppService,
  ) { }

  public ngOnInit(): void {
    this.serviceName = this.appService.getName();
    this.serviceId = this.appService.getId();

    this.appService.appServiceMethod();
  }

}
