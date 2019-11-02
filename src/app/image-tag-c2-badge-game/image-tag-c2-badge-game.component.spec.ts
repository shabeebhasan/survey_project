import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTagC2BadgeGameComponent } from './image-tag-c2-badge-game.component';

describe('ImageTagC2BadgeGameComponent', () => {
  let component: ImageTagC2BadgeGameComponent;
  let fixture: ComponentFixture<ImageTagC2BadgeGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTagC2BadgeGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTagC2BadgeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
