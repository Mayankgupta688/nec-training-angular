import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, PercentPipe } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-use-pipes',
  imports: [UpperCasePipe, FormsModule, LowerCasePipe, TitleCasePipe, CurrencyPipe, PercentPipe],
  templateUrl: './use-pipes.html',
  styleUrl: './use-pipes.less',
  standalone: true
})
export class UsePipes {
  userName: string = "mayank gupta";
  userSalary: number = 1000;
  somePercent: number = 10
}
