import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from "rxjs"

@Component({
  selector: 'app-use-observable',
  imports: [CommonModule],
  templateUrl: './use-observable.html',
  styleUrl: './use-observable.less'
})
export class UseObservableComponent {
  currentPrice: string = "";
  constructor(private http: HttpClient) {
    var myObservable = new Observable<string>((observer) => {
      setInterval(() => {
        this.http.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC").subscribe((response: any) => {
          observer.next(response.data.pricecurrent)
        })
      }, 2000)
    });

    myObservable.subscribe({
      next: (data) => {
        this.currentPrice = data;
      }
    })
  }
}
