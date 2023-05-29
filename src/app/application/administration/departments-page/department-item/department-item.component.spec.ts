import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentItemComponent } from './department-item.component';

describe('DepartmentItemComponent', () => {
  let component: DepartmentItemComponent;
  let fixture: ComponentFixture<DepartmentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
