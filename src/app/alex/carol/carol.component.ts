import {
  Component,
  Optional,
} from '@angular/core';

import { Parent } from '../alex.component';

@Component({
  selector: 'tdi-carol',
  templateUrl: './carol.component.html',
  styleUrls: ['./carol.component.css']
})
export class CarolComponent {

  constructor(
    @Optional() public alex: Parent,
  ) { }

}
