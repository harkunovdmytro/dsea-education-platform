import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { errorMessage } from '../../constants/error-messages.constant';

@Component({
  selector: 'app-input-error-messages',
  templateUrl: './app-input-error-messages.component.html',
  styleUrls: ['./app-input-error-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputErrorMessagesComponent {
  @Input() set errors(value: { [key: string]: string } | null) {
    this.errorMessage = this.getError(value);
  };

  @Input() errorStyles: any = {};

  public errorMessage = '';
  public readonly errorMessages = errorMessage;

  public getError(value: { [key: string]: string } | null): string {
    if(!value) {
      return '';
    }

    if(value) {
      const [errorKey, errorValue] = Object.entries(value)[0];
      const errorFunc = this.errorMessages.get(errorKey);

      return errorFunc ? errorFunc(errorValue) : '';
    }

    return '';
  }
}
