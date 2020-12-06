import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToTheWebComponent } from './introduction-to-the-web.component';

describe('IntroductionToTheWebComponent', () => {
  let component: IntroductionToTheWebComponent;
  let fixture: ComponentFixture<IntroductionToTheWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductionToTheWebComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionToTheWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
