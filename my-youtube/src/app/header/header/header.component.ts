import { Component } from '@angular/core';
import { ItemListService } from 'src/app/item-list/item-list.service';

@Component({
  
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  isSortingVisible = false;

  constructor(private itemListService: ItemListService) { }

  onToggleFilters() {
    this.isSortingVisible = !this.isSortingVisible;
  }

  onSearch(event: unknown) {//?
    this.itemListService.search.next(event);
  }
}
