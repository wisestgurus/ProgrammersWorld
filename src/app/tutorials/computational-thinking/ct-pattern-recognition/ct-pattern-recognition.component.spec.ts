import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtPatternRecognitionComponent } from './ct-pattern-recognition.component';

describe('CtPatternRecognitionComponent', () => {
  let component: CtPatternRecognitionComponent;
  let fixture: ComponentFixture<CtPatternRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtPatternRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtPatternRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
