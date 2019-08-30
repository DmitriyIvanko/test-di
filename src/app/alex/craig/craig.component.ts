import {
  Component,
  Optional,
} from '@angular/core';

import { Parent } from '../alex.component';

@Component({
  selector: 'tdi-craig',
  templateUrl: './craig.component.html',
  styleUrls: ['./craig.component.css']
})
export class CraigComponent {

  constructor(
    @Optional() public alex: Parent,
  ) { }

}
