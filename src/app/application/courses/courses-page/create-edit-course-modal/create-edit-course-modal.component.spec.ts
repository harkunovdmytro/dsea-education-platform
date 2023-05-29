import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditCourseModalComponent } from './create-edit-course-modal.component';

describe('CreateEditCourseModalComponent', () => {
  let component: CreateEditCourseModalComponent;
  let fixture: ComponentFixture<CreateEditCourseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditCourseModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
