import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  urlProfil = ""
  isAuth: boolean
  constructor(private authService:AuthService, private router:Router, private userService:UserService) {
    this.isAuth=false

    this.urlProfil = '/profil'
   }


  ngOnInit(): void {
    this.isAuth= this.authService.isAuth 
  }

  onClickToDisconnect(){
    this.authService.signOut()
    this.router.navigate(['auth'])
  }

  onClickAddProduct(){
    this.router.navigate(['/produit/new'])
  }
  onClickGoToProfil(){   
      this.router.navigate([this.urlProfil])    
  }

}
