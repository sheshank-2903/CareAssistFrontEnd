import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  readFormData(formData:any){
    const recipient = 'sheshanksharma2903@gmail.com,yashdubey415@gmail.com';
    const subject = encodeURIComponent('Feedback of CareAssist from ' + formData.form.value.email.toLowerCase());
    const body = encodeURIComponent(formData.form.value.message);

    const mailtoLink = `mailto:${recipient}?&subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  }
}
