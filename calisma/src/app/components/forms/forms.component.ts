import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { passwordValidator } from 'src/app/paswordvalidation';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  newUser: User | undefined = undefined;
  public productForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, passwordValidator()]],
  });
  constructor(private formBuilder: FormBuilder) {}
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
