import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './product/product.module';
import { HomeModule } from './home/home.module';
import { SepetModule } from './sepet/sepet.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductModule,
    HomeModule,
    SepetModule
  ]
})
export class ComponentsModule { }
  