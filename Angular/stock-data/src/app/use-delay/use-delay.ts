import { Component } from '@angular/core';
import { DelayDirective } from '../../directives/delay.directive';
import { AppColorDirective } from '../../directives/appColor.directive';

@Component({
  selector: 'app-use-delay',
  imports: [DelayDirective, AppColorDirective],
  templateUrl: './use-delay.html',
  styleUrl: './use-delay.less'
})
export class UseDelay {
  className: string = "some-class";
  applicationColor = "red";
  otherColor = "grey";
}
