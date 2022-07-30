import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean
  constructor(private authService:AuthService, private router:Router) {
    this.isAuth=false
   }


  ngOnInit(): void {
    this.isAuth= this.authService.isAuth 
  }

  onClickToDisconnect(){
    this.authService.signOut()
    this.router.navigate(['auth'])
  }

}
