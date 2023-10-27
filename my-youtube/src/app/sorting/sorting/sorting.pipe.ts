import { Pipe, PipeTransform } from '@angular/core';
import { BySort } from '../../header/filters/filters.model';
import { IItem } from '';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(

    items: IItem[],
    bySort: string,
    keySort?: string,
  ): IItem[] {
    if (!keySort) return items;

    switch (bySort) {
      case 'word': {
        return items.filter((item) => item.snippet.title.toLowerCase()
          .includes(keySort.toLowerCase()));
      }
      case 'date': {
        items.sort(
          (a, b) => new Date(b.snippet.publishedAt).getTime()
            - new Date(a.snippet.publishedAt).getTime(),
        );
        return keySort === BySort.descending ? items.reverse() : items;
      }
      case 'views': {
        items.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
        return keySort === BySort.descending ? items.reverse() : items;
      }
      default:
        return items;
    }
  }
}
