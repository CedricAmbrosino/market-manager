import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;
  emailAuth = ""

  constructor(private router:Router, private userService:UserService) { }

  signIn(user:User){
    return new Promise<void>((res,rej) => {
      setTimeout(()=>{       
        this.isAuth = this.userService.verifyLogin(user);
        if(this.isAuth){
          this.emailAuth = user.email
          res();
        }else{
          rej('Les idenfiants ne correpondent à aucun compte.')
        }
        
      }, 1000)
    })
  }

  signOut(){
    this.isAuth = false
    this.emailAuth = ""
    this.router.navigate(['auth'])
  }
}
