import { Component, OnInit, Input } from '@angular/core';
import {ApiService,petDetails} from '../api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  public products = [];
  public title = 'My List';
 // public noRecords: boolean = false; 
  constructor(private api:ApiService,private router:Router) { 
    if(!this.api.log.value){
      this.api.err.next("Please Login!");
      this.router.navigate(['login']);
     }else{
      this.api.err.next("");
     }
  }

  ngOnInit() {
      this.api
      .getPetDetails()
      .subscribe( data => {
        for(const [key,val] of data.entries()){
            if(this.api.uId.value == val.userid){
             this.products.push(val);
            // this.noRecords = true;
            }
        }
      });
  }

}
