import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpEventType} from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs';

const localUrl = 'http://localhost:3000';
const baseUrl ='../assets/images/products'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': 'jwt-token'
  }),
  reportProgress:true,
  Observe:'events'
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public log = new BehaviorSubject<boolean>(false);
  
  public uname = new BehaviorSubject<string>('');
  

  public uId =  new BehaviorSubject<number>(0);
  
  public err = new BehaviorSubject<string>('');

  public item = new BehaviorSubject<number>(0);

  public productItem = new BehaviorSubject<checkOut[]>([]);
  

  constructor(private http: HttpClient) { }

  getUserDetails(){
    return this.http.get(localUrl+'/posts');
  }

  setUserDetails(arr){
      return this.http.post(localUrl+'/posts',arr,httpOptions);
  }

  setPetDetails(arr){
    return this.http.post(localUrl+'/pets', arr, httpOptions);
  }

  getPetDetails(){
    return this.http.get<petDetails[]>(localUrl+'/pets')
  }

  setUserPetsLists(arr){
    return this.http.post<userPetLists[]>(localUrl+'/petslist', arr, httpOptions);
  }  

  getUserPetsLists(){
    return this.http.get<userPetLists[]>(localUrl+'/petslist');
  }

  onUpload(arr){
    return this.http.post(baseUrl, arr, httpOptions);
  }

  deletePet(id){
    return this.http.delete<deletePet[]>(localUrl+'/pets/'+id);
  }

  editPet(id) {
    return this.http.get(localUrl+'/pets/'+id)
  }

  updatePet(arr:petDetails) {
    return this.http.put(`${localUrl}/pets/${arr.id}`,arr , httpOptions)
  }
 
}

export interface UserDeatils {
    id?: number;
    fullname: string;
    username: string;
    password: string;
    email: string;
    address:string;
}

export interface petDetails {
  id?:number;
  userid:number;
  name: string;
  gender: number;
  age: number;
  address : string;
  image:string;
}

export interface userPetLists{
  id?:number;
  petId:number;
  userId:number;
}

export interface deletePet{
  id:number;
}

export interface checkOut{
  id:number,
  Quantity:number
}

