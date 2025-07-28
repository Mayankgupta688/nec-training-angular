import { Component } from '@angular/core';
import { CommonDataService } from '../../services/common-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-two-component',
  imports: [CommonModule],
  templateUrl: './child-two-component.html',
  styleUrl: './child-two-component.less',
  standalone: true
})
export class ChildTwoComponent {
  constructor(public commonDataServiceInstance: CommonDataService) { }
}
