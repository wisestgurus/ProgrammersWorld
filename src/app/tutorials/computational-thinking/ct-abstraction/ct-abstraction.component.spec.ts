import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTAbstractionComponent } from './ct-abstraction.component';

describe('CTAbstractionComponent', () => {
  let component: CTAbstractionComponent;
  let fixture: ComponentFixture<CTAbstractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTAbstractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTAbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
