import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
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
export class NewTicketComponent implements AfterViewInit, OnInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) buttons;

  // private form = viewChild<ElementRef<HTMLFormElement>>('form');
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // ⭐ angular 17 +

  enteredTitle = '';
  enteredText = '';

  // @Output() add = new EventEmitter();
  add = output<{ title: string; text: string }>();

  ngOnInit(): void {
    console.log('ON INIT');
    // console.log(this.form().nativeElement); // with viewChild()
    console.log(this.form?.nativeElement); // with @ViewChild
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    // console.log(this.form().nativeElement); // with viewChild()
    console.log(this.form?.nativeElement); // with @ViewChild
  }

  // onSubmit(titleElement: HTMLInputElement) {
  //   const enteredTitle = titleElement.value;
  // }

  // onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
  // onSubmit(title: string, ticketText: string) {
  onSubmit() {
    // this.add.emit({ title, text: ticketText });
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });

    // this.form?.nativeElement.reset();
    // this.form()?.nativeElement.reset();
    // this.form().nativeElement.reset(); // with viewChild
    // this.form?.nativeElement.reset(); // with @ViewChild

    this.enteredTitle = '';
    this.enteredText = '';
  }
}
