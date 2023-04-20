import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { USERS } from './user-data';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const data: any = localStorage.getItem('user');
    let user;
    if (user !== null) {
      user = JSON.parse(data);
    }
    const email: string = user?.email;
    const role: string = user?.role;
    
    
    return true
  }
}
