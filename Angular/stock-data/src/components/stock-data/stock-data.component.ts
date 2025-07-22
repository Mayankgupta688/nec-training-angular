import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: "stock-data",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./stock-data.component.html",
  styleUrls: ["./stock-data.component.less", "./stock-data-style.component.less"]
})
export class StockDataComponent {
  dataCount: number = Math.floor(Math.random() * 100);
  latestTime = this.getLatestTime();
  userDataCount: number = 0;

  className = "greenClass";

  getLatestTime() {
    return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
  }

  updateUserDataCount() {
    this.userDataCount = this.userDataCount + 1;
  }

  updateClassToGreen() {
    this.className = "greenClass"
  }

  updateClassToRed() {
    this.className = "redClass"
  }

  constructor() {
    setInterval(() => {
      this.dataCount = Math.floor(Math.random() * 100);
      this.latestTime = this.getLatestTime();
    }, 1000);
  }
}
