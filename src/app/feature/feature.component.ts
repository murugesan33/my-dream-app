import { Component, OnInit} from '@angular/core';
import {ApiService, userPetLists} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  public logKey = this.api.log.value;
  public petDetails =  [];
  public userId = this.api.uId.value;
  public title: string = 'Products' ;
 // public noRecords: boolean = true; 
 
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api
    .getPetDetails()
    .subscribe(data => {
      this.petDetails = data;
      //this.noRecords = true;
    });
  }

  

}
