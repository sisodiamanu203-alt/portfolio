import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProjects } from './other-projects';

describe('OtherProjects', () => {
  let component: OtherProjects;
  let fixture: ComponentFixture<OtherProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
