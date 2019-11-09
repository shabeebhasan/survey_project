import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFlowSurveyComponent } from './activity-flow-survey.component';

describe('ActivityFlowSurveyComponent', () => {
  let component: ActivityFlowSurveyComponent;
  let fixture: ComponentFixture<ActivityFlowSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityFlowSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFlowSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
