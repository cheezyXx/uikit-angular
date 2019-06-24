import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

export type Size = 'small' | 'normal' | 'big';
export type ButtonType = 'submit' | 'button' | 'reset';

@Component({
  selector: 'ak-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ButtonComponent {
  @Input() label = '';
  @Input() size: Size = 'normal';
  @Input() type: ButtonType = 'button';
  @Output() outClick = new EventEmitter();

  get classes(): string {
    return ['rec', `rec--${this.size}`].join(' ');
  }

  onClick(): void {
    this.outClick.emit();
  }
}
