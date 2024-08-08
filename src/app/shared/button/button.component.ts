import { Component } from '@angular/core';

@Component({
  // selector: 'app-button', // this renders the tag <app-button> in the DOM
  selector: 'button[appButton], a[appButton]', // controls buttons that have the attribute appButton; component selector -> attribute selector
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
