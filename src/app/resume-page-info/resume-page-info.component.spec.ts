import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePageInfoComponent } from './resume-page-info.component';

describe('ResumePageInfoComponent', () => {
  let component: ResumePageInfoComponent;
  let fixture: ComponentFixture<ResumePageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
