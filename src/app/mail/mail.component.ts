import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
})
export class MailComponent {
  step: string = 'register';  
  registerData = { name: '', email: '', password: '' };
  forgotEmail = '';
  resetData = { token: '', newPassword: '' };
  updateData = { email: '', currentPassword: '', newPassword: '' };
  message = '';
  errors: any = {};

  constructor(private mailService: MailService) {}

  
  register() {
    this.mailService.register(this.registerData).subscribe({
      next: res => {
        this.message = res.message;
        this.errors = {};
        this.step = 'forgot'; 
      },
      error: err => this.handleError(err)
    });
  }

  // Forgot 
  forgotPassword() {
    this.mailService.forgotPassword(this.forgotEmail).subscribe({
      next: res => {
        this.message = res.message + ': ' + res.token;
        this.errors = {};
        this.step = 'reset';  //Reset Password
      },
      error: err => this.handleError(err)
    });
  }

  // Reset 
  resetPassword() {
    this.mailService.resetPassword(this.resetData.token, this.resetData.newPassword).subscribe({
      next: res => {
        this.message = res.message;
        this.errors = {};
        this.step = 'register';  
      },
      error: err => this.handleError(err)
    });
  }


  // updatePassword() {
  //   this.mailService.updatePassword(this.updateData).subscribe({
  //     next: res => {
  //       this.message = res.message;
  //       this.errors = {};
  //       this.step = 'update'
  //     },
  //     error: err => this.handleError(err)
  //   });
  // }

  
  handleError(err: any) {
    if (err.error?.messages) {
      this.errors = err.error.messages;
    } else {
      this.message = 'An unexpected error occurred.';
    }
  }

  
  showForgot() {
    this.step = 'forgot';
  }

  
  showRegister() {
    this.step = 'register';
  }

  
  showReset() {
    this.step = 'reset';
  }

  
  // showUpdate() {
  //   this.step = 'update';
  // }
}
