import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePageTitleComponent } from './resume-page-title.component';

describe('ResumePageTitleComponent', () => {
  let component: ResumePageTitleComponent;
  let fixture: ComponentFixture<ResumePageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
