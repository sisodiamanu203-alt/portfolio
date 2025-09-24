import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedLettersFast } from './animated-letters-fast';

describe('AnimatedLettersFast', () => {
  let component: AnimatedLettersFast;
  let fixture: ComponentFixture<AnimatedLettersFast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedLettersFast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedLettersFast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
