import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemListService } from 'src/app/item-list/item-list.service';

export interface ISort {
  sortBy: string;
  orderBy: string;
  search: string;
}

export enum Direction {
  ASC = 'ASC',
  DESC = 'DESC'
}

export const defaultSort = {
  sortBy: 'date',
  orderBy: Direction.DESC,
  search: ''
};

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  @Input()
  isVisible!: boolean;
  @Output() handleSortingChange = new EventEmitter<ISort>();

  sortBy: string;
  orderBy: Direction;
  search: string;

  labels = [
    {
      name: 'date',
      label: 'Date'
    },
    {
      name: 'countOfViews',
      label: 'Count Of Views'
    }
  ];

  constructor(private ItemListService: ItemListService) {
    const { sortBy, orderBy } = defaultSort;
    this.sortBy = sortBy;
    this.orderBy = orderBy;
    this.search = '';
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSort(name: string): void {
    if (name === this.sortBy) {
      this.orderBy = this.orderBy === Direction.DESC ? Direction.ASC : Direction.DESC;
    } else {
      this.sortBy = name;
      this.orderBy = Direction.DESC;
    }
    this.ItemListService.sort.next({ sortBy: this.sortBy, orderBy: this.orderBy, search: this.search });
  }

  onChange(event: { target: { value: string; }; }) {
    this.search = event.target.value;
    this.ItemListService.sort.next({ sortBy: this.sortBy, orderBy: this.orderBy, search: this.search });
  }
}
