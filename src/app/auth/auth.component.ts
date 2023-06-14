import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  correo: string = "";
  contrasena: string = "";

  constructor(private router: Router) {}

  submitForm() {
    if (this.validateForm()) {
      // Validación exitosa, redirecciona a la ruta de perfil
      this.router.navigate(['/perfil']);
    } else {
      // Validación fallida, muestra un mensaje de error o realiza alguna acción
      console.log('Formulario inválido');
    }
  }

  private validateForm(): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Verifica que el correo cumpla con el formato de email
    if (!emailRegex.test(this.correo)) {
      return false;
    }

    // Verifica que la contraseña tenga al menos 6 caracteres
    if (this.contrasena.length < 6) {
      return false;
    }

    return true;
  }
}
