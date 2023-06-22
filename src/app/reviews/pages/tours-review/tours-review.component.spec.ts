import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursReviewComponent } from './tours-review.component';

describe('ToursReviewComponent', () => {
  let component: ToursReviewComponent;
  let fixture: ComponentFixture<ToursReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToursReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
