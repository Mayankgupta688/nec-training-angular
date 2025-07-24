import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "two-way",
  standalone: true,
  templateUrl: "./two-way.component.html",
  styleUrl: "./two-way.component.less",
  imports: [FormsModule]
})
export default class TwoWayComponent {
  userName: string = "Mayank"

  getName() {
    alert(this.userName)
  }

  setName() {
    this.userName = "Anshul Gupta"
  }

  updateData(updatedValue: string) {

    if(updatedValue == "Mayank Gupta") {
      alert("invalid User")
    }

    this.userName = updatedValue;
  }
}
