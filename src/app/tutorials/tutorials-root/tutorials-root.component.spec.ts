import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsRootComponent } from './tutorials-root.component';

describe('TutorialsRootComponent', () => {
  let component: TutorialsRootComponent;
  let fixture: ComponentFixture<TutorialsRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialsRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
