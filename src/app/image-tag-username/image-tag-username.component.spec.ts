import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTagUsernameComponent } from './image-tag-username.component';

describe('ImageTagUsernameComponent', () => {
  let component: ImageTagUsernameComponent;
  let fixture: ComponentFixture<ImageTagUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTagUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTagUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
