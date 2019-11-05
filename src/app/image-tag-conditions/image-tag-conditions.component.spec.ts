import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTagConditionsComponent } from './image-tag-conditions.component';

describe('ImageTagConditionsComponent', () => {
  let component: ImageTagConditionsComponent;
  let fixture: ComponentFixture<ImageTagConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTagConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTagConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
