import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HistoryOfTheWebComponent } from './history-of-the-web.component';

describe('HistoryOfTheWebComponent', () => {
  let component: HistoryOfTheWebComponent;
  let fixture: ComponentFixture<HistoryOfTheWebComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOfTheWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfTheWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
