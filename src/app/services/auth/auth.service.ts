import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor(private router:Router) { }

  signIn(){
    return new Promise<void>((res,rej) => {
      setTimeout(()=>{
        this.isAuth = true;
        res();
      }, 1000)
    })
  }

  signOut(){
    this.isAuth = false
    this.router.navigate(['auth'])
  }
}
