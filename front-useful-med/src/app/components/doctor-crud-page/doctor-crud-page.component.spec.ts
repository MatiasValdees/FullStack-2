import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCrudPageComponent } from './doctor-crud-page.component';

describe('DoctorCrudPageComponent', () => {
  let component: DoctorCrudPageComponent;
  let fixture: ComponentFixture<DoctorCrudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorCrudPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorCrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
