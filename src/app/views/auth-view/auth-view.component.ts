import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router){ }

  ngOnInit(): void {
  }

  onClickToConnect(){
    this.authService.signIn()
    .then(() =>{
      this.router.navigate(['dashboard'])
    })
  }

}
