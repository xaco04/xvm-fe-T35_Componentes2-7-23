import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema_2';

  nombre = '';
  email = '';
  mensaje = '';
  validacion = '';
  errorValidacion = '';

  contactos: any[] = [];

  afegircontacte() {
    const validacionNum = parseInt(this.validacion, 10);

    if (validacionNum === 5) {
      this.errorValidacion = '';

      const nuevoContacto = {
        nombre: this.nombre,
        email: this.email,
        mensaje: this.mensaje,
        validacion: this.validacion
      };

      this.contactos.push(nuevoContacto);

      this.nombre = '';
      this.email = '';
      this.mensaje = '';
      this.validacion = '';
    } else {
      this.errorValidacion = 'La validación es incorrecta';
    }
  }
}
