import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problema_2';

  nombre='';
  email='';
  mensaje='';
  validacion='';

  contactos:any[] = []

  afegircontacte() {
    const noucontacte = {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje,
      validacion: this.validacion

    };
    this.contactos.push(noucontacte);

    this.nombre='';
    this.email='';
    this.mensaje='';
    this.validacion='';
  }
}
