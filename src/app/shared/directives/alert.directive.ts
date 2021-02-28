import { Directive, ElementRef, ErrorHandler, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pwAlert]'
})
export class AlertDirective {

  constructor(private elem: ElementRef<HTMLElement>, private renderer2: Renderer2) { }

  alert() {
    this.elem.nativeElement.style.position = 'relative';
    this.elem.nativeElement.style.padding = '0.75rem 1.25rem';
    this.elem.nativeElement.style.marginBottom = '1rem';
    this.elem.nativeElement.style.border = '1px solid transparent'
    this.elem.nativeElement.style.borderRadius = '20px';
  }

  alertWarning(alertOptions) {

    if (alertOptions === 'warning') {

    }

    this.elem.nativeElement.style.borderLeft = '6px solid darkgoldenrod';
    this.elem.nativeElement.style.color = '#856404';
    this.elem.nativeElement.style.backgroundColor = '#fff3cd';
  }

  alertSecondary(alertOptions) {
    if (alertOptions === 'secondary') {

    }

    this.elem.nativeElement.style.borderLeft = '6px solid darkgray';
    this.elem.nativeElement.style.color = '#383d41';
    this.elem.nativeElement.style.backgroundColor = '#e2e3e5';
  }

  alertInfo(alertOptions) {
    if (alertOptions === 'info') {
      const infoContainer: HTMLElement = this.renderer2.createElement('div');
      infoContainer.setAttribute('class', 'heading');

      const infoIcon: HTMLElement = this.renderer2.createElement('i');
      infoIcon.setAttribute('class', 'fas fa-info-circle');

      const infoText: HTMLElement = this.renderer2.createElement('span');
      infoText.innerHTML = 'info';

      infoContainer.appendChild(infoIcon)
      infoContainer.appendChild(infoText);
      this.elem.nativeElement.appendChild(infoContainer);
    }

    this.elem.nativeElement.style.borderLeft = '6px solid  blue';
    this.elem.nativeElement.style.color = '#0c5460';
    this.elem.nativeElement.style.backgroundColor = '#d1ecf1';
  }

  alertDanger(alertOptions) {
    if (alertOptions === 'danger') {
      const warningContainer: HTMLElement = this.renderer2.createElement('div');
      warningContainer.setAttribute('class', 'heading');

      const exclamationMarkIcon: HTMLElement = this.renderer2.createElement('i');
      exclamationMarkIcon.setAttribute('class', 'fas fa-exclamation-circle');

      const warningText: HTMLElement = this.renderer2.createElement('span');
      warningText.innerHTML = 'warning';

      warningContainer.appendChild(exclamationMarkIcon)
      warningContainer.appendChild(warningText);
      this.elem.nativeElement.appendChild(warningContainer);

    }

    this.elem.nativeElement.style.borderLeft = '6px solid  red';
    this.elem.nativeElement.style.color = '#721c24';
    this.elem.nativeElement.style.backgroundColor = '#f8d7da';
  }

  alertSuccess(alertOptions) {
    if (alertOptions === 'success') {

    }

    this.elem.nativeElement.style.borderLeft = ' solid 6px darkgreen';
    this.elem.nativeElement.style.color = '#155724';
    this.elem.nativeElement.style.backgroundColor = '#d4edda';
  }

  alertPrimary(alertOptions) {
    if (alertOptions === 'primary') {

    }

    this.elem.nativeElement.style.borderLeft = ' solid 6px blue';
    this.elem.nativeElement.style.color = '#004085';
    this.elem.nativeElement.style.backgroundColor = '#cce5ff';
  }

  consoleErrorMessage(alertOptions: string) {
    if (alertOptions) {
      throw new SyntaxError(`Cannot read property wgAlert = "${alertOptions}"`);
    }

    else {
      throw new SyntaxError('Cannot read property wgAlert of undefined');
    }
  }

  @Input() set pwAlert(alertOptions) {
    switch (alertOptions) {

      case 'success':
      case 'success-with-no-heading':
        this.alert();
        this.alertSuccess(alertOptions);
        break;

      case 'danger':
      case 'danger-with-no-heading':
        this.alert();
        this.alertDanger(alertOptions);
        break;

      case 'info':
      case 'info-with-no-heading':
        this.alert();
        this.alertInfo(alertOptions);
        break;

      case 'primary':
      case 'primary-with-no-heading':
        this.alert();
        this.alertPrimary(alertOptions);
        break;

      case 'secondary':
      case 'secondary-with-no-heading':
        this.alert();
        this.alertSecondary(alertOptions);
        break;

      case 'warning':
      case 'warning-with-no-heading':
        this.alert();
        this.alertWarning(alertOptions);
        break;

      default:
        this.consoleErrorMessage(alertOptions);
    }
  }

}
