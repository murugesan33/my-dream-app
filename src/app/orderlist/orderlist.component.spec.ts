import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlistComponent } from './orderlist.component';
import { LoginComponent } from '../login/login.component';

import { ProductsComponent } from '../products/products.component';
import {Routes} from "@angular/router";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { ReactiveFormsModule } from '@angular/forms';

describe('OrderlistComponent', () => {
  let component: OrderlistComponent;
  let fixture: ComponentFixture<OrderlistComponent>;
  const routes: Routes = [
    {path:'history',component:OrderlistComponent},
    {path:'login',component: LoginComponent},
   
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderlistComponent,ProductsComponent,LoginComponent],
      imports:[HttpClientTestingModule,RouterTestingModule.withRoutes(routes),ReactiveFormsModule],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
