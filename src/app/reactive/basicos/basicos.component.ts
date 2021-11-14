import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTxt 4080ti'),
  //   precio: new FormControl('0'),
  //   existe: new FormControl(0)

  // });
  constructor(private formBuilder: FormBuilder) { }

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    precio: [null, [Validators.required, Validators.min(0)]],
    existe: [null, [Validators.required, Validators.min(0)]],

  })

  nombreVacio(campo: string): boolean {
    return this.miFormulario?.controls[campo].invalid && this.miFormulario?.controls[campo].touched;

  }
  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: "Nintendo 3DS",
      precio: 3,
      existe: 10

    })
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAsTouched();
      return;

    }
    this.miFormulario.reset();
  }

}
