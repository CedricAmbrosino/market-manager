import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil-view',
  templateUrl: './profil-view.component.html',
  styleUrls: ['./profil-view.component.css']
})
export class ProfilViewComponent implements OnInit {

  indexUser=0
  user:User
  ProfilForm:FormGroup

  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute, private router:Router, private userService:UserService,
      private authService:AuthService) {

    this.indexUser= userService.getIndexUser(authService.emailAuth)
    this.user = userService.users[this.indexUser]
    console.log("this.indexUser : " +this.indexUser);
    console.log(this.user);
    
    this.ProfilForm = formBuilder.group({
      'email': [this.user.email,[Validators.email,Validators.required]],
      'password': [this.user.password,[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmitProfil(){
    console.log("this.userService.users[this.user.id-1].email : " + this.userService.users[this.indexUser].email);
    console.log("this.user.email : " + this.user.email);
    console.log("this.user.id-1 : " + (this.indexUser));
    
    if(this.authService.emailAuth  !== this.user.email){
      console.log('----email différent----');
      console.log('this.authService.emailAuth : ' + this.authService.emailAuth);
      console.log('this.user.email : ' + this.user.email);      
      this.authService.emailAuth = this.user.email
      console.log('Après modif : ' + this.authService.emailAuth);
    }    
    this.userService.users[this.indexUser]= this.user

    console.log(this.userService.users);
    
    this.router.navigate(['/'])
  }

}
