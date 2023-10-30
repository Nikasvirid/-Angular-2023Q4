import { Component, OnInit } from '@angular/core';
import { IItem } from '../search/search-item/search-item.model';
import { Observable } from 'rxjs';
import { ISort } from '../sorting/sorting/sorting.component';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit{
    items!: Observable<IItem[]>;
    sort!: ISort;

    

    constructor(){

    }
    ngOnInit(): void {
        
    }
}
