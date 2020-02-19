import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ApiService, petDetails} from '../api.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpEventType} from '@angular/common/http';
import { tap } from 'rxjs/operators';

//import {FileUploader} from 'ng2-file-upload';
const URL = '../../assets/images/products';
@Component({
  selector: 'app-addpets',
  templateUrl: './addpets.component.html',
  styleUrls: ['./addpets.component.css']
})
export class AddpetsComponent implements OnInit {
  
  addPetsForm: FormGroup;
  selectedFile:File = null;
  submitted = false;
  
  petname = new FormControl('', Validators.required);
  petaddress = new FormControl('',Validators.required);
  petage = new FormControl('',Validators.required);
  petgender = new FormControl('',Validators.required);
  imgEx = false;
  imageName = '';
  previewUrl:any = null;
  petProdDet = [];
  editProd = {};
  title = "";
  action = null;
  petId = 0;
  actionBtn = 'Add'; 
  showProduct = true;

  
  constructor(private formBuilder:FormBuilder, private api : ApiService, private router : Router) { 
     if(!this.api.log.value){
      this.api.err.next("Please Login!");
      this.router.navigate(['login']);
     }else{
      this.api.err.next("");
     }

    // console.log(this.products);
  }

  ngOnInit() {
   // console.log("Hi");
      this.addPetsForm = this.formBuilder.group({
          petname : this.petname,
          petaddress : this.petaddress,
          petage : this.petage,
          petgender : this.petgender,
      })
      this.loadProducts();
      this.title = "Add Pet";
  }

  loadProducts(){
    this.api.getPetDetails().subscribe(data => this.petProdDet = data);
  }

  onSubmit(){
    console.log("----"+this.petId);
    this.submitted = true;
    if(this.addPetsForm.invalid || this.imgEx)
      return

   /* if(this.imgEx) {
      console.log('Wrong');
      return
    } */
      const petPOST = <petDetails> {
        userid: this.api.uId.value,
        name: this.petname.value,
        gender: this.petgender.value,
        age: this.petage.value,
        address: this.petaddress.value,
        // image: this.imageName
        image: this.previewUrl
      }  
     // this.onUpload();
     if(this.petId){
       console.log('dfdfd');
      petPOST.id = this.petId;
      this.api.updatePet(petPOST).subscribe((data) => {
        console.log(data);
        this.showProduct = true;
       // this.addPetsForm.reset();        
       // this.router.navigate(['home']);   
       this.loadProducts();      
    });
     }else{
      this.api.setPetDetails(petPOST).subscribe((data) => {
        console.log(data);
       // this.addPetsForm.reset();        
       // this.router.navigate(['home']); 
       this.showProduct = true;
       this.loadProducts();
                
    });
     }
     
  }

  onFileSelected(event){
    this.api.err.next('');
   // console.log(event);
    let imgExt = ['jpeg','png','jpg'];
    this.selectedFile = <File>event.target.files[0];
   // console.log("image", this.selectedFile);
    const [img, ext] = this.selectedFile.type.split("/");
  //  console.log(img);
  //  console.log(ext);
   if(imgExt.indexOf(ext) == -1){
      this.imgEx = true;
      this.previewUrl = '';
    }else{
        var mimeType = this.selectedFile.type;
        if (mimeType.match(/image\/*/) == null) {
          return;
        }
        var reader = new FileReader();      
        reader.readAsDataURL(this.selectedFile); 
        reader.onload = (_event) => { 
        this.previewUrl = reader.result; 
       // console.log("url", this.previewUrl);
       }
      this.imgEx = false;
    }
    //console.log(this.selectedFile);
  }
  

  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedFile, this.selectedFile.name);
    this.api.onUpload(fd).subscribe(data=>{
        console.log(fd);
        
      /*  if(data.type == HttpEventType.UploadProgress) {
            console.log('Upload progress: ', Math.round(data.loaded / data.total * 100) + '%');
        } else if(data.type === HttpEventType.Response) {
          console.log(data);
        } */
    });
  }

  deleteProd(id) {
    //console.log(id);
    alert("heee");
  }

  editProduct(obj) {
    this.showProduct  = false;
    this.title = "Edit Pet";
    this.action = "edit"
    //  id.pipe(
      // tap((user) => this.addPetsForm.patchValue(user))
    // );
    this.petId = obj.id;
    this.actionBtn = 'Update';
 
  this.addPetsForm.patchValue({
      petname : obj.name,
      petaddress : obj.address,
      petage : obj.age,
      petgender : obj.gender,
      image: obj.image
  })
    
    //console.log("value", this.editProd);

  }

  addNewProducts(){
    this.showProduct  = false;
  }

  CancelAddProducts(){
    this.showProduct = true;
  }

}
