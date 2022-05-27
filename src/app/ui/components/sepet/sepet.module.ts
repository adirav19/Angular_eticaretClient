import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SepetComponent } from './sepet.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SepetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: SepetComponent}
    ])
  ]
})
export class SepetModule { }
