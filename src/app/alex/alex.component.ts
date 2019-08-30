import { Component, forwardRef } from '@angular/core';

export abstract class Parent {
  public name: string;
}

@Component({
  selector: 'tdi-alex',
  templateUrl: './alex.component.html',
  styleUrls: ['./alex.component.css'],
  providers: [{ provide: Parent, useExisting: forwardRef(() => AlexComponent) }],
})
export class AlexComponent extends Parent {

  public name = 'Alex';

}
