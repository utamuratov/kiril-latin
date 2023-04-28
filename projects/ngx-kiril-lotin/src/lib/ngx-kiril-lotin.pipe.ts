import { Pipe, PipeTransform } from '@angular/core';
import { CyrillToLatin } from './cyrill-to-latin';

type ConvertType = 'kirilToLotin' | 'lotinToKiril';

@Pipe({
  name: 'ngxKirilLotin',
  standalone: true,
})
export class NgxKirilLotinPipe implements PipeTransform {
  transform(text: string, type: ConvertType = 'lotinToKiril'): string {
    if (type === 'lotinToKiril') {
      return CyrillToLatin.kirillga(text);
    }
    return CyrillToLatin.lotinga(text);
  }
}
