import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditDepartmentModalComponent } from './create-edit-department-modal.component';

describe('CreateEditDepartmentModalComponent', () => {
  let component: CreateEditDepartmentModalComponent;
  let fixture: ComponentFixture<CreateEditDepartmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditDepartmentModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditDepartmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
