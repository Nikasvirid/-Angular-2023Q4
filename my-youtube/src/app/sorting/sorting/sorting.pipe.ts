import { Pipe, PipeTransform } from "@angular/core";
import { ISort, Direction } from "./sorting.component";
import { IItem } from "src/app/search/search-item/search-item.model";

@Pipe({
    name: 'sort'
  })
  export class SortPipe implements PipeTransform {
    transform(value: IItem[], params: ISort): IItem[] {
      return value.sort(sortByField(params));
    }
  
  }
  
  const sortByField = ({ sortBy, orderBy }: ISort) => {
    if (sortBy === 'date') {
      return sortByDate(orderBy);
    } else if (sortBy === 'countOfViews') {
      return sortByCountOfViews(orderBy);
    }
  }
  
  const sortByDate = (orderBy: string) => (a: any, b: any) => {//?any
    const valA = new Date(path(['snippet', 'publishedAt'], a)).getTime();
    const valB = new Date(path(['snippet', 'publishedAt'], b)).getTime();
    return orderBy === Direction.DESC ? valA - valB : valB - valA;
  };
  
  const sortByCountOfViews = (orderBy: string) => (a: any, b: any) => { //?any
    const valA = Number(path(['statistics', 'viewCount'], a));
    const valB = Number(path(['statistics', 'viewCount'], b));
    return orderBy === Direction.DESC ? valA - valB : valB - valA;
  };

function path(arg0: string[], a: any): string | number | Date {
    throw new Error("Function not implemented.");
}
  