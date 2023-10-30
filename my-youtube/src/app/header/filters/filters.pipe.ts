import { Pipe, PipeTransform } from "@angular/core";
import { IItem } from "src/app/search/search-item/search-item.model";

@Pipe({
    name: 'filters'
  })
  export class FilterPipe implements PipeTransform {
    transform(value: IItem[], search: string): IItem[] {
      if (search) {
        return value.filter((card: IItem) => {
          const title = card?.snippet?.title?.toLowerCase();
          return title?.includes(search.toLowerCase());
        });
      }
      return value;
    }
  
  }
  