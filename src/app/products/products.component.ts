import { Component, OnInit, Input} from '@angular/core';
import {ApiService, userPetLists, checkOut} from '../api.service';
import {Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input('products') products = [];
  @Input('title') title:string = '';
  @Input('status') status:boolean = false;
  public  arrItem = [];
  public logKey = this.api.log.value;
  public userId = this.api.uId.value;
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() { }

  buyProduct(id){
    if(!this.logKey){
       this.api.err.next("Please Login!");
       this.router.navigate(['login']);
     }else{
       let num = this.api.item.value;
       num = num + 1;
       this.api.item.next(num);
      // this.api.productItem.next(this.api.productItem.value.push(id));
      // this.api.productItem.next(id);
      //const currentValue = this.api.productItem.value;
      //const updatedValue = [...currentValue, id];
      //this.api.productItem.next(updatedValue);
      
     let arr = <checkOut>{
        id: id,
        Quantity:1
      }
      
      const currentValue = this.api.productItem.value;
      console.log(currentValue);
      //this.api.productItem.next()
      //console.log(currentValue);
      for(let i=0; i<currentValue.length; i++){
          console.log(currentValue);
          if(currentValue[i].id == id){
            arr.id = id;
            arr.Quantity = currentValue[i].Quantity + 1;
          }else{
            arr.id = id;
            arr.Quantity = currentValue[i].Quantity;
          }
      }
      console.log(arr);
      this.arrItem.push(arr)
      this.api.productItem.next(this.arrItem);

     }
 }

}
