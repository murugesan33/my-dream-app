import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private api:ApiService) { 
    console.log("Hi");
    console.log(this.api.productItem.value);
  }

  ngOnInit() {
  }

}
