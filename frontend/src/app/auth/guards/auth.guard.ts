import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';


@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {
  constructor(private userService:UserService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userService.currentUser.token){
      
      return true;
    } else{
      this.router.navigate(['/login'], {queryParams:{returnUrl: state.url}})
      return false;
    }

   
  }

}
