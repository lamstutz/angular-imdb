import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMovieComponent } from './custom-movie.component';

describe('CustomMovieComponent', () => {
  let component: CustomMovieComponent;
  let fixture: ComponentFixture<CustomMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
