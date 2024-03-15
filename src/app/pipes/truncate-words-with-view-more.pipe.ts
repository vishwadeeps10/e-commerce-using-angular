import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone:true,
  name: 'truncateWordsWithViewMore'
})
export class TruncateWordsPipeWithViewMore implements PipeTransform {
  transform(value: string, words: number, isTruncated: boolean): string {
    if (!value) return '';
    const wordArray = value.split(' ');
    if (wordArray.length <= words) return value;
    const truncated = wordArray.slice(0, words).join(' ');
    if (isTruncated) {
      return truncated + '...';
    } else {
      return value;
    }
  }
}
