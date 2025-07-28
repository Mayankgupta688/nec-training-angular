import { Component } from '@angular/core';
import { ChildOneComponent } from '../child-one-component/child-one-component';
import { ChildTwoComponent } from '../child-two-component/child-two-component';
import { CommonDataService } from '../../services/common-data.service';

@Component({
  selector: 'app-parent-component',
  imports: [ChildOneComponent, ChildTwoComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.less',
  standalone: true
})
export class ParentComponent {
  constructor(public commonDataServiceInstance: CommonDataService) {
    setInterval(() => {
      this.commonDataServiceInstance.counter = this.commonDataServiceInstance.counter + 1;
    }, 1000);

    this.commonDataServiceInstance.getEmployeeData();
  }

  updateData() {
    this.commonDataServiceInstance.commonDataString = "Mayank";
    alert(this.commonDataServiceInstance.commonDataString);
  }
}
