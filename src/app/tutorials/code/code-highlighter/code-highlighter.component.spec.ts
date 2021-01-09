import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodeHighlighterComponent } from './code-highlighter.component';

describe('CodeHighlighterComponent', () => {
  let component: CodeHighlighterComponent;
  let fixture: ComponentFixture<CodeHighlighterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeHighlighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
