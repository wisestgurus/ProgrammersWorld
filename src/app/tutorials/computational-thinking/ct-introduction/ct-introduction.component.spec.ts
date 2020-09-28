import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTIntroductionComponent } from './ct-introduction.component';

describe('CTIntroductionComponent', () => {
  let component: CTIntroductionComponent;
  let fixture: ComponentFixture<CTIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
