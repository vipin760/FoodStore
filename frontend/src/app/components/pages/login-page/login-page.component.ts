import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/shared/models/User';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
loginForm!:FormGroup
isSubmitted:boolean= false
returnUrl=""

constructor(private fb :FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl
  }

  get fc(){
    return this.loginForm.controls
  }

  submit(){
    this.isSubmitted = true
    if(this.loginForm.invalid){
      return;
    }else{
      this.userService.login({email: this.fc.email.value,
      password: this.fc.password.value}).subscribe(()=>{   
        this.router.navigateByUrl(this.returnUrl)
      })
    }
    
  }

}
