import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTagC2MonsterGameComponent } from './image-tag-c2-monster-game.component';

describe('ImageTagC2MonsterGameComponent', () => {
  let component: ImageTagC2MonsterGameComponent;
  let fixture: ComponentFixture<ImageTagC2MonsterGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTagC2MonsterGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTagC2MonsterGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
