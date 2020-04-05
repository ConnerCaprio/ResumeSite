import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeEventsPageComponent } from './life-events-page.component';

describe('LifeEventsPageComponent', () => {
  let component: LifeEventsPageComponent;
  let fixture: ComponentFixture<LifeEventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeEventsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
