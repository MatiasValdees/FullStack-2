import { ChangePasswordPageComponent } from './change-password-page.component';

describe('ChangePasswordPageComponent', () => {
  let component: ChangePasswordPageComponent;

  beforeEach(() => {
    component = new ChangePasswordPageComponent();
  });

  it('debe actualizar la contraseña correctamente si cumple con todos los requisitos', () => {
    component.contrasenaActual = 'Anterior123!';
    component.nuevaContrasena = 'Nueva123!';
    component.repetirContrasena = 'Nueva123!';
    
    component.guardarCambios();

    expect(component.mensaje).toBe('Contraseña actualizada correctamente.');
    expect(component.error).toBe('');
    expect(component.contrasenaActual).toBe('');
    expect(component.nuevaContrasena).toBe('');
    expect(component.repetirContrasena).toBe('');
  });

  it('debe mostrar error si las contraseñas nuevas no coinciden', () => {
    component.nuevaContrasena = 'Nueva123!';
    component.repetirContrasena = 'Otra123!';
    
    component.guardarCambios();

    expect(component.error).toBe('Las contraseñas nuevas no coinciden.');
    expect(component.mensaje).toBe('');
  });

  it('debe mostrar error si la nueva contraseña no cumple con los requisitos mínimos', () => {
    component.nuevaContrasena = 'corta';
    component.repetirContrasena = 'corta';
    
    component.guardarCambios();

    expect(component.error).toContain('La nueva contraseña debe tener entre 8 y 20 caracteres');
    expect(component.mensaje).toBe('');
  });

  it('debe mostrar error si la contraseña no tiene mayúsculas', () => {
    component.nuevaContrasena = 'nuevacontra1!';
    component.repetirContrasena = 'nuevacontra1!';
    
    component.guardarCambios();

    expect(component.error).toContain('La nueva contraseña debe tener entre 8 y 20 caracteres');
  });

  it('debe mostrar error si la contraseña no tiene número o carácter especial', () => {
    component.nuevaContrasena = 'NuevaContra';
    component.repetirContrasena = 'NuevaContra';
    
    component.guardarCambios();

    expect(component.error).toContain('La nueva contraseña debe tener entre 8 y 20 caracteres');
  });
});
