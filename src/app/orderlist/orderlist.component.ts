import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  public products = [];
  public title = 'My Orders';
 // public noRecords: boolean = false; 
  constructor(private api:ApiService, private router:Router) { 
    if(!this.api.log.value){
      this.api.err.next("Please Login!");
      this.router.navigate(['login']);
     }else{
      this.api.err.next("");
     }
  }

  ngOnInit() {
      this.api.getUserPetsLists()
      .subscribe(data=>{
          for(const [key,val] of data.entries()){
            if(this.api.uId.value == val.userId){
                let petId = val.petId;
                this.api.getPetDetails()
                .subscribe(data =>{
                  for(const[ky,vl] of data.entries()){
                      //console.log(vl);
                      if(petId == vl.id){
                         this.products.push(vl);
                        // this.noRecords = true;
                      }
                  }
                })
             }
          }
          //this.noRecords = data.length;
      });
  }

}
