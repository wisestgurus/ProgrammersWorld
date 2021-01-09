import { isPlatformServer } from '@angular/common';
import { PlatformRef, Directive, PLATFORM_ID, Inject, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
@Directive({
  selector: '[pwRenderNotOnServer]'
})
export class RenderNotOnServerDirective implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId,
    private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) {
  }

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.viewContainer.clear();

    }

    else {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }
}
