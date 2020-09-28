import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTPatternRecognitionComponent } from './ct-pattern-recognition.component';

describe('CTPatternRecognitionComponent', () => {
  let component: CTPatternRecognitionComponent;
  let fixture: ComponentFixture<CTPatternRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTPatternRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTPatternRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
