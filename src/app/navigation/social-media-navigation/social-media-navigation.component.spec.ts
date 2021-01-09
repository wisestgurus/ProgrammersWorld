import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SocialMediaNavigationComponent } from './social-media-navigation.component';

describe('SocialMediaNavigationComponent', () => {
  let component: SocialMediaNavigationComponent;
  let fixture: ComponentFixture<SocialMediaNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
