import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MylistComponent } from './mylist.component';
import { LoginComponent } from '../login/login.component';
import { ProductsComponent } from '../products/products.component';
import {Routes} from "@angular/router";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { ReactiveFormsModule } from '@angular/forms';

describe('MylistComponent', () => {
  let component: MylistComponent;
  let fixture: ComponentFixture<MylistComponent>;
  const routes: Routes = [
    {path:'',component:MylistComponent},
    {path:'login',component: LoginComponent},
   
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylistComponent,ProductsComponent,LoginComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule.withRoutes(routes),ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
