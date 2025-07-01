import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCrudPageComponent } from './paciente-crud-page.component';

describe('PacienteCrudPageComponent', () => {
  let component: PacienteCrudPageComponent;
  let fixture: ComponentFixture<PacienteCrudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteCrudPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteCrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
