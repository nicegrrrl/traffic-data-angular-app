import {
  Component,
  ElementRef,
  viewChild,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) buttons;

  // private form = viewChild<ElementRef<HTMLFormElement>>('form');
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // ⭐ angular 17 +

  // onSubmit(titleElement: HTMLInputElement) {
  //   const enteredTitle = titleElement.value;
  // }

  // onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
    // this.form?.nativeElement.reset();
    // this.form()?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}
