import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationQuestionsComponent } from './motivation-questions.component';

describe('MotivationQuestionsComponent', () => {
  let component: MotivationQuestionsComponent;
  let fixture: ComponentFixture<MotivationQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivationQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
