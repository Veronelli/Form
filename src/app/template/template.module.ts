import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { RouterModule } from '@angular/router';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    BasicosComponent,
    SwitchesComponent,
    DinamicosComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
