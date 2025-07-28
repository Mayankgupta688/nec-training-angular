import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from "@angular/common"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-use-async',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './use-async.html',
  styleUrl: './use-async.less'
})
export class UseAsync {
  appObservable$: Observable<any>;
  constructor(private http: HttpClient) {
    this.appObservable$ = this.http.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC")
  }
}
