import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicSyntaxExplainedComponent } from './basic-syntax-explained.component';

describe('BasicSyntaxExplainedComponent', () => {
  let component: BasicSyntaxExplainedComponent;
  let fixture: ComponentFixture<BasicSyntaxExplainedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSyntaxExplainedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSyntaxExplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
