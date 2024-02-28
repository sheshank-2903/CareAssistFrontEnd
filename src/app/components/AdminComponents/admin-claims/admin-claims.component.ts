import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Claims } from 'src/app/model/Claims';
import { ClaimsService } from 'src/app/services/ClaimsServices/claims.service';

@Component({
  selector: 'app-admin-claims',
  templateUrl: './admin-claims.component.html',
  styleUrls: ['./admin-claims.component.css']
})
export class AdminClaimsComponent {

  claimList: Claims[] = [];
  deleteId!: number;
  search!: number;

  constructor(private claimService: ClaimsService, private cookieService: CookieService) {
    this.getAllClaims();
  }
  getAllClaims() {
    this.claimService.getAllClaims(JSON.parse(this.cookieService.get('userId')).userToken)
      .subscribe(
        (claims) => {
          this.claimList = claims;
          console.log(this.claimList);
        }
      );
  }

  confirmDelete(deleteClaimId: number) {
    this.deleteId = deleteClaimId;
    let content = document.getElementById('confirmDeleteDisplay');
    content?.classList.add('active');
  }

  closeDeleteModel() {
    let content = document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  submitConfirmDelete() {
    this.deleteClaimId(this.deleteId);
    alert('delete completed');
    let content = document.getElementById('confirmDeleteDisplay');
    content?.classList.remove('active');
  }

  deleteClaimId(deleteId: number) {
    this.claimService.deleteClaimsById(JSON.parse(this.cookieService.get('userId')).userToken, deleteId)
      .subscribe(
        (claim) => {
          this.deleteId = 0;
          console.log(claim);
          this.getAllClaims();
        }
      );
  }


  searchClaimById() {
    this.claimList = [];
      this.claimService.getClaimsById(this.search, JSON.parse(this.cookieService.get('userId')).userToken).
        subscribe(data => {
          this.claimList = this.claimList.concat(data);
          console.log(this.claimList);
        })

    }
  }
