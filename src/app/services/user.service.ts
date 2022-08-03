import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[]
  constructor() { 
    this.users = []

    this.users.push(new User("ulysse.31@market.com","aa"))
    this.users.push(new User("admin.31@market.com","aa"))
  }

  verifyLogin(userLog:User){
    for(let user of this.users){
      if(user.email === userLog.email){
        if(user.password === user.password){
          return true
        }
      }      
    }
    return false
  }

  getIdAuth(email:string):number{
    console.log('getIdAuth' + email)
    console.log(this.users)
    for(let user of this.users){
      if(user.email === email){
        return user.id
      }      
    }
    return 0;
  }

  getIndexUser(email:string):number{
    for(let index in this.users){
      if(this.users[index].email === email){
        return +index
      }      
    }
    return 0
  }

    
}
