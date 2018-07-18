import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mituberia',
})

export class MituberiaPipe implements PipeTransform {
  transform(value: string):any {
    //let maxChars = parseInt(value);
    return value.substring(0,3)
  }
}
