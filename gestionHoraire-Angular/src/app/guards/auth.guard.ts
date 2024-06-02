import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/authService/auth.service';
import { inject } from '@angular/core';
import { KeycloakService } from '../keycloak/keycloak.service';

export const authGuard: CanActivateFn = ( ) => {

  const keycloakService = inject(KeycloakService);
  const router = inject(Router);
  if (keycloakService.keycloak?.isTokenExpired()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
