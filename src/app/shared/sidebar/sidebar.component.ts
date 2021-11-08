import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  reactiveMenu: MenuItem[] = [
    {
      texto: "Basicos",
      ruta: "./reactive/basicos"

    },
    {
      texto: "Dinamicos",
      ruta: "./reactive/dinamicos"

    },
    {
      texto: "Switches",
      ruta: "./reactive/switches"

    }

  ];
  templateMenu: MenuItem[] = [
    {
      texto: "Basicos",
      ruta: "./template/basicos"

    },
    {
      texto: "Dinamicos",
      ruta: "./template/dinamicos"

    },
    {
      texto: "Switches",
      ruta: "./template/switches"

    }

  ];

}
