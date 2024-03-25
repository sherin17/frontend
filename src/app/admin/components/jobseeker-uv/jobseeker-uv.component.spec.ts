import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerUVComponent } from './jobseeker-uv.component';

describe('JobseekerUVComponent', () => {
  let component: JobseekerUVComponent;
  let fixture: ComponentFixture<JobseekerUVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerUVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerUVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
