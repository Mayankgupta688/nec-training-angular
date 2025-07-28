import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'employee-count',
  imports: [],
  templateUrl: './employee-count.html',
  styleUrl: './employee-count.less',
  standalone: true
})
export class EmployeeCount {
  @Input() empCount: number = 0;
  @Output() notifyParent: EventEmitter<object> = new EventEmitter();

  constructor() {
    console.log(this.empCount);
  }

  triggerParentFunction() {
    this.notifyParent.emit({
      name: "Mayank",
      age: 10
    });
  }

  ngOnInit() {
    console.log(this.empCount);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("Updated Data: " + this.empCount + changes.currentValue);
  }
}
