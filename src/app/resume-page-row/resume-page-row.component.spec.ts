import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePageRowComponent } from './resume-page-row.component';

describe('ResumePageRowComponent', () => {
  let component: ResumePageRowComponent;
  let fixture: ComponentFixture<ResumePageRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePageRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePageRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
