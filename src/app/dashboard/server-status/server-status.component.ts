import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
// export class ServerStatusComponent implements OnInit, OnDestroy {
export class ServerStatusComponent implements OnInit {
  currentStatus: 'offline' | 'online' | 'unknown' = 'online';
  // setting specific values as types uses a TypeScript feature called
  // "Literal Types". This idea is to only allow specific (string) values,
  // instead of all strings.

  // private interval?: ReturnType<typeof setInterval>;

  private destroyRef = inject(DestroyRef);

  constructor() {}
  // it's considered a good pratice in Angular applications to keep the constructor lean,
  // and only do basic class initialization in there

  ngOnInit() {
    // this.interval = setInterval(() => {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
