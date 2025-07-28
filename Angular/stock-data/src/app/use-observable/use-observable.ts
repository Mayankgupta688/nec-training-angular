import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from "rxjs"

@Component({
  selector: 'app-use-observable',
  imports: [CommonModule],
  templateUrl: './use-observable.html',
  styleUrl: './use-observable.less'
})
export class UseObservableComponent {
  timeArray: string[] = [];
  constructor() {
    var myObservable = new Observable<string>((observer) => {
      setInterval(() => {
        observer.next(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds())
      }, 3000)
    });

    myObservable.subscribe({
      next: (data) => {
        this.timeArray = [
          ...this.timeArray,
          data
        ]
      }
    })
  }
}
