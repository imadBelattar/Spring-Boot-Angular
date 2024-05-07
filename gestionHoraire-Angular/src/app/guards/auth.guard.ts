import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/authService/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
  if(!inject(AuthService).isLoggedIn()) {
      inject(Router).navigate(['/login']);
      return false;
  }
  return true;
};
