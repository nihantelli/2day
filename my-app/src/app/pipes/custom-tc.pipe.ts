import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTc',
})
export class CustomTcPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let x = '***';
    let y = value as string;
    let z = y.slice(3, 11);
    return x.concat(z);
  }
}
