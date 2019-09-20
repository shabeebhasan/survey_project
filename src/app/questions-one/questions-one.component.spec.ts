import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsOneComponent } from './questions-one.component';

describe('QuestionsOneComponent', () => {
  let component: QuestionsOneComponent;
  let fixture: ComponentFixture<QuestionsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
