import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AsyncPipe } from "@angular/common"

@Component({
  selector: 'app-use-async',
  imports: [AsyncPipe],
  templateUrl: './use-async.html',
  styleUrl: './use-async.less'
})
export class UseAsync {
  appPromise: Promise<any>;
  stockValue: string = "";
  constructor(private http: HttpClient) {
    debugger;
    this.appPromise = new Promise((resolve) => {
      debugger;
      this.http.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC").subscribe((response: any) => {
        debugger;
        resolve(response.data.pricecurrent)
      })
    });
  }
}
