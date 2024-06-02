import { HttpInterceptorFn, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { KeycloakService } from '../keycloak/keycloak.service';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {

  const keycloakService = inject(KeycloakService);

  const token = keycloakService.keycloak.token;

  if (token) {
    const modifiedReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(modifiedReq);
  }

  return next(req);
};
