import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ValidateService} from '../../services/validate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String = "";
  password: String = "";
  errmsg = "";
  error = false;
  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {

    const user = {
      username: this.username,
      password: this.password
    };

    if (!this.validateService.validateLogin(user)) {
      this.error = true;
         this.errmsg = "Username And Password required !";
    }else if (!this.validateService.validateLoginUser(user.username)) {
      this.error = true;
      this.errmsg = "Username  required !";
    }else if (!this.validateService.validateLoginPass(user.password)) {
      this.error = true;
      this.errmsg = "Password  required !";
    }else {
       console.log(user);
    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['/dashboard']);
      } else {
        console.log('failed to login');
      }
    });
  }
}
  close() {
    this.error = false;
  }
}
