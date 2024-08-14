import { Component, input, Output, output, signal } from '@angular/core';

import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // ticket = input.required<Ticket>({ alias: 'data'});
  // data = input.required<Ticket>({ transform: () => {}});
  data = input.required<Ticket>();
  // @Output('closeTicket');
  // close = output({ alias: 'closeTicket'});
  close = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
