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
  isAddAdminModelVisible: boolean = false;
  addAdminForm !: FormGroup;
  profile_picture: File|string="";
  deleteId!: number;
  adminList: Admin[] = [];
  search: any;
  confirmation!: string;
  admin: Admin = {
    adminId: 0,
    adminProfilePic: "",
    adminName: "",
    email: "",
    password: ""
  };
  constructor(private adminService: AdminService, private cookieService: CookieService, private formBuilder: FormBuilder, private router: Router) {
    this.getAllAdmin();
  }

  getAllAdmin() {
    this.search = undefined;
    this.adminService.getAllAdmin(JSON.parse(this.cookieService.get('userId')).userToken)
      .subscribe(
        (admins) => {
          this.adminList = admins.map(admin => {
            const imageUrl = `data:image/jpg;base64,${admin.adminProfilePic}`;
            return { ...admin, imageUrl };
          });

        }, error => { alert("Please try Again! Error Occured"); }
      );
  }



  toggleAddAdmin(input?: boolean) {
    let addModel = document.getElementById("addAdminFormModel");
    if (input !== undefined) {
      if (!input) {
        addModel?.classList.remove("active");
        this.isAddAdminModelVisible = false;
      }
    }
    else {
      this.closeDeleteModel();
      if (this.isAddAdminModelVisible) {
        addModel?.classList.remove("active");
        this.isAddAdminModelVisible = false;
      }
      else {
        addModel?.classList.add("active");
        this.isAddAdminModelVisible = true;
      }
    }
  }

  ngOnInit() {
    this.addAdminForm = this.formBuilder.group({
      adminProfilePic: ['',Validators.required],
      adminName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]{3,20}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&./+]{8,}$')]],
      confirm_password: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }


  get getAdminForm() {
    return this.addAdminForm.controls;
  }

  onFileSelected(event: any) {
    this.profile_picture = event.target.files[0];
    console.log(this.profile_picture);
}

  onSubmit() {
    if (this.addAdminForm.invalid) {
      return;
    }
    this.admin.adminId = this.addAdminForm.value.adminId;
    this.admin.adminName = this.addAdminForm.value.adminName;
    this.admin.email = this.addAdminForm.value.email.toLowerCase();
    this.admin.password = this.addAdminForm.value.password;
    this.admin.adminProfilePic="";
    this.adminService.addAdmin(this.admin,this.profile_picture)
      .subscribe((admin) => {
        alert('New Admin Added');
        this.addAdminForm.reset();
        this.toggleAddAdmin();
        this.getAllAdmin();
      }, (error) => { alert('failed to add Admin'); });
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

  confirmDelete(deleteId: number) {
    this.deleteId = deleteId;
    let content = document.getElementById('confirmDeleteDisplay');
    this.toggleAddAdmin(false);
    content?.classList.add('active');
  }

  closeDeleteModel() {
    this.confirmation = "";
    let content = document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  submitConfirmDelete() {
    this.confirmation = "";
    this.deleteAdminId(this.deleteId);
    alert('Delete completed');
    let content = document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  deleteAdminId(deleteId: number) {
    this.adminService.deleteAdminById(JSON.parse(this.cookieService.get('userId')).userToken, deleteId)
      .subscribe(
        (admin) => {
          this.deleteId = 0;
          this.getAllAdmin();
        }, error => { alert("Failed to delete Admin"); }
      );
  }

  searchAdminByName() {
    if (this.search == null || typeof this.search !== 'string') alert("invalid Input for search by name");
    else {
      this.adminService.getAdminByName(this.search, JSON.parse(this.cookieService.get('userId')).userToken)
        .subscribe((adminList) => {
          this.adminList = adminList;
        })
    }

  }
  searchAdminById() {
    const parsedNumber: number = parseInt(this.search, 10);
    if (this.search == null || isNaN(parsedNumber)) alert("invalid Input for search by Id");
    else {
      this.adminList = [];
      this.adminService.getAdminById(this.search, JSON.parse(this.cookieService.get('userId')).userToken)
        .subscribe((admin) => {
          this.adminList = this.adminList.concat(admin);
        })
    }
  }
  getDisplay(adminId: number): string {
    if (adminId === JSON.parse(this.cookieService.get('userId')).userId)
      return "none";
    else
      return "flex"
  }
  
}
