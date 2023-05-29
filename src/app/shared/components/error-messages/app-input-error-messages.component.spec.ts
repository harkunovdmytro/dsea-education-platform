import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputErrorMessagesComponent } from './app-input-error-messages.component';

describe('AppInputErrorMessagesComponent', () => {
  let component: AppInputErrorMessagesComponent;
  let fixture: ComponentFixture<AppInputErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInputErrorMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInputErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
