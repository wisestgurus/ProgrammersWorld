import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTRootComponent } from './ct-root.component';

describe('CTRootComponent', () => {
  let component: CTRootComponent;
  let fixture: ComponentFixture<CTRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
