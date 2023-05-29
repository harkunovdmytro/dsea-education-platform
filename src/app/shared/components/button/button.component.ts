import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ButtonTypes = '' | 'transparent' | 'outline' | 'danger';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonType: ButtonTypes = '';
  @Input() disabled: boolean = false;

  @Output() onClick = new EventEmitter<MouseEvent>();
}
