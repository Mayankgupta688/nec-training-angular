import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-data',
  imports: [],
  templateUrl: './stock-data.html',
  styleUrl: './stock-data.less'
})
export class StockData {
  stockInfo: any = {};
  previousPrice: number = 0;
  color: string = "green"
  counter: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    setInterval(() => {
      this.http.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC").subscribe((response: any) => {
        this.stockInfo = response;
        if(this.stockInfo.data.pricecurrent > this.previousPrice) {
          this.color = "green";
        } else {
          this.color = "red"
        }

        this.previousPrice = this.stockInfo.data.pricecurrent;
      })
    }, 1000);
  }
}
