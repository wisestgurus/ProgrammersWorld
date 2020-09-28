import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTDecompositionComponent } from './ct-decomposition.component';

describe('CTDecompositionComponent', () => {
  let component: CTDecompositionComponent;
  let fixture: ComponentFixture<CTDecompositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTDecompositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTDecompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
