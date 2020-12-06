import { isPlatformServer } from '@angular/common';
import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[wgRenderOnlyOnServer]'
})
export class RenderOnlyOnServerDirective implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId,
    private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) {
  }

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }

    else {
      this.viewContainer.clear();

    }
  }
}
