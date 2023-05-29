import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyItemComponent } from './faculty-item.component';

describe('FacultyItemComponent', () => {
  let component: FacultyItemComponent;
  let fixture: ComponentFixture<FacultyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
