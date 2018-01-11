import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.name  ==  undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  validateUser(username) {
   const re = /^[A-Za-z\d\W]{3}[\S]+$/;
   return re.test(username);
  }

  comparePassword(pass, cpass) {
    if (pass === cpass) return true;
    else return false ;
  }
   checkPassLen(password) {
     if ( password.length <= 8 )
     {
       return false;
     }else
        {  return true; }
   }
  validateLogin(user) {
    if (user.username  === ""  && user.password === "" )  {
      return false;
    } else
            return true;
}
validateLoginUser(user) {
  if ( user == "" ) {
    return false;
  } else
        return true;
}
validateLoginPass(pass) {
  if ( pass == "" ) {
    return false;
  } else
        return true;
}
}
