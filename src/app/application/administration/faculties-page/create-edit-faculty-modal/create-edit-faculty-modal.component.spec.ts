import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditFacultyModalComponent } from './create-edit-faculty-modal.component';

describe('CreateEditFacultyModalComponent', () => {
  let component: CreateEditFacultyModalComponent;
  let fixture: ComponentFixture<CreateEditFacultyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditFacultyModalComponent]
    });
    fixture = TestBed.createComponent(CreateEditFacultyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
