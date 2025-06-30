import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesCrudPageComponent } from './especialidades-crud-page.component';

describe('EspecialidadesCrudPageComponent', () => {
  let component: EspecialidadesCrudPageComponent;
  let fixture: ComponentFixture<EspecialidadesCrudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecialidadesCrudPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadesCrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
