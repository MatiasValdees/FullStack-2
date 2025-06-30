import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesCrudPageComponent } from './pacientes-crud-page.component';

describe('PacientesCrudPageComponent', () => {
  let component: PacientesCrudPageComponent;
  let fixture: ComponentFixture<PacientesCrudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesCrudPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesCrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
