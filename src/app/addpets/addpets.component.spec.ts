import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddpetsComponent } from './addpets.component';
import { ApiService } from '../api.service';
import { MockApiService } from '../mocks/mock-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterTestingModule} from "@angular/router/testing";
import {Routes} from "@angular/router";
import { LoginComponent } from '../login/login.component';
import {AppModule} from '../app.module';

describe('AddpetsComponent', () => {
  let component: AddpetsComponent;
  let fixture: ComponentFixture<AddpetsComponent>;
  const routes: Routes = [
    {path:'addpets',component: AddpetsComponent},
    {path:'login',component: LoginComponent},
  ];

  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpetsComponent, LoginComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule,RouterTestingModule.withRoutes(routes)],
      //providers: [{provide: ApiService, useClass: MockApiService}]
    })
    .compileComponents();
  }));

 beforeEach(() => {
    fixture = TestBed.createComponent(AddpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
   expect(component).toBeTruthy();
  });
});
