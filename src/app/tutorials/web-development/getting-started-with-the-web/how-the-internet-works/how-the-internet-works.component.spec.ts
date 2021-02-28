import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowTheInternetWorksComponent } from './how-the-internet-works.component';

describe('HowTheInternetWorksComponent', () => {
  let component: HowTheInternetWorksComponent;
  let fixture: ComponentFixture<HowTheInternetWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowTheInternetWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowTheInternetWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
