import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
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

@Injectable({
  providedIn: 'root',
})
// export class AuthGuard  {
//   constructor(private authService: AuthService, private router: Router) {}
//   // canActivate(
//   //   route: ActivatedRouteSnapshot,
//   //   state: RouterStateSnapshot
//   // ):
//   //   | Observable<boolean | UrlTree>
//   //   | Promise<boolean | UrlTree>
//   //   | boolean
//   //   | UrlTree {
//   //   return true;
//   // }
// }
