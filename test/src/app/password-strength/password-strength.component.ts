import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: string = '';

  checkPasswordStrength() {
    
    const Medium = /^[a-zA-Z0-9]+$|^[a-zA-Z!@#$%^&*()_+\[\]{};':"\\|,.<>?`~-]+$|^[0-9!@#$%^&*()_+\[\]{};':"\\|,.<>?`~-]+$/.test(this.password)
    const Weak = /^[a-zA-Z]+$|^[0-9]+$|^[!@#$%^&*()_+\[\]{};':"\\|,.<>?`~-]+$/.test(this.password)

    if(this.password === ''){
      this.passwordStrength = 'None'
    } else if (this.password.length < 8) {
      this.passwordStrength = 'SuperWeak';
    } else if (Weak) {
      this.passwordStrength = 'Weak';
    } else if (Medium) {
      this.passwordStrength = 'Medium';
    } else {
      this.passwordStrength = 'Strong';
    }
    
    
  }

  isPasswordStrength() {
    if (this.passwordStrength === undefined || this.passwordStrength === '') {
      return 'None'; 
    }
    return this.passwordStrength;
  }
  

  
}
