import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestImageTagComponent } from './test-image-tag.component';

describe('TestImageTagComponent', () => {
  let component: TestImageTagComponent;
  let fixture: ComponentFixture<TestImageTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestImageTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImageTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
