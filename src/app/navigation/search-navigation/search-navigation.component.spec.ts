import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchNavigationComponent } from './search-navigation.component';

describe('SearchNavigationComponent', () => {
  let component: SearchNavigationComponent;
  let fixture: ComponentFixture<SearchNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
