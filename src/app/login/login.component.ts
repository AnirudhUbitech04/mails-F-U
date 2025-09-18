import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

updateData = { email: '', currentPassword: '', newPassword: '' };
  message = '';
  errors: any = {};

  constructor(private mailService: MailService) {}

// this.mail.login(this.formData).subscribe({
//       next: (res: any) => {
//         if (res.status === 'success') {
//           this.authService.saveSession(res.token, res.user);
//           this.router.navigate(['/dashboard']);
//         } else {
//           alert('Login failed: ' + res.message);
//         }
//       },
//       error: (err) => {
//         alert(err.error?.message || 'Login failed');
//       }
//     });



  updatePassword() {
    this.mailService.updatePassword(this.updateData).subscribe({
      next: res => {
        this.message = res.message;
        this.errors = {};
       
      },
      error: err => this.handleError(err)
    });
  }

  
  handleError(err: any) {
    if (err.error?.messages) {
      this.errors = err.error.messages;
    } else {
      this.message = 'An unexpected error occurred.';
    }
  }


}
