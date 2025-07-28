import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[delay]',
  standalone: true
})
export class DelayDirective {

  @Input() set delay(delayValue: any) {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }, delayValue)
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
}
