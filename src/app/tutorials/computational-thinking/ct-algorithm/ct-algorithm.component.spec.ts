import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTAlgorithmComponent } from './ct-algorithm.component';

describe('CTAlgorithmComponent', () => {
  let component: CTAlgorithmComponent;
  let fixture: ComponentFixture<CTAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTAlgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
