import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTagC2Component } from './image-tag-c2.component';

describe('ImageTagC2Component', () => {
  let component: ImageTagC2Component;
  let fixture: ComponentFixture<ImageTagC2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTagC2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTagC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
