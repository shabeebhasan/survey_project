import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyConfigSetComponent } from './survey-config-set.component';

describe('SurveyConfigSetComponent', () => {
  let component: SurveyConfigSetComponent;
  let fixture: ComponentFixture<SurveyConfigSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyConfigSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyConfigSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
