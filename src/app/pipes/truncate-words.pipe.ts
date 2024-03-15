
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'truncateWords'
})
export class TruncateWordsPipe implements PipeTransform {
  transform(value: string, words: number): string {
    if (!value) return '';
    const wordArray = value?.split(' '); 
    if (wordArray?.length <= words) return value; 
    const truncated = wordArray?.slice(0, words).join(' '); 
    return truncated + '...'; 
  }
}
