import { Component } from '@angular/core';
import { CommonDataService } from '../../services/common-data.service';

@Component({
  selector: 'app-child-one-component',
  imports: [],
  templateUrl: './child-one-component.html',
  styleUrl: './child-one-component.less',
  standalone: true
})
export class ChildOneComponent {
  constructor(public commonDataServiceInstance: CommonDataService) { }
}
