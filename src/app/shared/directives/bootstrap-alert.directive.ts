import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[wgAlert]'
})

export class BootstrapAlertDirective implements OnInit {
    constructor(private elem: ElementRef) { }

    alert() {
        this.elem.nativeElement.style.position = 'relative';
        this.elem.nativeElement.style.padding = '0.75rem 1.25rem';
        this.elem.nativeElement.style.marginBottom = '1rem';
        this.elem.nativeElement.style.border = '1px solid transparent'
        this.elem.nativeElement.style.borderRadius = '20px';
    }

    alertWarning() {
        this.elem.nativeElement.style.borderLeft = '6px solid darkgoldenrod';
        this.elem.nativeElement.style.color = '#856404';
        this.elem.nativeElement.style.backgroundColor = '#fff3cd';
    }

    alertSecondary() {
        this.elem.nativeElement.style.borderLeft = '6px solid darkgray';
        this.elem.nativeElement.style.color = '#383d41';
        this.elem.nativeElement.style.backgroundColor = '#e2e3e5';
    }

    alertInfo() {
        this.elem.nativeElement.style.borderLeft = '6px solid  blue';
        this.elem.nativeElement.style.color = '#0c5460';
        this.elem.nativeElement.style.backgroundColor = '#d1ecf1';
    }

    alertDanger() {
        this.elem.nativeElement.style.borderLeft = '6px solid  red';
        this.elem.nativeElement.style.color = '#721c24';
        this.elem.nativeElement.style.backgroundColor = '#f8d7da';
    }

    alertSuccess() {
        this.elem.nativeElement.style.borderLeft = ' solid 6px darkgreen';
        this.elem.nativeElement.style.color = '#155724';
        this.elem.nativeElement.style.backgroundColor = '#d4edda';
    }

    alertPrimary() {
        this.elem.nativeElement.style.borderLeft = ' solid 6px blue';
        this.elem.nativeElement.style.color = '#004085';
        this.elem.nativeElement.style.backgroundColor = '#cce5ff';
    }

    @Input() set wgAlert(alertOptions) {
        switch (alertOptions) {
            case 'success':
                this.alert();
                this.alertSuccess();
                break;
            case 'danger':
                this.alert();
                this.alertDanger();
                break;

            case 'info':
                this.alert();
                this.alertInfo();
                break;

            case 'primary':
                this.alert();
                this.alertPrimary();
                break;

            case 'secondary':
                this.alert();
                this.alertSecondary();
                break;

            case 'warning':
                this.alert();
                this.alertWarning();
                break;

            default:
                this.alert();
                this.alertWarning()
        }

    }

    ngOnInit() {

    }
}