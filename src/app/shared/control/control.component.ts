import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }

  label = input.required<string>();
  private el = inject(ElementRef);

  // @Input({ required: true }) label: string;

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    // when anything changes anywhere in the *ENTIRE* angular application
    // it will executes a lot
    afterRender(() => {
      console.log('afterRender');
    });

    // when after the next change in the *ENTIRE* angular application
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  // refers to the component to which it belongs
  ngAfterContentInit(): void {
    // ...
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    // console.log(this.control);
    console.log(this.control());
  }
}
