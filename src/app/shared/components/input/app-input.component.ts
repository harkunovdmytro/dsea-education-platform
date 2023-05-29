import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() control = new FormControl();
  @Input() inputType: 'text' | 'number' = 'text';
  @Input() placeholder: string = '';
  @Input() inputStyles: any;
  @Input() inputWrapperStyles: any;
}
