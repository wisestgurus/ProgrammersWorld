import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HTMLComponent } from './html.component';

describe('HTMLComponent', () => {
  let component: HTMLComponent;
  let fixture: ComponentFixture<HTMLComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HTMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
