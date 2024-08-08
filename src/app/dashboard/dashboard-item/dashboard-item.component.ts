import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  // @Input({ required: true }) image!: { src: string; alt: string };
  // @Input({ required: true }) title!: string;

  // in the following syntax, the input is a signal:
  image = input.required<{ src: string; alt: string }>(); // only available on angular 17+
  title = input.required<string>();
}
