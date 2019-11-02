import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTagC2VirtualGameComponent } from './image-tag-c2-virtual-game.component';

describe('ImageTagC2VirtualGameComponent', () => {
  let component: ImageTagC2VirtualGameComponent;
  let fixture: ComponentFixture<ImageTagC2VirtualGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTagC2VirtualGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTagC2VirtualGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
