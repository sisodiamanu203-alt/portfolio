import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedLetters } from './animated-letters';

describe('AnimatedLetters', () => {
  let component: AnimatedLetters;
  let fixture: ComponentFixture<AnimatedLetters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedLetters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedLetters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
