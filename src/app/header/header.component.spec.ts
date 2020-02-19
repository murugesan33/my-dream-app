import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';

/*import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { MypetsComponent } from '../mypets/mypets.component';
import { AddpetsComponent } from '../addpets/addpets.component';
import { MylistComponent } from '../mylist/mylist.component';
import { OrderlistComponent } from '../orderlist/orderlist.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from '../products/products.component';*/
import {Routes} from "@angular/router";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule} from "@angular/router/testing";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const routes: Routes = [
    
   {path:'',component: HeaderComponent},
  
  
    //{path:'',component:''}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule.withRoutes(routes)],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
