import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voyelles'
})
export class VoyellesPipe implements PipeTransform {

  private voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

  transform(value: string): string {
    return value // 'abc'
      .split('') // ['a','b','c']
      .map((char) => {
        if (this.voyelles.includes(char.toLowerCase())) {
          return char.toUpperCase();
        } else {
          return char;
        }
      })// ['A','b','c']
      .join(''); // 'Abc'
  }

}
