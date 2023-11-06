import { Component, OnInit } from '@angular/core';
import { IItem } from '../search/search-item/search-item.model';
import { Observable } from 'rxjs';
import { ISort } from '../sorting/sorting/sorting.component';
import { ItemListService } from './item-list.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
// export class ItemListComponent implements OnInit{
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
  export class ItemListComponent implements OnInit {
    item!: Observable<IItem[]>;
    sorting!: ISort;
  
    constructor(private cardListService: ItemListService) { }
  
    ngOnInit(): void {
      this.item = this.cardListService.items;
      this.cardListService.sort.subscribe((sort: ISort) => {
        this.sorting = sort;
      });
    }
}
