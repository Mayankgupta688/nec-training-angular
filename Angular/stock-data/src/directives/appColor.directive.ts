import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class AppColorDirective {

  @Input() appColor: string = "";
  constructor(private element: ElementRef) {
    debugger;
  }

  ngOnInit() {
    debugger;
    this.element.nativeElement.style.color = this.appColor;
  }
}
