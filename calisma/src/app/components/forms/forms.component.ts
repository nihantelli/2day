import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { passwordValidator } from 'src/app/components/forms/paswordvalidation';
import { ExistPasswordValidators } from 'src/app/exist-password-validator';
import { ExistPasswordService } from 'src/app/exist-password-control.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  newUser: User | undefined = undefined;
  public productForm = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    password: [
      '',
      {
        Validators: [Validators.required, passwordValidator()],
        asyncValidators: [ExistPasswordValidators(this.existPasswordService)],
      },
    ],
    isOkay: [false],
  });
  constructor(
    private formBuilder: FormBuilder,
    private existPasswordService: ExistPasswordService
  ) {
    this.existPasswordService
      .search('sunt')
      .subscribe((x) => console.log(x.length));
  }
  save() {
    this.newUser = this.productForm.value as User;
    console.log(this.newUser);
  }
  isInvalid(controlName: string): boolean {
    let control = this.productForm.get(controlName)!;
    if (!(control.invalid && (control.dirty || control.touched))) return false;
    if (control.errors?.['required']) return true;
    if (control.errors?.['passwordFormat']) return true;
    return false;
  }
  isInvalidControl(controlName: string, validationName: string) {
    let control = this.productForm.get(controlName)!;
    return control.errors?.[validationName];
  }
}
