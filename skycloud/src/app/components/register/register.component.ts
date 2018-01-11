import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  cpassword: String;

errmsg: String ="";
error: Boolean = false;
tbox: Boolean = false;
term: Boolean = false;
  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    this.error = false;
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      cpassword: this.cpassword
    };

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.errmsg = " Please fill all fields ";
      this.error = true;
      return false;
    }
    //validate username
    else if (!this.validateService.validateUser(user.username)){
      this.errmsg = "Not a valid username ";
      this.error = true;
      return false;
    }

    // Validate Email
    else if (!this.validateService.validateEmail(user.email)) {
      this.errmsg = " Not a valid Email-ID ";
      this.error = true;
      return false;
    }

    //validate passwords
    else if (!this.validateService.checkPassLen(user.password)) {
        this.errmsg = 'passwords must be of 8 character';
        this.error = true;
        return false;
     }else if (!this.validateService.comparePassword(user.password, user.cpassword)) {
      this.errmsg = "passwords does'nt match ";
      this.error = true;
      return false;
    }else if (!this.term) {
      this.errmsg = "please accept term's and condition's ";
      this.error = true;
      return false;
    }
  else{
    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
        this.errmsg = 'failed to register user';
        this.error = true;
      }
    });
  }

  }

  showtbox() {
    this.tbox = true;
  }

  close() {
    this.error = false;
  }

  boxclose() {
    this.tbox = false ;
  }
}
