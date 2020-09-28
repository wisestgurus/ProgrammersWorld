import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsContainerComponent } from './tutorials-container.component';

describe('TutorialsContainerComponent', () => {
  let component: TutorialsContainerComponent;
  let fixture: ComponentFixture<TutorialsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
