import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
export const canActivateNewFormat: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('canActivateNewFormat çalıştı');
  if (inject(AuthService).isAuthenticate()) {
    return true;
  }
  return inject(Router).navigateByUrl('/login');
};
