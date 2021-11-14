import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validator, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  constructor(private formBuilder: FormBuilder) { }

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array(["Metal Gear", "Super Mario"], [Validators.required])
  })
  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required)

  nombreVacio() {
    return this.miFormulario?.controls.nombre.invalid && this.miFormulario?.controls.nombre.touched;

  }

  guardar() {
    console.log(this.miFormulario.value);

  }

  borrar(i: number) {
    this.favoritosArr.removeAt(i);
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) return;
    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosArr.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset;

  }

}
