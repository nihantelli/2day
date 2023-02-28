import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map } from 'rxjs';
import { ExistPasswordService } from './exist-password-control.service';

export function ExistPasswordValidators(
  existService: ExistPasswordService
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return existService
      .search(control.value)
      .pipe(map((x) => (x.length > 0 ? { passwordExist: true } : null)));
  };
}
