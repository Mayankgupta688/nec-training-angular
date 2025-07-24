import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "property-binding",
  standalone: true,
  templateUrl: "./property-binding.component.html",
  styleUrl: "./property-binding.component.less",
  imports: [FormsModule]
})
export class PropertBindingComponent {
  displayValue: string = "block";
  paddingData: number = 20
  styleObject = {
    color: "red",
    border: "1px solid grey",
    margin: "10px",
    padding: this.paddingData + "px"
  }

  increaseNumber() {
    console.log(this.paddingData);
    this.paddingData = this.paddingData + 1;

    this.styleObject = {
      ...this.styleObject,
      padding: this.paddingData + "px"
    }
  }

  decreaseNumber() {
    console.log(this.paddingData);
    this.paddingData = this.paddingData - 1
    this.styleObject = {
      ...this.styleObject,
      padding: this.paddingData + "px"
    }
  }

  hideShowComponent() {
    this.displayValue = this.displayValue == "block" ? "none" : "block"
  }
}
