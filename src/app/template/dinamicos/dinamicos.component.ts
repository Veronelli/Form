import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];

}
interface Favorito {
  id: number;
  juego: string;

}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  nuevoJuego: string = "";
  persona: Persona = {
    nombre: "Facundo",
    favoritos: [
      {
        id: 1,
        juego: "Mario Bros"
      },
      {
        id: 2,
        juego: "Sonic"
      }
    ]
  }

  guardar() {

  }

  campoValido(): boolean {
    console.log("Hola " + this.miFormulario)
    return this.miFormulario?.controls.campo.value === "" && this.miFormulario?.controls.campo.touched;
  }

  agregarFavorito() {
    this.persona.favoritos.push({
      juego: this.nuevoJuego,
      id: this.persona.favoritos.length + 1
    })

  }

  eliminarFavorito(id: number) {
    this.persona.favoritos.splice(id, 1);

  }

}
