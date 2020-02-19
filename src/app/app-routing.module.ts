import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MypetsComponent} from './mypets/mypets.component';
import {AddpetsComponent} from './addpets/addpets.component';
import {MylistComponent} from './mylist/mylist.component';
import {OrderlistComponent} from './orderlist/orderlist.component';
import {CheckoutComponent} from './checkout/checkout.component';

const routes: Routes = [
  {path:'home',component: FeatureComponent},
 {path:'login',component: LoginComponent},
 {path:'',  redirectTo: 'home',  pathMatch: 'full'},
 {path:'register',component:RegisterComponent},
 {path:'addpets',component:AddpetsComponent},
 {path:'mylist',component:MylistComponent},
 {path:'history',component:OrderlistComponent},
 {path:'checkout',component:CheckoutComponent}

  //{path:'',component:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
