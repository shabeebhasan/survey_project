import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageQuestionsComponent } from './image-questions.component';

describe('ImageQuestionsComponent', () => {
  let component: ImageQuestionsComponent;
  let fixture: ComponentFixture<ImageQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
