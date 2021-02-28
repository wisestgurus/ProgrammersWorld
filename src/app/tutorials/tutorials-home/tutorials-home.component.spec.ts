import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsHomeComponent } from './tutorials-home.component';

describe('TutorialsHomeComponent', () => {
  let component: TutorialsHomeComponent;
  let fixture: ComponentFixture<TutorialsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
