import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditGroupModalComponent } from './create-edit-group-modal.component';

describe('CreateEditGroupModalComponent', () => {
  let component: CreateEditGroupModalComponent;
  let fixture: ComponentFixture<CreateEditGroupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditGroupModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
