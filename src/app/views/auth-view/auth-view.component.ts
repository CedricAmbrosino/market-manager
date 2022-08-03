import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  user:User
  authForm: FormGroup
  errorAuth = ""

  constructor(private authService:AuthService, private router:Router, private formBuilder:FormBuilder){
    this.user = new User("","");

    this.authForm = formBuilder.group({
      'email': ['',[Validators.email,Validators.required]],
      'password': ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmitAuth(){
    this.authService.signIn(this.user)
    .then(() =>{
      this.router.navigate(['dashboard'])
    }).catch((err) =>{
      this.errorAuth = err;
    })
  }

}
