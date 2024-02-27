import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Admin } from 'src/app/model/Admin';
import { AdminService } from 'src/app/services/AdminServices/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  isAddAdminModelVisible: boolean=false;
  addAdminForm !: FormGroup;
  deleteId!:number;
  adminList:Admin[]=[];
  search:any;

  constructor(private adminService:AdminService,private cookieService: CookieService,private formBuilder:FormBuilder,private router: Router){
    this.getAllAdmin();
  }
  
  getAllAdmin(){
    this.adminService.getAllAdmin(JSON.parse(this.cookieService.get('userId')).userToken)
             .subscribe(  
                    (admin) =>
                       { 
                          this.adminList = admin;
                          console.log(this.adminList);
                      }
            );
    }


toggleAddAdmin(input?:boolean) {
  let addModel=document.getElementById("addAdminFormModel");
  if(input!==undefined){
    if(!input){
      addModel?.classList.remove("active");
      this.isAddAdminModelVisible=false;
    }
  }
  else{
    this.closeDeleteModel();
    if(this.isAddAdminModelVisible){
      addModel?.classList.remove("active");
      this.isAddAdminModelVisible=false;
    }
    else{
      addModel?.classList.add("active");
      this.isAddAdminModelVisible=true;
    }
  }
}

  ngOnInit(){
    
    this. addAdminForm=this.formBuilder.group({
      adminName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]{3,20}$')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&./+]{8,}$')]],
      confirm_password: ['', Validators.required] 
    },{validator: this.passwordMatchValidator});
  }


  get getAdminForm(){
  
    return this. addAdminForm.controls;
  }

  onSubmit(){

    if(this. addAdminForm.invalid){
      return;
  }
  
  alert('Form submitted successfully');
  console.log(this. addAdminForm);
  this.addAdminForm.reset();
  
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirm_password = control.get('confirm_password')?.value;

    if (password !== confirm_password) {
      control.get('confirm_password')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

  confirmDelete(deleteId:number){
    this.deleteId=deleteId;
    let content=document.getElementById('confirmDeleteDisplay');
    this.toggleAddAdmin(false);
    content?.classList.add('active');
  }

  closeDeleteModel(){
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  submitConfirmDelete(){
    this.deleteAdminId(this.deleteId);
    alert('Delete completed');
    let content=document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  deleteAdminId(deleteId:number){
    this.adminService.deleteAdminById(JSON.parse(this.cookieService.get('userId')).userToken,deleteId)
             .subscribe(  
                    (admin) =>
                       { 
                          this.deleteId=0;
                          console.log(admin);
                          this.getAllAdmin();
                      }
            );
    }

    searchAdminByName(){
      if(this.search==null || typeof this.search !== 'string') alert("invalid Input for search by name");
      else{
        this.adminService.getAdminByName(this.search,JSON.parse(this.cookieService.get('userId')).userToken)
        .subscribe((adminList)=>{
          this.adminList=adminList;
        })
      }
  
    }
    searchAdminById(){
      const parsedNumber: number = parseInt(this.search, 10);
      if(this.search==null || isNaN(parsedNumber)) alert("invalid Input for search by Id");
      else{
        this.adminService.getAdminById(this.search,JSON.parse(this.cookieService.get('userId')).userToken)
        .subscribe((admin)=>{
          console.log(admin);
          this.adminList=[];
          this.adminList = this.adminList.concat(admin);
        })
      }
  
    }

}
