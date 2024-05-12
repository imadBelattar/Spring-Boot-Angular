import { HttpInterceptorFn, HttpHeaders } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = localStorage.getItem('accessToken') || '';

  const modifiedReq = req.clone({
    setHeaders: { Authorization: `Bearer ${accessToken}`},
    withCredentials: true
  })

  return next(modifiedReq);
};
