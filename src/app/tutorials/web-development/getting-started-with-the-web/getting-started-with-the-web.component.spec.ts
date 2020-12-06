import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedWithTheWebComponent } from './getting-started-with-the-web.component';

describe('GettingStartedWithTheWebComponent', () => {
  let component: GettingStartedWithTheWebComponent;
  let fixture: ComponentFixture<GettingStartedWithTheWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingStartedWithTheWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedWithTheWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
