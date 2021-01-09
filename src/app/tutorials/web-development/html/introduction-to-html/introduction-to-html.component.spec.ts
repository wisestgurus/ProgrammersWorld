import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntroductionToHTMLComponent } from './introduction-to-html.component';

describe('IntroductionToHTMLComponent', () => {
  let component: IntroductionToHTMLComponent;
  let fixture: ComponentFixture<IntroductionToHTMLComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionToHTMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionToHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
