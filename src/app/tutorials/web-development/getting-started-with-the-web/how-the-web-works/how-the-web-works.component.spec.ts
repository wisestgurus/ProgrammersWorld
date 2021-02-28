import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowTheWebWorksComponent } from './how-the-web-works.component';

describe('HowTheWebWorksComponent', () => {
  let component: HowTheWebWorksComponent;
  let fixture: ComponentFixture<HowTheWebWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowTheWebWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowTheWebWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
