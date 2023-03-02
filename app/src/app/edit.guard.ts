import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserListComponent } from './admin/user-list/user-list.component';

export const EditGuardNewType = (
  component: UserListComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  if (component.isEdit()) {
    return confirm(
      'başka bir sayfaya giderseniz, değişiklikleriniz kaybolacaktır.'
    );
  }

  return true;
};

