import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase',
})
export class CustomUppercasePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;

    let text = value as string;
    return `@${text.toUpperCase()}`;
  }
}
