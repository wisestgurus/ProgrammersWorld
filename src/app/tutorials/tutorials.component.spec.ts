import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TutorialsComponent } from './tutorials.component';

describe('TutorialsComponent', () => {
  let component: TutorialsComponent;
  let fixture: ComponentFixture<TutorialsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
