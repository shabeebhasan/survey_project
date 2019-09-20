import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactionQustionsComponent } from './satisfaction-qustions.component';

describe('SatisfactionQustionsComponent', () => {
  let component: SatisfactionQustionsComponent;
  let fixture: ComponentFixture<SatisfactionQustionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatisfactionQustionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisfactionQustionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
