import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
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
  currentStatus = signal<'offline' | 'online' | 'unknown'>('offline');
  // setting specific values as types uses a TypeScript feature called
  // "Literal Types". This idea is to only allow specific (string) values,
  // instead of all strings.

  // private interval?: ReturnType<typeof setInterval>;

  private destroyRef = inject(DestroyRef);

  // it's considered a good pratice in Angular applications to keep the constructor lean,
  // and only do basic class initialization in there
  constructor() {
    effect(() => { // allows you to run code when signal value changes
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    // this.interval = setInterval(() => {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
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
