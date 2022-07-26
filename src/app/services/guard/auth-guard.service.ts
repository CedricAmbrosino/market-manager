import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService:AuthService, private router:Router) { 

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Boolean> | Promise<Boolean> | Boolean{
    if(this.authService.isAuth){
      return true
    }

    this.router.navigate(['auth'])
    return false
  }
}
