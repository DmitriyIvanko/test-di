import {
  Component,
  Optional,
} from '@angular/core';

import { Parent } from '../alex.component';

@Component({
  selector: 'tdi-cathy',
  templateUrl: './cathy.component.html',
  styleUrls: ['./cathy.component.css']
})
export class CathyComponent {

  constructor(
    @Optional() public alex: Parent,
  ) { }

}
