import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/interface/IUserLogin';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/interface/IUserRegister';

const USER_KEY = 'User'

@Injectable({
  providedIn: 'root'
})
export class UserService {
public userObservable!:Observable<User>
private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage())
  constructor(private http : HttpClient, private toastrService: ToastrService) { 
    this.userObservable = this.userSubject.asObservable()
    
   }
////////////////////////////////////////////////////////////////////////

register(userRegister:IUserRegister):Observable<User>{
  return this.http.post<User>(USER_REGISTER_URL,userRegister).pipe(
    tap({
      next:(user)=>{
        this.setUserToLocalStorage(user);
        this.userSubject.next(user)
        this.toastrService.success(
          `welcome to the FoodStore ${user.name}`,
          'register successfull'
        )
      },
      error:(errorResponse)=>{
        this.toastrService.error(errorResponse.error,
          'register failed'
          )
      }
    })
  )
}
////////////////////////////////////////////////////////////////////////

login(userLogin:IUserLogin):Observable<User>{ 
 return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(
  tap({
    next:(user)=>{
      
      this.setUserToLocalStorage(user)
      this.userSubject.next(user);
      this.toastrService.success(
        `welcome to foodStore ${user.name}!`,
        'login succesfull'
      )
    },
    error:(errorResponse)=>{
      this.toastrService.error(errorResponse.error, 'Login Failed')
    }
  })
 ) 
}

////////////////////////////////////////////////////////////////////////

logout(){
  this.userSubject.next(new User())
  localStorage.removeItem(USER_KEY)
  window.location.reload();
}
////////////////////////////////////////////////////////////////////////

public get currentUser():User{  
  return this.userSubject.value
}

////////////////////////////////////////////////////////////////////////

private setUserToLocalStorage(user:User){
  
  localStorage.setItem(USER_KEY,JSON.stringify(user))
  
  
  
}
private getUserFromLocalStorage():User{
   const userJson = localStorage.getItem(USER_KEY)
 
  if(userJson){
   return JSON.parse(userJson) as User
  }else{
     return new User()
    
  } 
}
}
