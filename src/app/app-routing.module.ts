import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { ProductModule } from './admin/components/product/product.module';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';
import { SepetModule } from './ui/components/sepet/sepet.module';

const routes: Routes = [ 
  {path:"admin", component:LayoutComponent,children:[
    {path:"",component:DashboardComponent},
    //ana sayfa niteliğindeki componentlerde
    //direk component çağrılıyor
    //childrendan geğil komponent bazlıo çalışıyoruz.
    {path:"customer",loadChildren:()=>import("./admin/components/customer/customer.module")
      .then(module => module.CustomerModule)},
      //bize htttps://www.filan.com/admin/customers
      //diye bir istek geliyorsa
      //bundan sonra gelenler neyse 7. satırdaki rotanın
      //altında ara dedik burda
      //bu işlem lazy loadinge sebep oluyor 
      //performans katıyor.
      {path:"product",loadChildren:()=>import("./admin/components/product/product.module")
      .then(module => module.ProductModule)},
      {path:"order",loadChildren:()=>import("./admin/components/order/order.module")
      .then(module => module.OrderModule)}
  ]},
  {path:"",component:HomeComponent},
    //ana sayfa işlemlerinde componeny bazlı işlem yapılır.
  {path:"sepet", loadChildren: ()=> import("./ui/components/sepet/sepet.module")
    .then(module => module.SepetModule)},
  {path:"product", loadChildren: ()=> import("./ui/components/product/product.module")
    .then(module => module.ProductModule)},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
