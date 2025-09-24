import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Touch } from './touch';

describe('Touch', () => {
  let component: Touch;
  let fixture: ComponentFixture<Touch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Touch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Touch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
